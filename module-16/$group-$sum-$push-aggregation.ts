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
