migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("4w5sehht8w6y0fz")

  collection.createRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("4w5sehht8w6y0fz")

  collection.createRule = null

  return dao.saveCollection(collection)
})
