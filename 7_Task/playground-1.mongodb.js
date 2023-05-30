use("PK_WM")

// db.pk.insertMany([
//       {
//         subject_title: "Bazy Danych",
//         type: "główny",
//         fields_of_study: [
//           {
//             field_name: "Informatyka Stosowana",
//             department: "Wydział Mechaniczny",
//           },
//           {
//             field_name: "Inżynieria Biomedyczna",
//             department: "Wydział Mechaniczny",
//           },
//           {
//             field_name: "Geoinformatyka",
//             department: "Wydział Inżynierii Środowiska i Energetyki",
//           },
//         ],
//         schedule: [
//           {
//             hours: 15,
//             class_type: "Wykłady",
//             rooms: {
//               building: ["G", "J"],
//               class: ["G121", "G104", "J207"],
//             },
//           },
//           {
//             hours: 30,
//             class_type: "Laboratoria komputerowe",
//             rooms: {
//               building: ["G", "J"],
//               class: ["G117", "G118", "J209"],
//             },
//           },
//           {
//             hours: 15,
//             class_type: "Projekty",
//           },
//         ],
//         equipment: ["komputer", "rzutnik"],
//         software: [
//           {
//             app_name: "Serwer MS SQL",
//             version: 2019,
//           },
//           {
//             app_name: "MSSQL",
//             version: 18,
//           },
//           {
//             app_name: "Microsoft Visio",
//             version: 2021,
//           },
//         ],
//       },
//       {
//         subject_title: "Matematyka",
//         type: "główny",
//         duration: "2 semestry",
//         schedule: [
//           {
//             hours: 60,
//             class_type: "Wykłady",
//           },
//           {
//             hours: 75,
//             class_type: "Ćwiczenia",
//           },
//         ],
//         equipment: ["Tablica"],
//       },
//       {
//         subject_title: "Ekonomia",
//         type: "dodatkowe",
//         duration: "1 semestr",
//         schedule: [
//           {
//             hours: 15,
//             class_type: "Wykłady",
//             rooms: {
//               building: ["A"],
//               class: ["A05", "A15"],
//               in_renovation: ["A05", "A15"],
//             },
//           },
//           {
//             hours: 15,
//             class_type: "Projekty",
//             rooms: {
//               building: ["B", "C"],
//               class: ["B120", "C121"],
//               in_renovation: ["B120"],
//             },
//           },
//         ],
//         equipment: ["rzutnik"],
//       },
//       {
//         subject_title: "Programowanie Systemów Mobilnych",
//         type: "główny",
//         fields_of_study: [
//           {
//             field_name: "Geoinformatyka",
//             department: "Wydział Inżynierii Środowiska i Energetyki",
//           },
//         ],
//         schedule: [
//           {
//             hours: 15,
//             class_type: "Wykłady",
//             rooms: {
//               building: ["J"],
//               class: ["J207", "J209"],
//               accessibility: ["J207 - 2021/2022", "J209 - 2022/2023"],
//             },
//           },
//           {
//             hours: 30,
//             class_type: "Laboratoria komputerowe",
//             rooms: {
//               building: ["G", "J"],
//               class: ["G117", "G118", "J209"],
//               accessibility: [
//                 "G117 - 2021/2022",
//                 "G118 - 2021/2022",
//                 "J209 - 2022/2023",
//               ],
//             },
//           },
//           {
//             hours: 15,
//             type: "Projekty",
//           },
//         ],
//         equipment: ["rzutnik", "komputer"],
//         software: [
//           {
//             app_name: "Android Studio",
//           },
//           {
//             app_name: "Emulator Android - API 30",
//           },
//         ],
//       },
//     ]);

// db.employees.insertOne({
// personalInfo: {
//     firstName: "Elżbieta",
//     lastName: "Mamut",
//     age: 32,
// },
// titles: [
//     {
//     type: "academic title",
//     title: "dr inż.",
//     },
// ],
// type: "Dydaktyczny",
// workingAge: 7,
// subjects: [
//     {
//     name: "Metrologia",
//     types: ["Ćwiczenia", "Laboratoria Komputerowe"],
//     },
//     {
//     name: "Systemy pomiarowe",
//     types: ["Ćwiczenia"],
//     },
// ],
// areasOfResearch: ["Systemy pomiarowe"],
// buildings: [
//     {
//     department: "Mechaniczny",
//     faculty: "Katedra M11",
//     }],
// sex: "Female",
// birthDate: {"$date": "1991-05-03T00:00:00Z",
// yearOfService:7
// }
// });

// db.students.insertOne({
//       personalInfo: {
//         firstName: "Krystian",
//         secondName: "Jan",
//         lastName: "Dutka",
//         birthDate: {
//           $date: "2000-06-09T00:00:00Z",
//         },
//         address: {
//           street: "Centralna",
//           buildingNumer: 34,
//           flatNumber: 45,
//           postalCode: "31-586",
//           city: "Kraków",
//         },
//         contacEmail: "krystiandutka@gamil.com",
//       },
//       fieldOfStudies: [
//         {
//           name: "Informatyka stosowana",
//           studiesType: ["stacjonarne", "II stopnia"],
//           current: true,
//           finished: false,
//         },
//         {
//           name: "Informatyka stosowana",
//           studiesType: ["stacjonarne", "I stopnia"],
//           current: false,
//           finished: true,
//         },
//       ],
//       startedStuding: {
//         $date: "2019-10-01T00:00:00Z",
//       },
//       currentSemestr: 8,
//       studentStatus: {
//         status: "Aktywny",
//       },
//       subjects: [
//         {
//           name: "Bazy danych II",
//           semester: 1,
//           isFinished: false,
//           ects: 2,
//           mark: 5,
//         },
//         {
//           name: "Algorytmy decyzyjne",
//           semester: 1,
//           isFinished: false,
//           ects: 2,
//           mark: 5,
//         },
//         {
//           name: "Wieloplatformowe aplikacje mobilne",
//           semester: 1,
//           isFinished: false,
//           ects: 4,
//           mark: 5,
//         },
//         {
//           name: "Sieci komputerowe II",
//           semester: 1,
//           isFinished: false,
//           ects: 4,
//           mark: 3,
//         },
//       ],
//       studentEmail: "krystian.dutka@student.pk.edu.pl",
//     });
    

    
    // db.Subject.find(
    //       {
    //         type: { $eq: "główny" },
    //       },
    //       {
    //         subject_title: 1,
    //       }
