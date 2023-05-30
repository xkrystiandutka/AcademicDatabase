use("Dutka")

// db.sales.find().limit(5)
// db.sales.dropIndex("customer.age_1")

// db.sales.explain("executionStats").find({ "customer.age": { $gte: 30 }})

// db.sales.createIndex({"customer.age": 1})
// db.sales.explain("executionStats").find({ "customer.age": { $gte: 30 }}).hint({"customer.age": 1})
// db.sales.dropIndex("customer.age_1")


// db.sales.explain("executionStats").aggregate([
//     { $group: { _id: "$customer.email" } },
//     { $sort: { _id: 1 } }
//   ])

// db.sales.createIndex({ "customer.email": 1 }, { unique: true })

// db.sales.explain("executionStats").aggregate([
//     { $group: { _id: "$customer.email" } },
//     { $sort: { _id: 1 } }
//   ])

// db.sales.dropIndex("customer.email_1")


// db.sales.explain("executionStats").find(
//     { "customer.age": 34, "items.tags": "school" })
//     .sort({ "date": -1 })

// db.sales.createIndex({ "customer.age": 1, "items.tags": 1 })

// db.sales.explain("executionStats").find(
//     { "customer.age": 34, "items.tags": "school" })
//     .sort({ "date": -1 })

// db.sales.explain("executionStats").find({
//     $and:[
//       { "storeLocation": "London" },
//       { "items.quantity": 8 }
//     ]
//   }).sort({ "date": -1 })
  
  
// db.sales.createIndex({ "storeLocation": 1, "items.quantity": 1 })

// db.sales.explain("executionStats").find({
//     $and:[
//       { "storeLocation": "London" },
//       { "items.quantity": 8 }
//     ]
//   }).sort({ "date": -1 })

// db.sales.dropIndex({ "customer.age": 1, "items.tags": 1 })
// db.sales.dropIndex({ "storeLocation": 1, "items.quantity": 1 })

// db.sales.find({ "storeLocation": "London", "items.tags": "electronics" })
// .sort({ "date": -1 }).explain("executionStats")

// db.sales.createIndex({ "customer.age": 1 }, 
// { partialFilterExpression: { "customer.age": { $gt: 30 } } })

// db.sales.createIndex({ "storeLocation": 1, "items.tags": 1, "items.quantity": 1 },
//  { partialFilterExpression: { "storeLocation": "London",
//   "items.tags": { $exists: true } } })

// db.sales.find({ "storeLocation": "London", "items.tags": "electronics" })
// .sort({ "date": -1 }).hint({ "storeLocation": 1,  "items.tags": 1,
//  "items.quantity": 1 }).explain("executionStats")

// db.sales.dropIndex("customer.age_1")
// db.sales.dropIndex("storeLocation_1_items.tags_1_items.quantity_1")

// db.sales.getIndexes();

// db.sales.createIndex({ "customer.email": 1 }, { unique: true })
// db.sales.createIndex({ "storeLocation": 1, "items.quantity": 1 })

// db.sales.getIndexes();

// db.dropDatabase()

db.sales.getIndexes();