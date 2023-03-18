// db.dropDatabase()

// mongoimport --collection=lesson --db=University --file lesson.json;
// mongoimport --collection=people --db=University --file people.json;

use University

db.createCollection("Lesson")

db.Lesson.insertMany([  {    "name": "Programowanie w C#",    "professor": "dr inż. Jan Kowalski",    
    "schedule": {
    "day": "Poniedziałek",
    "time": "10:15-12:00"
    }
  },
  {
    "name": "Analiza matematyczna",
    "professor": "prof. dr hab. Maria Nowak",
    "schedule": {
      "day": "Środa",
      "time": "13:15-15:00"
    },
    "classroom": "Sala 203"
  },
  {
    "name": "Grafika komputerowa",
    "professor": "mgr inż. Anna Kowalczyk",
    "students": ["Katarzyna Nowakowska", "Piotr Wójcik"],
    "schedule": {
      "day": "Wtorek",
      "time": "9:15-11:00"
    },
    "classroom": "Sala 105",
    "year": 2
  },
  {
    "name": "Fizyka",
    "professor": "dr hab. Janusz Szymański",
    "students": ["Adam Nowak", "Kamil Wójcik"],
    "schedule": {
      "day": "Czwartek",
      "time": "11:15-13:00"
    },
    "classroom": "Sala 307",
    "year": 1
  },
  {
    "name": "Wieloplatformowe aplikacje mobilne",    "professor": "dr inż. Jan Kowalski",    
    "schedule": {
    "day": "Sroda",
    "time": "10:15-12:00"
    }
  },
  {  
    "name": "Big Data",    "professor": "inż. Krystian Dutka",
    "schedule": {
    "day": "Piatek",
    "time": "10:15-12:00"
    }
  },
  {
    "name": "Programowanie obiektowe",    "professor": "dr inż. Andzej Nowak",    
    "schedule": {
    "day": "Sroda",
    "time": "10:15-12:00"
    }
  },
  {  
    "name": "Uczenie maszynowe",    "professor": "inż. Krystian Dutka",
    "schedule": {
    "day": "Wtorek",
    "time": "18:15-20:00"
    }
  },
  {
    "name": "Sieci komputerowe II",    "professor": "inż. Artur Kasparov",    
    "schedule": {
    "day": "Sroda",
    "time": "14:15-16:00"
    }
  },
  {  
    "name": "Bazy danych",    "professor": "inż. Kamil Czesak",
    "schedule": {
    "day": "Wtorek",
    "time": "12:15-14:00"
    }
  },
])

db.createCollection("people")

db.people.insertMany([  {    "name": "Adam Nowak",    "age": 22,    "gender": "Male",    "degree": "Bachelor's",    "major": "Computer Science"  },
  {    "name": "Anna Kowalska",    "age": 22,    "gender": "Female",    "degree": "Bachelor's",    "major": "Computer Science"  },
  {    "name": "Kamil Betkowski",    "age": 35,    "gender": "Male",    "degree": "Master's",    "major": "Computer Science"  },
  {    "name": "Andzej Gołota",    "age": 21,    "gender": "Male",    "degree": "Bachelor's",    "major": "Computer Science"  },
  {    "name": "Adam Małysz",    "age": 19,    "gender": "Male",    "degree": "Master's",    "major": "Mathematics"  },
  {    "name": "Piotr Krawczyk",    "age": 22,    "gender": "Male",    "degree": "Bachelor's",    "major": "Computer Science"  },
  {    "name": "Dominik Lewajski",    "age": 23,    "gender": "Male",    "degree": "Master's",    "major": "Computer Science" },
  {    "name": "Gabriela Kasparov",    "age": 28,    "gender": "Female",    "degree": "Bachelor's",    "major": "Computer Science"  },
  {    "name": "Oskar Laid",    "age": 22,    "gender": "Male",    "degree": "Master's",    "major": "Mathematics"  },
  {    "name": "Maria Nowak",    "age": 45,    "gender": "Female",    "position": "Professor",    "department": "Mathematics"  }])

