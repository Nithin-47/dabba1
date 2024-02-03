class KnowledgeBase:
    def __init__(self):
        self.facts = set()
        self.rules = []

    def add_fact(self, fact):
        self.facts.add(fact)

    def add_rule(self, rule):
        self.rules.append(rule)

    def forward_reasoning(self):
        new_facts = set()

        while True:
            added_new_fact = False

            for rule in self.rules:
                antecedent, consequent = rule

                if all(fact in self.facts for fact in antecedent) and consequent not in self.facts:
                    new_facts.add(consequent)
                    added_new_fact = True

            if not added_new_fact:
                break

            self.facts.update(new_facts)

        return self.facts

# Example usage:
if __name__ == "__main__":
    # Create a knowledge base
    kb = KnowledgeBase()

    # Add facts to the knowledge base
    kb.add_fact("Sunny")
    kb.add_fact("Warm")

    # Add rules to the knowledge base
    kb.add_rule((["Sunny", "Warm"], "Happy"))
    kb.add_rule((["Rainy"], "Sad"))

    # Perform forward reasoning
    new_conclusions = kb.forward_reasoning()

    print("Knowledge base facts:")
    print(kb.facts)

    print("\nNew conclusions:")
    print(new_conclusions)
