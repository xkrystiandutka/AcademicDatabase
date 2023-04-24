// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

// The current database to use.
use('University');

// Create a new document in the collection.
db.createCollection("people_schema", {
    validator: {
       $jsonSchema: {
          bsonType: "object",
          required: [ "name", "age", "gender", "degree", "major", "From_Ukraine", "scholarship", "startStudy", "thesis", "progression_of_studies" ],
          properties: {
             name: {
                bsonType: "string",
                description: "Imię i nazwisko jest wymagane i musi być ciągiem znaków"
             },
             age: {
                bsonType: "int",
                minimum: 1,
                maximum: 120,
                description: "Wiek jest wymagany i musi być liczbą całkowitą od 1 do 120"
             },
             gender: {
                enum: [ "Male", "Female", "Other" ],
                description: "Płeć jest wymagana i musi być jedną z wartości: 'Male', 'Female', 'Other'"
             },
             degree: {
                enum: [ "Bachelor's", "Master's", "Doctoral" ],
                description: "Stopień naukowy jest wymagany i musi być jednym z wartości: 'Bachelor's', 'Master's', 'Doctoral'"
             },
             major: {
                bsonType: "string",
                description: "Kierunek studiów jest wymagany i musi być ciągiem znaków"
             },
             From_Ukraine: {
                bsonType: "bool",
                description: "Informacja o tym, czy osoba pochodzi z Ukrainy, jest wymagana i musi być typu boolowskiego (true/false)"
             },
             scholarship: {
                bsonType: [ "null", "string" ],
                description: "Informacja o stypendium, jeśli jest dostępna, musi być ciągiem znaków lub null"
             },
             startStudy: {
                bsonType: "date",
                description: "Data rozpoczęcia studiów jest wymagana i musi być typu Date"
             },
             thesis: {
                bsonType: "object",
                required: [ "name", "rate" ],
                properties: {
                   name: {
                      bsonType: "string",
                      description: "Nazwa pracy dyplomowej jest wymagana i musi być ciągiem znaków"
                   },
                   rate: {
                      bsonType: "double",
                      minimum: 2.0,
                      maximum: 5.0,
                      description: "Ocena pracy dyplomowej jest wymagana i musi być liczbą zmiennoprzecinkową od 2.0 do 5.0"
                   }
                }
             },
             progression_of_studies: {
                bsonType: "object",
                required: [ "Graduate", "corrections" ],
                properties: {
                   Graduate: {
                      bsonType: "string",
                      description: "Czy osoba ukończyła studia, jest wymagane i musi być jednym z wartości: 'yes', 'no'"
                   },
                   corrections: {
                      bsonType: "object",
                      required: [ "corrections", "subject_name" ],
                      properties: {
                         corrections: {
                            bsonType: "bool",
                            description: "Czy osoba otrzymała poprawkę, jest wymagane i musi być typu boolowskiego (true/false)"
                         },
                         subject_name: {
                            bsonType: "object",
                            required: [ "name", "form_of_fail_exam", "semester", "rate", "Date" ],
                            properties: {
                              name: {
                                bsonType: "string",
                                description: "Nazwa przedmiotu, z którego otrzymano poprawkę, jest wymagana i musi być ciągiem znaków"
                              },
                              form_of_fail_exam: {
                                bsonType: "string",
                                description: "Forma egzaminu, z którego otrzymano poprawkę, jest wymagana i musi być ciągiem znaków"
                              },
                              semester: {
                                bsonType: "int",
                                minimum: 1,
                                maximum: 10,
                                description: "Numer semestru, w którym otrzymano poprawkę, jest wymagany i musi być liczbą całkowitą od 1 do 10"
                              },
                              rate: {
                                bsonType: "array",
                                items: {
                                  bsonType: "int",
                                  minimum: 2,
                                  maximum: 5
                                },
                                description: "Ocena z egzaminu, z którego otrzymano poprawkę, jest wymagana i musi być tablicą liczb całkowitych od 2 do 5"
                              },
                              Date: {
                                bsonType: "date",
                                description: "Data poprawki, jest wymagana i musi być typu Date"
                              }
                            }
                          }
                        }
                    }
                }
            }
        }
    }
}})
 
