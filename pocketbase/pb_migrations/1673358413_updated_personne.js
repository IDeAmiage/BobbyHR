migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("av0dkco3tamzo59")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "0jfyrush",
    "name": "nom",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": 1,
      "max": 100,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "h3phddyy",
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
  const collection = dao.findCollectionByNameOrId("av0dkco3tamzo59")

  // remove
  collection.schema.removeField("0jfyrush")

  // remove
  collection.schema.removeField("h3phddyy")

  return dao.saveCollection(collection)
})
