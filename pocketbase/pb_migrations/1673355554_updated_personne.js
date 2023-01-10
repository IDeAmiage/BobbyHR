migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("qg1lcafqvp0gn4h")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "nmrhjrxd",
    "name": "prenom",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": 1,
      "max": 100,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("qg1lcafqvp0gn4h")

  // remove
  collection.schema.removeField("nmrhjrxd")

  return dao.saveCollection(collection)
})
