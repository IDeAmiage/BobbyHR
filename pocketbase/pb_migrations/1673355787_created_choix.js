migrate((db) => {
  const collection = new Collection({
    "id": "2xxjylw3l3p745m",
    "created": "2023-01-10 13:03:07.275Z",
    "updated": "2023-01-10 13:03:07.275Z",
    "name": "choix",
    "type": "base",
    "system": false,
    "schema": [
      {
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
  const collection = dao.findCollectionByNameOrId("2xxjylw3l3p745m");

  return dao.deleteCollection(collection);
})
