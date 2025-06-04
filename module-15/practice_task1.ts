// 1. Find all documents in the collection where the age is greater than 30, and
// only return the name and email fields.
db.practice_task1.find({age:{$gte:30}},{name:1,email:1})

// 2. Find documents where the favorite color is either "Maroon" or "Blue."
practice_task1> db.practice_task1.find({favoutiteColor:{$in:["Maroon","Blue"]}})

//3. Find all documents where the skill is an empty array.
db.practice_task1.find({skills:{$size:0}})

//4. Find documents where the person has skills in both "JavaScript" and "Java."
db.practice_task1.find({$and:[{"skills.name":"JAVASCRIPT"},{"skills.name":"JAVA"}]})

// 5. Add a new skill to the skills array for the document with the email
// "amccurry3@cnet.com". The skill is
// {"name": "Python","level": "Beginner" ,"isLearning": true}
// Note: At first, you will have to insert the given email then add the skill
// mentioned above
db.practice_task1.updateOne({email:"amccurry3@cnet.com"},{$addToSet:{skills:{"name": "Python","level":"Biginner","isLearning":true}}})

// 6. Add a new language "Spanish" to the list of languages spoken by the person.
db.practice_task1.updateOne({email:"amccurry3@cnet.com"},{$addToSet:{languages:"Spanish"}})

//7. Remove the skill with the name "Kotlin" from the skills array.

db.practice_task1.updateOne({email:"amccurry3@cnet.com"},{$pull:{skills:{name:"KOTLIN"}}})