//     );

// db.Subject.find(
//     { "schedule.rooms.in_renovation": { $eq: null } },
//     { "schedule.rooms.class": 1, _id: 0 }
//     );

// db.Subject.find({
// $or: [
//     { "equipment.komputer": { $ne: null } },
//     { "equipment.rzutnik": true }
// ]
// }, { subject_title: 1 })
      
// db.employees.find({
//     "titles": {
//         $elemMatch: {
//             "type": "academic title",
//             "title": { $in: ["mgr inż.", "dr inż."] }
//         }
//         }          
//     },
//     { "personalInfo.firstName": 1, "personalInfo.lastName": 1 }
//     )
      

// db.employees.find({ type: "Niedydaktyczny" });

// db.employees.find(
//       { hirshIndex: { $gt: 5 } },
//       { "personalInfo.firstName": 1, "personalInfo.lastName": 1 }
//     );
    
// db.students.find(
//         { "personalInfo.contacEmail": { $not: /@gmail.com$/ } },
//         {
//         "personalInfo.firstName": 1,
//         "personalInfo.lastName": 1,
//         }
//     );

// db.students.find(
//   {
//     subjects: {
//       $elemMatch: {
//         isFinished: false,
//       },
//     },
//   },
//   {
//     "personalInfo.firstName": 1,
//     "personalInfo.lastName": 1,
//   }
// );

// db.Subject.updateMany(
//       {
//         "schedule.rooms.class": { $regex: /^(G|J)/ },
//       },
//       {
//         $set: {
//           "schedule.$[].rooms.building": [],
//         },
//       });
  
// db.Subject.updateMany(
//   {
//     "schedule.rooms.class": { $regex: /^G/ },
//   },
//   {
//     $push: {
//       "schedule.$[].rooms.building": "G",
//     },
//   }
// );
// db.Subject.updateMany(
//   {
//     "schedule.rooms.class": { $regex: /^J/ },
//   },
//   {
//     $push: {
//       "schedule.$[].rooms.building": "J",
//     },
//   }
// );

// db.Subject.updateMany(
//   { equipment: "komputer" },
//   { $addToSet: { software: "Windows" } },
//   { multi: true }
// )

// db.employees.updateMany(
//   {},
//   {$rename: {sex: "płeć"}}
// )

// db.employees.updateMany(
//   {
//     płeć: "Male",
//   },
//   {
//     $set: { płeć: "Mężczyzna" },
//   }
// );
  
// db.employees.updateMany(
//   {
//     płeć: "Female",
//   },
//   {
//     $set: { płeć: "Kobieta" },
//   }
// );

// db.employees.updateMany(
//   {}, 
// {$set: {birthDate: new Date()},
//  $unset: {"personalInfo.age": ""}});

// db.employees.updateMany(
//     {},
//     {
//       $rename: { workingAge: "yearsOfService" },
//     }
//   );

// db.employees.updateMany({
//   $or: [
//   { type: "Dydaktyczny" },
//   { type: "Dydaktyczno-Naukowy" }]},
//   { $inc: { yearsOfService: 1 } }
// );

// db.students.updateMany(
//   {},
//   {
//     $set: { indexNumber: 132839 },
//   }
// );

// db.students.updateMany(
//     {},
//     {
//       $rename: { "personalInfo.contacEmail": "contactEmail" },
//     }
//   );

// db.students.updateOne(
//   {
//     "personalInfo.firstName": "Jan",
//   },
//   {
//     $set: {
//       "personalInfo.address.street": "Limanowska",
//       "personalInfo.address.buildingNumber": "21",
//       "personalInfo.address.flatNumber": "37",
//       "personalInfo.address.postalCode": "33-300",
//       "personalInfo.address.city": "Nowy Sącz",
//     },
//   }
// );

// db.students.updateOne(
//   {
//     "personalInfo.firstName": "Aleksandra",
//   },
//   {
//     $set: {
//       "personalInfo.address.street": "Czeska",
//       "personalInfo.address.buildingNumber": "12",
//       "personalInfo.address.flatNumber": "43",
//       "personalInfo.address.postalCode": "33-300",
//       "personalInfo.address.city": "Nowy Sącz",
//     },
//   }
// );

// db.students.updateMany(
//   {
//     $and: [{ "subjects.isFinished": true }, { "subjects.mark": 2 }],
//   },
//   {
//     $set: { "subjects.$[].isFinished": false },
//   }
// );

// db.employees.find({ yearsOfService: { $lte: 5 } })

// db.students.find(
//   {
//     "studentStatus.status": "Aktywny",
//   },
//   {
//     "personalInfo.firstName": 1,
//     "personalInfo.lastName": 1,
//     "indexNumber": 1,
//   }
// );
