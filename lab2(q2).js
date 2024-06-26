// 1. Create a collection by name Customers with the following attributes: Cust_id, Acc_Bal, Acc_Type.
use("customers")
db.createCollection("customers")

// 2. Insert at least 5 values into the table
db.Customers.insertMany([
    { Cust_id: 1, Acc_Bal: 1500, Acc_Type: "Z" },
    { Cust_id: 2, Acc_Bal: 2000, Acc_Type: "Z" },
    { Cust_id: 3, Acc_Bal: 1800, Acc_Type: "Z" },
    { Cust_id: 4, Acc_Bal: 1300, Acc_Type: "Z" },
    { Cust_id: 5, Acc_Bal: 1400, Acc_Type: "Z" }
]);

// 3. Write a query to display those records whose total account balance is greater than 1200 of account type ‘Z’ for each customer_id.
db.Customers.aggregate([
    { $match: { Acc_Type: "Z" } },
    { $group: { _id: "$Cust_id", totalBalance: { $sum: "$Acc_Bal" } } },
    { $match: { totalBalance: { $gt: 1200 } } }
]);

// 4. Determine Minimum and Maximum account balance for each customer_i use customer
db.Customers.aggregate([
    { $group: { _id: "$Cust_id", minBalance: { $min: "$Acc_Bal" }, maxBalance: { $max: "$Acc_Bal" } } }
]);