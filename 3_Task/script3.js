db.Lesson.drop()

// cmd mongoimport --collection=lesson --db=University --file lessonUpdate.json;

db.createCollection("classrooms")

db.classrooms.insertMany([
  { 
    "_id": "001", 
    "name": "A1", 
    "capacity": 30,
    "location": {
      "building": "Main",
      "floor": 1
    },
    "equipment": ["projector", "whiteboard"]
  },
  { 
    "_id": "002", 
    "name": "B2", 
    "class": "Computer Science",
    "teacher": "John Smith",
    "size": "Small"
  },
  { 
    "_id": "003", 
    "name": "C3", 
    "capacity": 40,
    "location": {
      "building": "Annex",
      "floor": 1
    },
    "equipment": ["projector", "whiteboard", "sound system"],
    "amenities": ["coffee machine", "water cooler"]
  },
  { 
    "_id": "004", 
    "name": "D4", 
    "class": "Mathematics",
    "teacher": "Jane Doe",
    "size": "Medium",
    "location": {
      "building": "Annex",
      "floor": 2
    }
  }
])

db.classrooms.find({}, {_id: 0, name: 1, capacity: 1})

// cmd mongoexport --db University --collection classrooms --out classrooms_no_schema.json;

db.createCollection("classrooms2", {
    validator: {
       $jsonSchema: {
          bsonType: "object",
          required: [ "name", "capacity", "location", "features" ],
          properties: {
             name: {
                bsonType: "string",
                description: "nazwa klasy jest wymagana i musi być ciągiem znaków"
             },
             capacity: {
                bsonType: "int",
                minimum: 1,
                maximum: 100,
                description: "pojemność klasy jest wymagana i musi być liczbą całkowitą od 1 do 100"
             },
             location: {
                bsonType: "object",
                required: [ "building", "floor" ],
                properties: {
                   building: {
                      bsonType: "string",
                      description: "nazwa budynku jest wymagana i musi być ciągiem znaków"
                   },
                   floor: {
                      bsonType: "int",
                      minimum: 1,
                      maximum: 10,
                      description: "numer piętra jest wymagany i musi być liczbą całkowitą od 1 do 10"
                   }
                }
             },
             features: {
                bsonType: "array",
                description: "lista funkcji musi być tablicą ciągów znaków",
                items: {
                   bsonType: "string"
                }
             }
          }
       }
    }
 })

 
 db.classrooms2.insertMany([   
   {
      "name": "A1", 
      "capacity": 30,
      "location": {
        "building": "Main",
        "floor": 1
    },
    "features": ["projector", "whiteboard"]
   },
   { 
      "name": "B2", 
      "capacity": "20",
      "location": {
         "building": "Main",
         "floor": "2"
      },
      "features": "computer, whiteboard"
   }
])

db.classrooms2.insertOne(
    {
        "name": "B2", 
        "capacity": 20,
        "location": {
           "building": "Main",
           "floor": 2
        },
        "features": ["computer", "whiteboard"]
     })

// cmd mongoexport --db University --collection classrooms2 --out classrooms_schema.json;