use("aggregationSalesDB")
// db.sales.aggregate([
//   {
//     $unwind: "$items"
//   },
//   {
//     $group: {
//       _id: null,
//       tags: { $push: "$items.tags" }
//     }
//   },
//   {
//     $project: {
//       _id: 0,
//       tags: 1
//     }
//   }
// ]);

// db.sales.aggregate([
//     {
//       $unwind: "$items"
//     },
//     {
//       $group: {
//         _id: null,
//         tags: { $addToSet: "$items.tags" }
//       }
//     },
//     {
//       $project: {
//         _id: 0,
//         tags: 1
//       }
//     }
//   ]);
  

// db.sales.aggregate([
//     {
//       $unwind: "$items"
//     },
//     {
//       $group: {
//         _id: "$_id",
//         saleDate: { $first: "$saleDate" },
//         maxPrice: { $max: "$items.price" },
//         itemName: { $max: "$items.name" }
//       }
//     },
//     {
//       $project: {
//         _id: 0,
//         saleDate: 1,
//         itemName: 1,
//         maxPrice: { $toDouble: "$maxPrice" }
//       }
//     }
// ])

// db.sales.aggregate([
//   {
//     $unwind: "$items"
//   },
//   {
//     $group: {
//       _id: "$_id",
//       minPrice: { $min: { $toDouble: "$items.price" } },
//       itemName: { $first: "$items.name" },
//       quantity: { $first: "$items.quantity" }
//     }
//   },
//   {
//     $project: {
//       _id: 0,
//       itemName: 1,
//       quantity: 1,
//       minPrice: 1
//     }
//   }
// ]);

// db.sales.aggregate([
//     {
//         $unwind: "$items"
//     },
//     {
//       $group: {
//         _id: {
//           city: "$storeLocation",
//           priceRange: {
//             $switch: {
//               branches: [
//                 { case: { $lte: ["$items.price", 20] }, then: "Niskie" },
//                 { case: { $lte: ["$items.price", 50] }, then: "Średnie" },
//               ],
//               default: "Wysokie"
//             }
//           }
//         },
//         totalSales: { $sum: 1 }
//       }
//     },
//     {
//       $project: {
//         city: "$_id.city",
//         priceRange: "$_id.priceRange",
//         totalSales: 1,
//         _id: 0
//       }
//     },
//     {
//       $sort: { city: 1, priceRange: 1 }
//     }
//   ]);

// db.sales.aggregate([
//     {
//       $unwind: "$items"
//     },
//     {
//       $bucketAuto: {
//         groupBy: "$items.price",
//         buckets: 4,
//         output: {
//           sales: { $sum: 1 },
//           totalAmount: { $sum: { $multiply: ["$items.price", "$items.quantity"] } }
//         }
//       }
//     },
//     {
//       $group: {
//         _id: {
//           city: "$storeLocation",
//           segment: {
//             $concat: [
//               { $toString: { $trunc: ["$_id.min", 0] } },
//               "-",
//               { $toString: { $trunc: ["$_id.max", 0] } }
//             ]
//           }
//         },
//         sales: { $sum: "$sales" },
//         totalAmount: { $sum: "$totalAmount" }
//       }
//     }
//   ]);
  
  
//   db.sales.aggregate([
//     {
//       $project: {
//         storeLocation: 1,
//         slicedItems: { $slice: ["$items", 2] }
//       }
//     }
//   ])
  
// db.sales.aggregate([
//     {
//       $project: {
//         storeLocation: 1,
//         itemsCount: { $size: "$items" }
//       }
//     }
//   ])
  
// db.sales.aggregate([
//     {
//       $project: {
//         storeLocation: 1,
//         discountStatus: {
//           $cond: { 
//             if: { $gte: ["$discount", 0.2] },
//             then: "High",
//             else: "Low"
//           }
//         }
//       }
//     }
//   ])
  
  
  