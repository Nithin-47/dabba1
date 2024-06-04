// case 1: to connect mongodb with terminal
// to connect mongodb with mongosh
// install mongosh if not exists
// " mongosh "mongodb+srv://cl0.ukffm1z.mongodb.net/" --apiVersion 1 --username saikrishna "
// now enter the password

// case 2: to connect mongodb with vs code
// to connect mongodb with vs code
// install MongoDB for VS Code extension
// click on connect and paste the link by replacing the 'password' with password
// " mongodb + srv://saikrishna:password@cl0.ukffm1z.mongodb.net/ "

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------

// using mongodb
show dbs

// this will create the database if not existing
use db_name

// to create a collection
db.createCollection("collection_name")

// to show collections
show collections

// to insert a document
db.collection_name.insertOne({ key: value })

// to insert multiple documents
db.collection_name.insertMany([{ key: value }, { key: value }])

// to read the documents
db.collection_name.find()

// to update a document
db.collection_name.updateOne({ key: value }, { $set: { key: value } }, { upsert: true })

// to delete a document
db.collection.deleteOne({ /* filter criteria */ });
// ex: db.collection.deleteMany({ status: "inactive" });

// to delete a collection
db.collection_name.drop()

// find methods
db.collection_name.find({ key: value })
db.collection_name.find({ key: { $eq: value } })
db.collection_name.find({ key: { $gt: value } })
db.collection_name.find({ key: { $gte: value } })
db.collection_name.find({ key: { $lt: value } })
db.collection_name.find({ key: { $lte: value } })
db.collection_name.find({ key: { $ne: value } })
db.collection_name.find({ key: { $in: [value1, value2] } })
db.collection_name.find({ key: { $nin: [value1, value2] } })
db.collection_name.find({ key: { $exists: true } })
db.collection_name.find({ key: { $exists: false } })
db.collection_name.find({ key: { $type: "value" } })

// find methods with logical operators
db.Student.find({ StudName: "Aryan David" });

// find methods with projection 
db.Student.find({}, { StudName: 1, Grade: 1, _id: 0 });

// find methods with regular expressions
// The `.pretty()` method formats the output
db.Student.find({ Grade: { $eq: 'VII' } }).pretty();

// find methods with logical operators
db.Student.find({ Hobbies: { $in: ['Chess', 'Skating'] } }).pretty();

// find methods with regular expressions
db.Student.find({ StudName: /^M/ }).pretty();

// find methods with regular expressions
db.Student.find({ StudName: /e/ }).pretty();

// count the number of documents
db.Student.count();

// sort the documents
db.Student.find().sort({ StudName: -1 }).pretty();

