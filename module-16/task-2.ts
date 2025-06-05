//1. Retrieve the count of individuals who are active (isActive: true) for each gender.
 db.getCollection("massive-data").aggregate([{$match:{isActive:true}},{$group:{_id:"$gender",count:{$sum:1}}}])

//2. Retrieve the names and email addresses of individuals who are active (`isActive: true`) and have a favorite fruit of "banana".
  db.getCollection("massive-data").aggregate([{$match:{isActive:true,favoriteFruit:"banana"}},{$project:{names:1,email:1}}])

//3.Find the average age of individuals for each favorite fruit, then sort the results in descending order of average age.

db.getCollection("massive-data").aggregate([{$group:{_id:"$favoriteFruit",avg:{$avg:"$age"}}},{$sort:{avg:-1}}])

