db.test.aggregate([
    // stage-1
    // { $group: { _id: "$address.country", count: { $sum: 1 }, amakeDekhaoName: { $push: "$name" } } }
    {
        $group: {
            _id: "$address.country",
            count: { $sum: 1 },
            fullDoc: { $push: "$$ROOT" }
        }
        // stage-2
    },
    {
        $project: {
            "fullDoc.name": 1,
            "fullDoc.email": 1,
            "fullDoc.phone": 1
        }
    }
])

// 6. Calculate the total balance of individuals for each company and display
// the company name along with the total balance. Limit the result to show
// only the top two companies with the highest total balance.
// Hints: Explore $slice, $split.

db.getCollection("massive-data").aggregate([
    //stage1

    {
        $group: { 
            _id: "$company", 
            totalBalance: { $sum: { $toDouble: { $substrBytes: ["$balance", 1, { $subtract: [{ $strLenBytes: "$balance" }, 1] }] } } } }
        },
    // stage-2
    {$sort:{totalBalance:-1}},
    //limit-2
    {$limit:2}
])
