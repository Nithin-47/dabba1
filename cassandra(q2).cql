-- 1. Create a keyspace by name Library
CREATE KEYSPACE IF NOT EXISTS Library
WITH replication = {'class': 'SimpleStrategy', 'replication_factor': 1};

-- 2. Create a column family by name Library-Info with attributes Stud_Id Primary Key, Counter_value of type Counter, Stud_Name, Book-Name, Book-Id, Date_of_issue 
CREATE TABLE IF NOT EXISTS library_info (
    Stud_Id INT PRIMARY KEY,
    Counter_value COUNTER,
    Stud_Name TEXT,
    Book_Name TEXT,
    Book_Id UUID,
    Date_of_issue DATE
);

-- 3. Insert the values into the table in batch 
BEGIN BATCH
    INSERT INTO library_info (Stud_Id, Stud_Name, Book_Name, Book_Id, Date_of_issue)
    VALUES (112, 'John Doe', 'BDA', uuid(), '2024-06-03');
    INSERT INTO library_info (Stud_Id, Stud_Name, Book_Name, Book_Id, Date_of_issue) VALUES (113, 'Jane Smith', 'DSA', uuid(), '2024-06-04');
    INSERT INTO library_info (Stud_Id, Stud_Name, Book_Name, Book_Id, Date_of_issue) VALUES (114, 'Alice Johnson', 'Algorithms', uuid(), '2024-06-05');
    INSERT INTO library_info (Stud_Id, Stud_Name, Book_Name, Book_Id, Date_of_issue) VALUES (115, 'Bob Williams', 'DBMS', uuid(), '2024-06-06');
APPLY BATCH;

-- 4. Display the details of the table created and increase the value of the counter 
SELECT * FROM library_info;

-- Increment the counter for a specific student (e.g., Stud_Id = 112)
UPDATE library_info SET Counter_value = Counter_value + 1 WHERE Stud_Id = 112;

-- -- 5. Write a query to show that a student with id 112 has taken a book “BDA” 2 times. 
SELECT COUNT(*) FROM library_info WHERE Stud_Id = 112 AND Book_Name = 'BDA';

-- 6. Export the created column to a csv file 
-- COPY library_info TO 'library_info.csv' WITH HEADER = true;

-- 7. Import the csv file to the column family
-- COPY library_info FROM 'library_info.csv' WITH HEADER = true;