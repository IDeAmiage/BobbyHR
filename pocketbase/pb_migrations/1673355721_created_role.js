migrate((db) => {
  const collection = new Collection({
    "id": "4w5sehht8w6y0fz",
    "created": "2023-01-10 13:02:01.814Z",
    "updated": "2023-01-10 13:02:01.814Z",
    "name": "role",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "z5g1zlru",
        "name": "projet",
        "type": "relation",
        "required": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "collectionId": "nea1gh478fx13fw",
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
  const collection = dao.findCollectionByNameOrId("4w5sehht8w6y0fz");

  return dao.deleteCollection(collection);
})
