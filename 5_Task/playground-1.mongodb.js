use('University');

db.classroom.find({
    "_id": {
      "$eq": ObjectId("64171584be388fd8c0549155")
    },
    "$and": [
      {
        "location.building": "Main"
      },
      {
        "capacity": {
          "$gte": 30
        }
      }
    ]
  })
  

db.people.find({
    "$and": [
      {
        "name": "Adam Małysz"
      },
      {
        "major": "Mathematics"
      }
    ]
  })

  db.people.find({
    "$or": [
      { "major": "Mathematics" },
      { "major": "Computer Science" }
    ]
  })

db.classroom2.find({
    "$or": [
      { "capacity": 30 },
      { "class": "Mathematics" }
    ]
  })
  
db.classroom2.find({
    "capacity": {
      "$not": {
        "$eq": 30
      }
    }
  })
  

db.people.find({ "major": { $not: { $eq: "Computer Science" } } })
 
db.people.find({
    "$nor": [
      {"major": "Computer Science"},
      {"gender": "Male"}
    ]
  })
  
  db.classroom.find({
    $nor: [
      { _id: "002" },
      { _id: "004" }
    ]
  })
  
  db.classroom2.find({
    $and: [
      {"teacher": {$exists: true}},
      {"location.building": {$exists: true}}
    ]
  })
  
db.people.find({
    $and:[{ "scholarship": { $exists: true } },
{"From_Ukraine": { $exists: true } }]})

db.people.find({$and:[{"gender": "Female"},
 { "age": { $type: "int" } }]})

db.classroom2.find({ "size": { $type: "string" } })

db.people.find({
    $and: [
      { $expr: { $gt: ["$age", 30] } },
      { $expr: { $in: ["$degree", ["Master's"]] } },
      { $expr: { $in: ["$major", ["Mathematics", "Computer Science"]] } }
    ]
  })
  
db.people.find({
    $and: [
      { $expr: { $eq: ["$gender", "Male"] } },
      { $expr: { $eq: ["$degree", "Master's"] } },
      { $expr: { $eq: ["$scholarship", null] } }
    ]
  })
  
db.people.find({
    name: { $regex: /^O/ }
  })
  
db.classroom2.find({
    name: {
      $regex: /^C/i
    },
    capacity: {
      $gt: 30
    }
  })
  
db.classroom2.find({
    "equipment": {
        "$all": ["projector", "whiteboard"]
    }
})

db.people.find({
  "age": {
    "$in": [19, 21]
  }
})


db.people.find({
    "degree": "Master's",
    "major": "Computer Science",
    "progression_of_studies.corrections.subject_name.rate": {
      "$elemMatch": {
        "$gte": 2,
        "$lte": 3
      }
    }
  })

db.people.find({
    "degree": "Master's",
    "major": "Computer Science",
    "age": { "$gte": 20, "$lte": 23 }
})
  
db.people.find({
    "progression_of_studies.corrections.subject_name.rate": {
      "$size": 2
    }
  })
  
db.classroom2.find({
    "equipment": {
      "$size": 3
    }
})

db.people.find().sort({age: 1})

db.people.find().sort({name: -1})

db.people.find().sort({"name": 1}).skip(13)

db.people.find().limit(3)

db.people.find().sort({"age": -1}).skip(2).limit(4)