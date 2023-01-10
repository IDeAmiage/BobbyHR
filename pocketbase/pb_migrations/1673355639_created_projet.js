migrate((db) => {
  const collection = new Collection({
    "id": "nea1gh478fx13fw",
    "created": "2023-01-10 13:00:39.063Z",
    "updated": "2023-01-10 13:00:39.063Z",
    "name": "projet",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "ftoufknc",
        "name": "nom",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": 1,
          "max": 100,
          "pattern": ""
        }
      }
    ],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("nea1gh478fx13fw");

  return dao.deleteCollection(collection);
})
