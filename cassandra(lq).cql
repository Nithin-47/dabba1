-- Create a keyspace "company"
CREATE KEYSPACE if not exists company WITH replication = {'class':'SimpleStrategy', 'replication_factor' : 1};
-- Use the keyspace
USE company;

-- Create the table "employee"
CREATE TABLE if not exists employee (
    id int,
    name text,
    department text,
    designation text,
    salary int,
    primary key((id),designation,salary)
); 

-- Insert required rows into the table
INSERT INTO employee (id, name, department, designation, salary) VALUES (1, 'John', 'Sales', 'Manager', 90000);
INSERT INTO employee (id, name, department, designation, salary) VALUES (2, 'Jane', 'Marketing', 'Manager', 95000);
INSERT INTO employee (id, name, department, designation, salary) VALUES (3, 'Bob', 'HR', 'Employee', 80000);
INSERT INTO employee (id, name, department, designation, salary) VALUES (4, 'Alice', 'Sales', 'Employee', 85000);

-- Display name and department whose designation is "Manager" and salary is greater than 85,000
-- Create an index on the salary column
-- CREATE INDEX ON employee (salary);
-- Note: Secondary indexes can be used with ALLOW FILTERING to perform the query

create index on employee(designation);

paging off

SELECT name, department
FROM employee
WHERE id in (1,2,3,4) and designation = 'Manager' AND salary > 85000
ORDER BY salary DESC;


-- Add new field 'previous_experience' to the table
ALTER TABLE employee ADD previous_experience int;

-- Update the row with id=4 to set 'previous_experience' to 15
UPDATE employee SET previous_experience = 15 WHERE id = 4;

-- Import existing CSV file into the current table
-- COPY employee (id, name, department, designation, salary) FROM '/path/to/employee_data.csv' WITH HEADER = TRUE;