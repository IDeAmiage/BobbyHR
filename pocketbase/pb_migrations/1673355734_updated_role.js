migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("4w5sehht8w6y0fz")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "kmqvumcl",
    "name": "type_role",
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
  const collection = dao.findCollectionByNameOrId("4w5sehht8w6y0fz")

  // remove
  collection.schema.removeField("kmqvumcl")

  return dao.saveCollection(collection)
})
