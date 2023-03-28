migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("nea1gh478fx13fw")

  collection.listRule = "@request.auth.id !=\"\""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("nea1gh478fx13fw")

  collection.listRule = null

  return dao.saveCollection(collection)
})
