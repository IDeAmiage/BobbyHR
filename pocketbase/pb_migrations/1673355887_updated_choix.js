migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("2xxjylw3l3p745m")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "gjscc2te",
    "name": "indice_prio",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("2xxjylw3l3p745m")

  // remove
  collection.schema.removeField("gjscc2te")

  return dao.saveCollection(collection)
})
