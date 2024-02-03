class KnowledgeBase:
    def __init__(self):
        self.clauses = []

    def add_clause(self, clause):
        self.clauses.append(clause)

    def resolve(self, clause1, clause2):
        resolved_clause = []

        for literal in clause1:
            if ("not " + literal) not in clause2:
                resolved_clause.append(literal)

        for literal in clause2:
            if ("not " + literal) not in clause1:
                resolved_clause.append(literal)

        return resolved_clause

    def resolution(self):
        new_clauses = self.clauses.copy()

        while True:
            n = len(new_clauses)

            for i in range(n):
                for j in range(i + 1, n):
                    clause1 = new_clauses[i]
                    clause2 = new_clauses[j]

                    resolved_clause = self.resolve(clause1, clause2)

                    if not resolved_clause:
                        # A contradiction is found
                        return True

                    if resolved_clause not in new_clauses:
                        new_clauses.append(resolved_clause)

            if n == len(new_clauses):
                # No new clauses were added in the last iteration
                return False

# Example usage:
if __name__ == "__main__":
    # Create a knowledge base
    kb = KnowledgeBase()

    # Add clauses to the knowledge base
    kb.add_clause(["P", "Q"])
    kb.add_clause(["not P", "R"])
    kb.add_clause(["not R", "S"])

    # Test resolution
    result = kb.resolution()

    if result:
        print("The knowledge base is inconsistent. Contradiction found.")
    else:
        print("The knowledge base is consistent. No contradiction found.")
