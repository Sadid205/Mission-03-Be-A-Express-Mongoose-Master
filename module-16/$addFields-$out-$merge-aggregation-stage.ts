db.test.aggregate([
    //stage-1
    { $match: { gender: "Male" } },
    // stage-2
    { $addFields: { course: "level-2", eduTech: "Programming Hero", monerMoto: "Moner Iccha" } },
    // stage-3
    // { $project: { course: 1, eduTech: 1 } },
    // stage-4
    // { $out: "course-students" }
    { $merge: "test" }
])