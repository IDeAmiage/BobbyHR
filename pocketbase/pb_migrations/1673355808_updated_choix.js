migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("2xxjylw3l3p745m")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "mchqkyfo",
    "name": "role",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "collectionId": "4w5sehht8w6y0fz",
      "cascadeDelete": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("2xxjylw3l3p745m")

  // remove
  collection.schema.removeField("mchqkyfo")

  return dao.saveCollection(collection)
})
