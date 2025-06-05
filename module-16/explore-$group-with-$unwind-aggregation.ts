db.test.aggregate([
    //stage-1
    { $unwind: "$friends" },
    // stage-2
    {
        $group: { _id: "$friends",count:{$sum:1} }
    }
])


db.test.aggregate([
    // stage-1
    {
        $unwind: "$interests"
    },
    //stage-2
    {
        $group: { _id: "$age", interestPerAge: { $push: "$interests" } }
    }
])
