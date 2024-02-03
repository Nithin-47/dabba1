class KnowledgeBase:
    def __init__(self):
        self.clauses = []

    def add_clause(self, clause):
        self.clauses.append(clause)

    def unify(self, term1, term2, substitution):
        if substitution is None:
            return None
        elif term1 == term2:
            return substitution
        elif isinstance(term1, str) and term1.islower():
            return self.unify_var(term1, term2, substitution)
        elif isinstance(term2, str) and term2.islower():
            return self.unify_var(term2, term1, substitution)
        elif isinstance(term1, list) and isinstance(term2, list):
            return self.unify(term1[1:], term2[1:], self.unify(term1[0], term2[0], substitution))
        else:
            return None

    def unify_var(self, var, x, substitution):
        if var in substitution:
            return self.unify(substitution[var], x, substitution)
        elif x in substitution:
            return self.unify(var, substitution[x], substitution)
        else:
            substitution[var] = x
            return substitution

    def unify_clauses(self, clause1, clause2):
        substitution = {}
        for term1, term2 in zip(clause1, clause2):
            substitution = self.unify(term1, term2, substitution)
            if substitution is None:
                return None
        return substitution

# Example usage:
if __name__ == "__main__":
    # Create a knowledge base
    kb = KnowledgeBase()

    # Add clauses to the knowledge base
    kb.add_clause(["P", "x", "Q", "y"])
    kb.add_clause(["P", "A", "Q", "B"])

    # Test unification
    clause1 = kb.clauses[0]
    clause2 = kb.clauses[1]

    substitution = kb.unify_clauses(clause1, clause2)

    if substitution is not None:
        print(f"Unification successful. Substitution: {substitution}")
    else:
        print("Unification failed. Clauses cannot be unified.")
