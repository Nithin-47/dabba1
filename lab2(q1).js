// 1. Create a database “Student” with the following attributes Rollno, Age, ContactNo, EmailId.
use("student");
db.createCollection("student");

// 2. Insert appropriate values
db.Student.insertMany(
  [{ Roll_no: 1, Age: 21, Cont: 9876, email: "antara.de9@gmail.com" },
  { Roll_no: 2, Age: 22, Cont: 9976, email: "anushka.de9@gmail.com" },
  { Roll_no: 3, Age: 21, Cont: 5576, email: "anubhav.de9@gmail.com" },
  { Roll_no: 4, Age: 20, Cont: 4476, email: "pani.de9@gmail.com" },
  { Roll_no: 10, Age: 23, Cont: 2276, email: "rekha.de9@gmail.com" },
  { Roll_no: 11, Age: 22, Name: 'ABC', Cont: 3376, email: "hello.de9@gmail.com" }
  ]
);

// 3. Write query to update Email-Id of a student with rollno 10.
db.Student.updateOne(
  { Roll_no: 10 },
  { $set: { 'email': 'hey@mail' } }
);

// 4. Replace the student name from “ABC” to “FEM” of rollno 11
db.Student.updateOne(
  { Roll_no: 11 },
  { $set: { Name: 'Hello' } },
  { upsert: true }
);
