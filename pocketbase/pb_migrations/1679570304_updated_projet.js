migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("nea1gh478fx13fw")

  collection.createRule = "@request.auth.id !=\"\""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("nea1gh478fx13fw")

  collection.createRule = null

  return dao.saveCollection(collection)
})
