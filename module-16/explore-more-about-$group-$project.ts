db.test.aggregate([
    // stage-1
    {
        $group: {
            _id: null,
            totalSalary: { $sum: "$salary" },
            maxSalary: { $max: "$salary" },
            minSalary: { $min: "$salary" },
            avgSalary: { $avg: "$salary" }
        }

    },
    // stage-2
    {
        $project: {
            totalSalary: 1,
            maxSalary: 1,
            minSalary: 1,
            avarageSalary: "$avgSalary",
            rangeBetweenMaxandMin: { $subtract: ["$maxSalary", "$minSalary"] }
        }
    }
])

