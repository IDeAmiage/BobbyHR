migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("av0dkco3tamzo59")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "2ojf2lk9",
    "name": "promo",
    "type": "select",
    "required": true,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "M1",
        "M2"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("av0dkco3tamzo59")

  // remove
  collection.schema.removeField("2ojf2lk9")

  return dao.saveCollection(collection)
})
