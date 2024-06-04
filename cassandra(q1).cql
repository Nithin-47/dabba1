-- 1. Create a keyspace by name Employee 
CREATE KEYSPACE IF NOT EXISTS Employee 
WITH replication = {'class': 'SimpleStrategy', 'replication_factor': 1};

-- 2. Create a column family by name Employee-Info with attributes Emp_Id Primary Key, Emp_Name, Designation, Date_of_Joining, Salary, Dept_Name
CREATE TABLE IF NOT EXISTS Employee_Info (
    Emp_Id INT PRIMARY KEY,
    Emp_Name TEXT,
    Designation TEXT,
    Date_of_Joining DATE,
    Salary DECIMAL,
    Dept_Name TEXT
);

-- 3. Insert the values into the table in batch 
BEGIN BATCH

INSERT INTO Employee_Info (Emp_Id, Emp_Name, Designation, Date_of_Joining, Salary, Dept_Name) 
VALUES (101, 'John Doe', 'Manager', '2023-01-15', 50000, 'Engineering');
INSERT INTO Employee_Info (Emp_Id, Emp_Name, Designation, Date_of_Joining, Salary, Dept_Name) 
VALUES (102, 'Jane Smith', 'Developer', '2023-02-20', 40000, 'Marketing');

APPLY BATCH;

-- 4. Update Employee name and Department of Emp-Id 121 
UPDATE Employee_Info
SET Emp_Name = 'New Name', Dept_Name = 'New Department' 
WHERE Emp_Id = 121;

-- 5. Sort the details of Employee records based on salary 
SELECT * FROM Employee_Info
ORDER BY Salary DESC;

-- 6. Alter the schema of the table Employee_Info to add a column Projects which stores a set of Projects done by the corresponding Employee. 
ALTER TABLE Employee_Info 
ADD Projects SET<TEXT>;

-- 7. Update the altered table to add project names. 
UPDATE Employee_Info 
SET Projects = {'Project A', 'Project B'} 
WHERE Emp_Id = 101;

-- 8. Create a TTL of 15 seconds to display the values of Employees. 
SELECT * FROM Employee_Info 
USING TTL 15;