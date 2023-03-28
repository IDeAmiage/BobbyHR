migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("4w5sehht8w6y0fz")

  collection.updateRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("4w5sehht8w6y0fz")

  collection.updateRule = null

  return dao.saveCollection(collection)
})
