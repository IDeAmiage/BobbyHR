migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("qg1lcafqvp0gn4h")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "sh0byvp6",
    "name": "promo",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("qg1lcafqvp0gn4h")

  // remove
  collection.schema.removeField("sh0byvp6")

  return dao.saveCollection(collection)
})
