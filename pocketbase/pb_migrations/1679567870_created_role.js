migrate((db) => {
  const collection = new Collection({
    "id": "4w5sehht8w6y0fz",
    "created": "2023-03-23 10:37:50.769Z",
    "updated": "2023-03-23 10:37:50.769Z",
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
          "collectionId": "nea1gh478fx13fw",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": null
        }
      },
      {
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
