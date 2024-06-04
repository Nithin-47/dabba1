// 1. Create a collection called "students"
db.createCollection("students")

// 2. Insert at least 5 documents into the "students" collection
db.students.insertMany([
    { student_id: 1, name: 'John', age: 20, grades: [{ subject: 'Math', score: 85 }, { subject: 'English', score: 90 }], address: '123 Main St' },
    { student_id: 2, name: 'Jane', age: 22, grades: [{ subject: 'Math', score: 90 }, { subject: 'English', score: 95 }], address: '456 Oak St' },
    { student_id: 3, name: 'Bob', age: 21, grades: [{ subject: 'Math', score: 80 }, { subject: 'English', score: 85 }], address: '789 Pine St' },
    { student_id: 4, name: 'Alice', age: 23, grades: [{ subject: 'Math', score: 95 }, { subject: 'English', score: 100 }], address: '321 Elm St' },
    { student_id: 5, name: 'Charlie', age: 22, grades: [{ subject: 'Math', score: 88 }, { subject: 'English', score: 92 }], address: '654 Willow St' }
])

// 3. Write a MongoDB query to find the average score for each subject across all students
db.students.aggregate([
    { $unwind: "$grades" },
    { $group: { _id: "$grades.subject", avgScore: { $avg: "$grades.score" } } }
])

// 4. Write a MongoDB query to find the student with the highest average score and display their name and address
db.students.aggregate([
    { $unwind: "$grades" },
    { $group: { _id: "$name", avgScore: { $avg: "$grades.score" }, address: { $first: "$address" } } },
    { $sort: { avgScore: -1 } },
    { $limit: 1 }
])

// 5. Drop the "students" collection
db.students.drop()