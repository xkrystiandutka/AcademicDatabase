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


mongoexport --db University --collection Lesson --out classes.json;

mongoexport --db University --collection people --out classes.json;

db.Lesson.updateOne({name: "Fizyka"},{ $set:{name: "Fizyka zawansowana"}})

db.Lesson.replaceOne({name: "Grafika komputerowa", }, {name: "WF", professor:"inz. Arurt Kasparov", "schedule": { "day": "Sroda", "time": "10:15-12:00"}})

db.Lesson.updateOne({classroom:"Sala 203"}, {$unset:{classroom:"Sala 203"}})

db.Lesson.deleteOne({name: "Bazy danych"})

mongoexport --db University --collection Lesson --out lessonUpdate.json;

db.people.updateOne({name: "Adam Nowak"},{ $set:{name: "Jakub Filipek"}})

db.people.replaceOne({name: "Dominika Lewajski" }, {name: "Dominika Lewajska", gender: "Female"})

db.people.updateMany({age:19}, {$unset:{degree:""}})

db.people.deleteOne({name: "Piotr Krawczyk "})

mongoexport --db University --collection people --out peopleUpdate.json;