use('University');
db.people_schema.insertOne({
    "_id": ObjectId("61628d39d53a8f0b7f9812af"),
    "name": "Wilf Smith",
    "age": 25,
    "gender": "Male",
    "degree": "Bachelor's",
    "major": "Computer Science",
    "From_Ukraine": true,
    "scholarship": "none",
    "startStudy": ISODate("2020-09-01T00:00:00Z"),
    "thesis": {
      "name": "Analiza Obrazu",
      "rate": 4.5
    },
    "progression_of_studies": {
      "Graduate": "no",
      "corrections": {
        "corrections": true,
        "subject_name": {
          "name": "Linear Algebra",
          "form_of_fail_exam": "final exam",
          "semester": 3,
          "rate": [3, 4],
          "Date": ISODate("2023-03-01T00:00:00Z")
        }
      }
    }
  })
  
  db.people_schema.insertOne({
    "_id": ObjectId("61628d39d53a8f0b7f9812b0"),
    "name": "Kamila Nowak",
    "age": 28,
    "gender": "Female",
    "degree": "Doctoral",
    "major": "Biology",
    "From_Ukraine": false,
    "scholarship": null,
    "startStudy": ISODate("2017-09-01T00:00:00Z"),
    "thesis": {
      "name": "Biologia w IT",
      "rate": 4.9
    },
    "progression_of_studies": {
        "Graduate": "no",
        "corrections": {
          "corrections": true,
          "subject_name": {
            "name": "Algebra Liniowa",
            "form_of_fail_exam": "final exam",
            "semester": 3,
            "rate": [3, 4],
            "Date": ISODate("2023-03-01T00:00:00Z")
    }
    }}
  })

  db.people_schema.insertOne({
    "_id": ObjectId("61628d39d53a8f0b7f9812af"),
    "name": "Anna Kowalska",
    "age": 23,
    "gender": "Other",
    "degree": "Master's",
    "major": "History",
    "From_Ukraine": false,
    "scholarship": "full",
    "startStudy": ISODate("2019-09-01T00:00:00Z"),
    "thesis": {
      "name": "Sieci Komputerowe",
      "rate": 4.2
    },
    "progression_of_studies": {
        "Graduate": "no",
        "corrections": {
          "corrections": true,
          "subject_name": {
            "name": "Algebra Liniowa",
            "form_of_fail_exam": "final exam",
            "semester": 3,
            "rate": [3, 4],
            "Date": ISODate("2023-03-01T00:00:00Z")
    }
    }}
  })
  
  db.people_schema.insertOne({
    _id: 5,
    name: "Adam Nowak",
    age: 27,
    gender: "Male",
    degree: "Master's",
    major: "Computer Science",
    From_Ukraine: true,
    scholarship: null,
    startStudy: new Date("2019-10-01"),
    progression_of_studies: {
      Graduate: "no",
      corrections: {
        corrections: true,
        subject_name: {
          name: "Algorithms",
          form_of_fail_exam: "written exam",
          semester: 3,
          rate: [4, 5, 3],
          Date: new Date("2022-01-20")
        }
      }
    }
  })
  


  use('University');
  db.people_schema.insertOne({
      "_id": ObjectId("6415f425daa7cd788e8b1d60"),
      "name": "Kamila Nowak",
      "age": 28,
      "gender": "Female",
      "degree": "Doctoral",
      "major": "Biology",
      "From_Ukraine": false,
      "scholarship": null,
      "startStudy": ISODate("2017-09-01T00:00:00Z"),
      "thesis": {
          "name": "Biologia w IT",
          "rate": 4.5
      },
      "progression_of_studies": {
        "Graduate": "no",
        "corrections": {
          "corrections": true,
          "subject_name": {
            "name": "Algebra Liniowa",
            "form_of_fail_exam": "final exam",
            "semester": 3,
            "rate": [3, 4],
            "Date": ISODate("2023-03-01T00:00:00Z")
    }
    }}
  })
  
  db.people_schema.insertOne({
      "_id": ObjectId("6415f425daa7cd788e8b1d5d"),
      "name": "Anna Kowalska",
      "age": 23,
      "gender": "Other",
      "degree": "Master's",
      "major": "History",
      "From_Ukraine": false,
      "scholarship": "full",
      "startStudy": ISODate("2019-09-01T00:00:00Z"),
      "thesis": {
        "name": "Sieci Komputerowe",
        "rate": 4.5
      },
      "progression_of_studies": {
        "Graduate": "no",
        "corrections": {
          "corrections": true,
          "subject_name": {
            "name": "Algebra Liniowa",
            "form_of_fail_exam": "final exam",
            "semester": 3,
            "rate": [3, 4],
            "Date": ISODate("2023-03-01T00:00:00Z")
    }
    }}
  })
  
// The current database to use.
use('University');

  db.people_schema.insertOne(
    {
      "_id": ObjectId("6415f425daa7cd788e8b1d61"),
      "name": "Karolina Kowalczyk",
      "age": 22,
      "gender": "Female",
      "degree": "Doctoral",
      "major": "Biology",
      "From_Ukraine": false,
      "scholarship": null,
      "startStudy": ISODate("2017-09-01T00:00:00Z"),
      "thesis": {
          "name": "Badania w IT",
          "rate": 4.5
      },
      "progression_of_studies": {
        "Graduate": "no",
        "corrections": {
          "corrections": true,
          "subject_name": {
            "name": "Algebra Liniowa",
            "form_of_fail_exam": "final exam",
            "semester": 3,
            "rate": [3, 4],
            "Date": ISODate("2023-03-01T00:00:00Z")
        }
      }
    }
  },
    { writeConcern: { w: 1, j: true, wtimeout: 200 } }
  );
  
  
  