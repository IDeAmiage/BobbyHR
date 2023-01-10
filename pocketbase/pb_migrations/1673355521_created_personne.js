migrate((db) => {
  const collection = new Collection({
    "id": "qg1lcafqvp0gn4h",
    "created": "2023-01-10 12:58:41.574Z",
    "updated": "2023-01-10 12:58:41.574Z",
    "name": "personne",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "3uhthtdl",
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
  const collection = dao.findCollectionByNameOrId("qg1lcafqvp0gn4h");

  return dao.deleteCollection(collection);
})
