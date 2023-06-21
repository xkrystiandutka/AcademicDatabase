use("geoDB");

// db.places.insertMany([
//   {
//     "name": "Niger",
//     "type": "Feature",
//     "properties": {},
//     "geometry": {
//       "coordinates": [
//         9.46300206597192,
//         17.41890646416114
//       ],
//       "type": "Point"
//     }
//   },
//   {
//     "name": "Frankfurt",
//     "type": "Feature",
//     "properties": {},
//     "geometry": {
//       "coordinates": [
//         8.666200362865965,
//         50.11050768017907
//       ],
//       "type": "Point"
//     }
//   },
//   {
//     "name": "Makowice",
//     "type": "Feature",
//     "properties": {},
//     "geometry": {
//       "coordinates": [
//         20.402031474727664,
//         49.762884451001696
//       ],
//       "type": "Point"
//     }
//   }
// ]);


//kraków, nowy sącz, stary sącz
// db.paths.insertOne({
//   "type": "Feature",
//   "geometry": {
//     "type": "LineString",
//     "coordinates": [
//       [ 19.923010107111253,
//         50.07867060125554],
//       [20.682225192346237,
//         49.623055515303236],
//       [20.623677572688052,
//         49.56117294547366]
//     ]
//   },
//   "properties": {}
// });

// db.areas.insertMany([
//   {
//     "type": "Feature",
//     "geometry": {
//       "type": "Polygon",
//       "coordinates": [
//         [
//           [16.930, 52.383],
//           [20.499, 53.786],
//           [20.969, 52.215],
//           [19.424, 51.797],
//         ]
//       ]
//     },
//     "properties": {}
//   },
//   {
//     "type": "Feature",
//     "geometry": {
//       "type": "Polygon",
//       "coordinates": [
//         [
//           [10.123, 20.345],
//           [30.567, 40.789],
//           [50.912, 60.234],
//           [70.345, 80.789],
//           [90.123, 100.345],
//           [110.567, 120.789],
//           [130.912, 140.234],
//           [10.123, 20.345]
//         ]
//       ]
//     },
//     "properties": {}
//   },
//   {
//     "type": "Feature",
//     "geometry": {
//       "type": "Polygon",
//       "coordinates": [
//         [
//           [16.860, 50.800],
//           [18.399, 50.464],
//           [19.953, 50.936],
//           [19.983, 51.949],
//           [17.438, 51.962]
//         ],
//         [
//           [17.908, 51.570],
//           [18.532, 51.188],
//           [18.849, 51.628]
//         ]
//       ]
//     },
//     "properties": {}
//   }
// ]);

// db.multiObjects.insertOne({
//   "type": "Feature",
//   "geometry": {
//     "type": "MultiPoint",
//     "coordinates": [
//       [10.123, 20.345],
//       [30.567, 40.789]
//     ]
//   },
//   "properties": {}
// });



// db.multiObjects.insertOne({
//   "type": "Feature",
//   "geometry": {
//     "type": "MultiLineString",
//     "coordinates": [
//       [
//         [10.123, 20.345],
//         [30.567, 40.789]
//       ],
//       [
//         [4.338, 50.920],
//         [19.345, 52.789]
//       ]
//     ]
//   },
//   "properties": {}
// });


// db.multiObjects.insertOne({
//   "type": "Feature",
//   "geometry": {
//     "type": "MultiPolygon",
//     "coordinates": [
//       [
//         [
//           [10.123, 20.345],
//           [30.567, 40.789],
//           [50.912, 60.234],
//           [10.123, 20.345]
//         ]
//       ],
//       [
//         [
//           [15.678, 25.345],
//           [35.567, 45.789],
//           [55.912, 65.234],
//           [15.678, 25.345]
//         ]
//       ]
//     ]
//   },
//   "properties": {}
// });

// db.multiObjects.insertOne(
// {
//   "type": "Feature",
//   "geometry": {
//     "type": "MultiPolygon",
//     "coordinates": [
//       [
//         [
//           [18.571, 54.347],
//           [18.572, 54.346],
//           [18.573, 54.347],
//           [18.572, 54.348],
//           [18.571, 54.347]
//         ]
//       ],
//       [
//         [
//           [18.574, 54.348],
//           [18.575, 54.347],
//           [18.576, 54.348],
//           [18.575, 54.349],
//           [18.574, 54.348]
//         ]
//       ]
//     ]
//   },
//   "properties": {}
// }
// ) 

// db.multiObjects.insertOne({
//   "type": "Feature",
//   "geometry": {
//     "type": "GeometryCollection",
//     "geometries": [
//       {
//         "type": "Point",
//         "coordinates": [10.123, 20.345]
//       },
//       {
//         "type": "LineString",
//         "coordinates": [
//           [8.567, 30.789],
//           [28.912, 30.234]]
//       }
//     ]
//   },
//   "properties": {}
// });

//db.places.createIndex({ "geometry.coordinates": "2dsphere" })
//db.multiObjects.createIndex({ coordinates: "2dsphere" })
//db.areas.createIndex({ coordinates: "2dsphere" })
//db.paths.createIndex({ "coordinates": "2dsphere" })
//db.places.createIndex({ "geometry.coordinates": "2dsphere" })

// db.places.find({
//   geometry: {
//     $geoIntersects: {
//       $geometry: {
//         type: "Point",
//         coordinates: [8.666200362865965, 50.11050768017907]
//       }
//     }
//   }
// })

// db.places.find({
//   geometry: {
//     $geoIntersects: {
//       $geometry: {
//         type: "Point",
//         coordinates: [
//           9.46300206597192,
//           17.41890646416114
//         ]
//       }
//     }
//   }
// })

// db.places.createIndex({ "geometry": "2dsphere" })
// db.places.getIndexes()

// db.places.find({
//   "geometry": {
//     $near: {
//       $geometry: {
//         type: "Point",
//         coordinates: [10.0, 20.0]
//       },
//       $maxDistance: 3400000 // Maksymalna odległość w metrach
//     }
//   }
// })

// db.places.find({
//   geometry: {
//     $nearSphere: {
//       $geometry: {
//         type: "Point",
//         coordinates: [50.0, 20.0]
//       },
//       $maxDistance: 5000000 // Maksymalna odległość w metrach
//     }
//   }
// })


// db.paths.createIndex({ "coordinates": "2dsphere" });

// // Współrzędne centroidu
// var centerPoint = [20.500, 21.370];

// // Promień w metrach
// var radius = 3500000;

// db.paths.find({
//   geometry: {
//     $geoWithin: {
//       $centerSphere: [centerPoint, radius / 6371000]
//     }
//   }
// });


// db.paths.find({
//   geometry: {
//     $geoWithin: {
//       $geometry: {
//         type: "Polygon",
//         coordinates: [
//           [
//            [-1.025, 48.769],
//            [0.033, 27.65],
//            [46.587, 27.328],
//            [36.66, 52.492],
//            [-1.025, 48.769]
//           ]
//         ]
//       }
//     }
//   }
// });


db.places.find({
  geometry: {
    $nearSphere: {
      $geometry: {
        type: "Point",
        coordinates: [50.0, 20.0]
      },
      $minDistance: 4500000 
    }
  }
})