db.people.insertMany([
  {
    "name": "Jakub Kowalski",
    "age": 31,
    "gender": "Male",
    "degree": "Master's",
    "major": "Computer Science",
    "From_Ukraine": false,
    "scholarship": null,
    "startStudy": new Date("2015-05-24T12:09:27Z"),
    "thesis": {
      "name": "OOP in Python",
      "rate": 5.0
    },
    "progression_of_studies": {
      "Graduate": "yes",
      "corrections": {
        "corrections": true,
        "subject_name": {
          "name": "Projektowanie belki w Autocadzie",
          "form_of_fail_exam": "poprawka ustna",
          "semester": 2,
          "rate": [2, 2, 2, 5],
          "Date": new Date("2020-10-10T13:45:15.123Z")
        }
      }
    }
  },
  {
    "name": "Artur Bąk",
    "age": 25,
    "gender": "Male",
    "degree": "Master's",
    "major": "Computer Science",
    "From_Ukraine": true,
    "scholarship": null,
    "startStudy": new Date("2008-05-09T19:28:52Z"),
    "thesis": {
      "name": "How to be senior in C++",
      "rate": 3.0
    },
    "progression_of_studies": {
      "Graduate": false,
      "corrections": {
        "corrections": true,
        "subject_name": {
          "name": "Programowanie Obiektowe w C++",
          "form_of_fail_exam": "poprawka pisemna",
          "semester": 2,
          "rate": [2, 2, 3],
          "Date": new Date("2020-10-10T13:45:15.123Z")
        }
      }
    }
  },
  {
    "name": "Dominik Filipek",
    "age": 41,
    "gender": "Male",
    "degree": "Master's",
    "major": "Computer Science",
    "From_Ukraine": false,
    "scholarship": null,
    "startStudy": new Date("2037-03-05T12:45:12Z"),
    "thesis": {
      "name": "Jak zdać studia nic nie umiejac?",
      "rate": 3.0
    },
    "progression_of_studies": {
      "Graduate": "no",
      "corrections": {
        "corrections": true,
        "subject_name": {
          "name": "Projektowanie belki w Autocadzie",
          "form_of_fail_exam": "poprawka ustna",
          "semester": 2,
          "rate": [2, 3],
          "Date": new Date("2020-10-10T13:45:15.123Z")
        }
      }
    }
  },
  {
    "name": "Dominik Czesław",
    "age": 24,
    "gender": "Male",
    "degree": "Master's",
    "major": "Computer Science",
    "From_Ukraine": false,
    "scholarship": null,
    "startStudy": Timestamp(1432456567, 4),
    "thesis": {
            "name": "Testowanie aplikacji mobilnych",
            "rate": 5.0
        },
        "progression_of_studies": {
            "Graduate": "yes",
            "corrections": {
                "corrections": true,
                "subject_name": {
                    "name": "Projektowanie belki w Autocadzie",
                    "form_of_fail_exam": "poprawka ustna",
                    "semester": 2,
                    "rate": [3],
                    "Date": ISODate("2020-10-10T13:45:15.123Z")
                }
            }
        }
    },
    {
        "name": "Kamil Nowak",
        "age": 28,
        "gender": "Male",
        "degree": "Master's",
        "major": "Computer Science",
        "From_Ukraine": true,
        "scholarship": null,
        "startStudy": Timestamp(1432456567, 5),
        "thesis": {
        	"name": "Programowanie w CAD",
        	"rate": 5.0
        },
        "progression_of_studies": {
            "Graduate": "yes",
            "corrections": {
                "corrections": true,
                "subject_name": {
                    "name": "Sieci komputerowe",
                    "form_of_fail_exam": "poprawka ustna",
                    "semester": 4,
                    "rate": [2, 5],
                    "Date": ISODate("2020-10-10T13:45:15.123Z")
                }
            }
        }
    }
]);



db.people.find({ "From_Ukraine": true })

db.people.find({ "startStudy": { $gt: new Date("2022-10-01") } })

db.people.find({age: {$gt: 30}}).sort({age: -1})

db.people.find({
  $or: [
    { scholarship: { $exists: false } },
    { scholarship: { $eq: null } }
  ]
})

db.people.updateMany({}, {$set: {city: "Kraków"}})

// CMD CODE mongoexport --db University --collection people --out peopleUpdate2.json;