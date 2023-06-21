use('aggregationSalesDB')
// db.sales.aggregate([
//   {
//     $group: {
//       _id: "$customer.gender",
//       count: { $sum: 1 }
//     }
//   }
// ])

// db.sales.aggregate([
//   {
//       $unwind: "$items"
//   },
//   {
//       $group: {
//           _id: "$storeLocation",
//           totalExpense: {
//           $sum: {
//               $multiply: ["$items.price", "$items.quantity"]
//           }
//           }
//       }
//   },
//   {
//       $sort: {
//           totalExpense: -1
//       }
//   }
// ]);

// db.sales.aggregate([{
//     $unwind : "$items"
// },
//     {
//       $group: {
//         _id: {
//           storeLocation: "$storeLocation",
//           gender: "$customer.gender"
//         },
//         averageAmount: {
//           $avg: {
//             $multiply: ["$items.price", "$items.quantity"]
//           }
//         }
//       }
//     },
//     {
//       $sort: {
//         "_id.storeLocation": 1,
//         "_id.gender": 1
//       }
//     }
//   ])
  

//   db.sales.aggregate([
//     {
//       $unwind: "$items"
//     },
//     {
//       $match: {
//         "items.tags": "kids"
//       }
//     },
//     {
//       $group: {
//         _id: null,
//         totalQuantity: {
//           $sum: "$items.quantity"
//         }
//       }
//     }
//   ])
  
//   db.sales.aggregate([
//   {
//     $project: {
//       _id: 0,
//       saleDate: 1,
//       locationAndName: {
//         $concat: [
//           { $toUpper: { $substrCP: ["$storeLocation", 0, 3] } },
//           "_",
//           { $arrayElemAt: [{ $split: ["$customer.email", "@"] }, 0] }
//         ]
//       }
//     }
//   }
// ])

// db.sales.aggregate([
//     {
//       $match: {
//         $or: [
//           { "customer.age": { $gte: 20, $lte: 25 } },
//           { "customer.age": { $gte: 30, $lte: 40 } }
//         ]
//       }
//     },
//     {
//       $group: {
//         _id: {
//           ageRange: {
//             $cond: [
//               { $and: [{ $gte: ["$customer.age", 20] }, { $lte: ["$customer.age", 25] }] },
//               "20-25",
//               "30-40"
//             ]
//           },
//           purchaseMethod: "$purchaseMethod"
//         },
//         count: { $sum: 1 }
//       }
//     },
//     {
//       $group: {
//         _id: "$_id.ageRange",
//         methods: {
//           $push: {
//             method: "$_id.purchaseMethod",
//             count: "$count"
//           }
//         }
//       }
//     },
//     {
//       $project: {
//         _id: 0,
//         ageRange: "$_id",
//         methods: 1
//       }
//     }
//   ]);


// db.sales.aggregate([
//     {
//       $match: {
//         $or: [
//           { "customer.age": { $gte: 20, $lte: 25 } },
//           { "customer.age": { $gte: 30, $lte: 40 } }
//         ],
//         couponUsed:true
//       }
//     },
//     {
//       $group: {
//         _id: {
//           ageRange: {
//             $cond: [
//               { $and: [{ $gte: ["$customer.age", 20] }, { $lte: ["$customer.age", 25] }] },
//               "20-25",
//               "30-40"
//             ]
//           },
//           purchaseMethod: "$purchaseMethod"
//         },
//         count: { $sum: 1 }
//       }
//     },
//     {
//       $group: {
//         _id: "$_id.ageRange",
//         methods: {
//           $push: {
//             method: "$_id.purchaseMethod",
//             count: "$count"
//           }
//         }
//       }
//     },
//     {
//       $project: {
//         _id: 0,
//         ageRange: "$_id",
//         methods: 1
//       }
//     }
//   ]);

// db.sales.aggregate([
//     {
//       $group: {
//         _id: "$items.name",
//         averageSatisfaction: {
//           $avg: "$customer.satisfaction"
//         }
//       }
//     },
//     {
//       $project: {
//         _id: 0,
//         itemName: "$_id",
//         averageSatisfaction: { $round: ["$averageSatisfaction"] }
//       }
//     }
//   ]);


// db.sales.aggregate([
//   {
//     $limit: 3
//   },
//   {
//     $project: {
//       customerInfo: {
//         $concatArrays: [
//           { $split: ["$customer.email", "@"] },
//           ["-", "$customer.gender", "-", "$storeLocation"]
//         ]
//       }
//     }
//   }
// ]);


// db.sales.aggregate([
//   {
//     $limit: 3
//   },
//   {
//     $project: {
//       customerInfo: {
//         $concat: [
//           { $arrayElemAt: [{ $split: ["$customer.email", "@"] }, 0] },
//           "-",
//           "$customer.gender",
//           "-",
//           "$storeLocation"
//         ]
//       }
//     }
//   }
// ]);

db.sales.aggregate([
  {
    $limit: 8
  },
  {
    $project: {
      customerInfo: {
        $concat: [
          { $arrayElemAt: [{ $split: ["$customer.email", "@"] }, 0] },
          "-",
          { $toLower: { $arrayElemAt: [{ $map: { input: ["$customer.gender"], as: "g", in: { $toLower: "$$g" } } }, 0] } },
          "-",
          { $toLower: "$storeLocation" }
        ]
      },
      NewCustomerInfo: {
        $concat: [
          { $arrayElemAt: [{ $split: ["$customer.email", "@"] }, 0] },
          "-",
          { $toUpper: { $arrayElemAt: [{ $map: { input: ["$customer.gender"], as: "g", in: { $toLower: "$$g" } } }, 0] } },
          "-",
          { $toUpper: "$storeLocation" }
        ]
      }
    }
  }
]);





