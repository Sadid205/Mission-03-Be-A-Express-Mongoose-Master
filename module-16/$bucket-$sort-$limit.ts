db.test.aggregate([
    // stage-1
    {
        $bucket: {
            groupBy: "$age",
            boundaries: [20, 40, 60, 80],
            default: "80 er uporer bura gula",
            output: {
                count: { $sum: 1 },
                karakaraAche: { $push: "$$ROOT" }
            }
        }
    },
    //stage-2
    {
        $sort: { count: -1 }
    },
    //stage-3
    {
        $limit: 2
    },
    // stage-4
    {
        $project: {
            count: 1
        }
    }
])