migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("4w5sehht8w6y0fz")

  collection.deleteRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("4w5sehht8w6y0fz")

  collection.deleteRule = null

  return dao.saveCollection(collection)
})
