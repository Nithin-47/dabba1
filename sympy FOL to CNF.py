from sympy import symbols, Implies, And, Or, Not, to_cnf

def fol_to_cnf(fol_formula):
    # Replace implication with its equivalent
    cnf_formula = fol_formula.subs(Implies(p, q), Or(Not(p), q))

    # Convert to CNF using sympy's to_cnf function
    cnf_formula = to_cnf(cnf_formula)

    return cnf_formula

# Example usage:
# Define variables
p, q, r = symbols('p q r')

# FOL formula
fol_formula = (p & q) >> r

# Convert to CNF
cnf_result = fol_to_cnf(fol_formula)

print("FOL Formula:", fol_formula)
print("CNF Formula:", cnf_result)
