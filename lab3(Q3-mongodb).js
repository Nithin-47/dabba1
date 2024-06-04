// Create a collection by the name blogPosts and it has 3 fields id, title and comments. In the collection the comments field is an array which consists of user details. Each collection consists of two user details inside the comments array- user name and text

// 1. Adding an element into araay
use('blogPosts');

db.createCollection('blogPosts');

logPosts.insertOne({
    id: "1BM21CS123",
    title: "Movie Review",
    comments: [
        {
            userName: "John",
            text: "i am john man!"
        },
        {
            userName: "Doe",
            text: "hey myann"
        }
    ]
});

for (var i = 2; i <= 6; i++) {
    db.blogPosts.insertOne({
        id: "1BM21CS" + i,
        title: "Movie Review " + i,
        comments: [
            {
                userName: "John" + i,
                text: "i am john man " + i + "!"
            },
            {
                userName: "Doe" + i,
                text: "hey myann " + i
            }
        ]
    });
}

db.blogPosts.find();

// 2. Display second element
db.blogPosts.find().skip(1).limit(1);

// 3. Display size of the array
db.posts.aggregate([
    {
        "$project": {
            "numberOfComments": { "$size": "$comments" }
        }
    }
]);

db.posts.aggregate([
    {
        "$project": {
            "firstTwoComments": { "$slice": ["$comments", 2] }
        }
    }
]);


// 5. Update the document with id 4 and replace the element present in 1st index position of the array with another array
// Find the document
var doc = db.blogPosts.findOne({ id: "1BM21CS4" });

// Replace the element at the 1st index position of the comments array
doc.comments[1] = {
    userName: "new comment 1",
    text: "new comment 2"
};

// Save the document back to the collection
db.blogPosts.updateOne(
    { id: "1BM21CS4" },
    { $set: { comments: doc.comments } }
);
