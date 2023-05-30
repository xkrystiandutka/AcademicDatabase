use('University')

// db.people.updateOne(
//     { name: "Adam Nowak" },
//     { $set: { age: 22 } },
//     { upsert: true }
//  )
 
//  db.people.updateOne(
//     { name: "Karolina Nowak" },
//     { $set: { age: 27, major: "Biology" } },
//     { upsert: true }
//  )
 

//  db.people.updateOne(
//     { name: "Adam Małysz" },
//     { $inc: { age: 5 } }
//  )
 

// db.people.updateMany(
//   { From_Ukraine: true},
//   { $inc: { "thesis.rate": 0.5 } }
// );

// db.classroom2.updateOne(
//     { _id: "001", capacity: { $gt: 25 } },
//     { $min: { capacity: 25 } }
//   )
  
// db.classroom2.updateOne(
//     { _id: "004", "location.floor": { $gt: 1 } },
//     { $min: { "location.floor": 1 } }
//   )
  

// db.people.updateMany(
//     { major: "Mathematics", age: { $gt: 24 } },
//     { $max: { age: 25 } }
// )

// db.people.updateOne(
//     { name: "Dominik Filipek" },
//     { $max: { max_rate: "$rate" } }
//   )
  

// db.people.updateOne(
//     { name: "Adam Nowak" },
//     { $mul: { age: 1.5 } }
//   )

//   db.people.updateOne(
//     { "major": "Biology"},
//     { $mul: { age: 0.5 } }
//   )

// db.people.updateMany({}, {$rename: {"From_Ukraine": "isFromUkraine"}})

// db.people.updateMany({}, {$rename: {"progression_of_studies": "studyProgression"}})

// db.classroom2.updateOne(
//     {_id: "002"},
//     {$set: {size: "Large"}}
//   )

   
// db.classroom2.updateMany(
//     {'location.building': "Annex"},
//     {$set: {"location.floor": 2}}
//   )
  

// db.people.updateOne({name: "Oskar Laid"}, {$unset: {age: ""}})


// db.people.updateMany({age:35 },{$unset: {gender: ""}})

 
// db.people.updateOne(
//     { "classroom2.name": "C3", "classroom2.equipment": "oldvalue" },
//     { $set: { "classroom2.$.equipment": "newvalue" } }
//  )
 
// db.classroom2.updateOne(
//     { 
//       name: "C3", 
//       equipment: { $elemMatch: { $eq: "coffee machine" } } 
//     },
//     { 
//       $set: { "equipment.$": "test machine" } 
//     }
//   )

// db.classroom2.updateOne(
//   { 
//     name: "C3", 
//     amenities: { $elemMatch: { $eq: "coffee machine" } } 
//   },
//   { 
//     $set: { "amenities.$": "new machine" } 
//   }
// ) 

// db.people.updateOne(
//   { name: "Dominik Filipek" },
//   { $set: { "studyProgression.corrections.subject_name.rate.$[]": 4 } }
// )

// db.people.updateOne(
//   { age: 31 },
//   { $set: { "studyProgression.corrections.subject_name.rate.$[]": 4 } }
// )

// db.classroom2.updateOne(
//   { 
//     name: "C3", 
//     amenities: { $elemMatch: { $eq: "water cooler" } } 
//   },
//   { 
//     $set: { "amenities.$[elem]": "new machine2" } 
//   },
//   {
//     arrayFilters: [{ "elem": { $eq: "water cooler" } }]
//   }
// )


// db.classroom2.updateOne(
//   {
//     name: "C3"},
//   { 
//     $addToSet: { amenities: "coffee machine" } 
//   }
// )

// db.classroom2.updateOne({
//   capacity: 25},{
//     $addToSet: {equipment: "machine with applications for resignation from studies machine for students"}
//   })


// db.classroom2.updateOne({
//   _id: "001",},{
//     $pop: {equipment: 1}
//   })

// db.classroom2.updateOne({
//   capacity: 40,},{
//     $pop: {equipment: 1}
//   })


// db.classroom2.updateOne({
//   "_id": "003"
// }, {
//   $pull: { amenities: "new machine" }
// })

// db.classroom2.updateOne({
//   "name": "C3"
// }, {
//   $pull: { amenities: "new machine2" }
// })


// db.classroom2.updateOne({
//   "name": "C3"
// }, {
//   $pull: { amenities: "new machine2" }
// }) 

// db.people.updateOne(
//   { age: 31 },
//   { $push: { "studyProgression.corrections.subject_name.rate": 4 } }
// )

// db.classroom2.updateOne({
//   "name": "C3"
// }, {
//   $push: { amenities: "new machine3 test test" }
// }) 

// db.classroom2.updateOne({
//   "name": "C3"
// }, {
//   $pullAll: { amenities: ["new machine3 test test"] }
// }) 

// db.people.updateOne(
//   { "name": "Artur Bąk" },
//   { $pullAll: { "studyProgression.corrections.subject_name.rate": [2] } }
// )

// db.classroom2.updateOne(
//   { _id: "003" },
//   { $push: { equipment: { $each: ["projector", "markers"] } } }
// )

// db.people.updateOne(
//   { "name": "Kamil Nowak" },
//   {
//     $push: {
//       "studyProgression.corrections.subject_name.rate": {
//         $each: [4, 3, 5, 4]
//       }
//     }
//   }
// )

// db.classroom2.updateOne(
//   { _id: "003" },
//   { 
//     $push: { 
//       equipment: { 
//         $each: ["projector", "laptop"], 
//         $position: 1 
//       } 
//     } 
//   }
// )

// db.people.updateOne(
//   { age: 25 },
//   { $push: { "studyProgression.corrections.subject_name.rate": { $each: [ 2, 4 ], $position: 1 } } }
// )


// db.people.updateOne(
//   { age: 25 },
//   { $push: { "thesis.comments": { $each: [ "Interesting", "Well-written", "Insightful" ], $slice: -5 } } }
// )

// db.classroom2.updateOne(
//   { _id: "001" },
//   { $push: { equipment: { $each: ["laptop", "microphone"], $slice: -3 } } }
// )

// db.classroom2.updateOne(
//   { "_id": "001" },
//   { 
//     "$push": { 
//       "equipment": { 
//         "$each": ["laptop", "microphone", "chair"], 
//         "$sort": { "name": 1 } 
//       }
//     }
//   }
// )


db.people.updateOne(
  { name: "Kamil Nowak"},
  {
    $push: {
      "studyProgression.corrections.subject_name.rate": {
        $each: [4],
        $sort: 1
      }
    }
  }
)

