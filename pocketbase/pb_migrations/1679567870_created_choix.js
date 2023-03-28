migrate((db) => {
  const collection = new Collection({
    "id": "2xxjylw3l3p745m",
    "created": "2023-03-23 10:37:50.770Z",
    "updated": "2023-03-23 10:37:50.770Z",
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
          "collectionId": "_pb_users_auth_",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": null
        }
      },
      {
        "system": false,
        "id": "mchqkyfo",
        "name": "role",
        "type": "relation",
        "required": false,
        "unique": false,
        "options": {
          "collectionId": "4w5sehht8w6y0fz",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": null
        }
      },
      {
        "system": false,
        "id": "89tgutko",
        "name": "numero_vote",
        "type": "number",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null
        }
      },
      {
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
