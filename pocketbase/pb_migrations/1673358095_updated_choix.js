migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("2xxjylw3l3p745m")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "wf4orjoy",
    "name": "personne",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "collectionId": "_pb_users_auth_",
      "cascadeDelete": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("2xxjylw3l3p745m")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "wf4orjoy",
    "name": "personne",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "collectionId": "qg1lcafqvp0gn4h",
      "cascadeDelete": false
    }
  }))

  return dao.saveCollection(collection)
})
