//1. Retrieve the count of individuals who are active (isActive: true) for each gender.
 db.getCollection("massive-data").aggregate([{$match:{isActive:true}},{$group:{_id:"$gender",count:{$sum:1}}}])

//2. Retrieve the names and email addresses of individuals who are active (`isActive: true`) and have a favorite fruit of "banana".
  db.getCollection("massive-data").aggregate([{$match:{isActive:true,favoriteFruit:"banana"}},{$project:{names:1,email:1}}])

//3.Find the average age of individuals for each favorite fruit, then sort the results in descending order of average age.

db.getCollection("massive-data").aggregate([{$group:{_id:"$favoriteFruit",avg:{$avg:"$age"}}},{$sort:{avg:-1}}])

// 4. Retrieve a list of unique friend names for individuals who have at least
// one friend, and include only the friends with names starting with the
// letter "W".

// Hints: Explore how to use regex [ "friends.name": /^W/]

db.getCollection("massive-data").aggregate([
    // stage-1
    {
        $unwind: "$friends"
    },
    // satage-2
    {
        $match:{
            friends: { $exists: true, $not: { $size: 0 } },
            "friends.name":/^W/
        }
    },
    //stage-3
    { $group: { _id: null, friendsList: { $addToSet: "$friends.name" } } }
])



//5. Use $facet to separate individuals into two facets based on their age:
// those below 30 and those above 30. Then, within each facet, bucket the
// individuals into age ranges (e.g., 20-25, 26-30, etc.) and sort them by
// age within each bucket.

db.getCollection("massive-data").aggregate([
    {
        $facet: {
            "below-30": [
                { $match: { age: { $lt: 30 } } },
                {
                    $bucket: {
                        groupBy: "$age",
                        boundaries: [20, 25, 30],
                        default:"Other",
                        output: {
                            names:{$push:"$name"}
                        }
                    }
                },
                {
                    $sort: { age: 1 }
                }
            ],
            "above-30": [
                { $match: { age: { $gt: 30 } } },
                {
                    $bucket: {
                        groupBy: "$age",
                        boundaries: [30, 35,40],
                        default:"Other",
                        output: {
                            names:{$push:"$name"}
                        }
                    }
                },
                {
                    $sort:{age:1}
                }
            ]
        }
    }
])
