migrate((db) => {
  const collection = new Collection({
    "id": "av0dkco3tamzo59",
    "created": "2023-03-23 10:37:50.770Z",
    "updated": "2023-03-23 10:37:50.770Z",
    "name": "personne",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "iwbgdkdz",
        "name": "email",
        "type": "email",
        "required": true,
        "unique": false,
        "options": {
          "exceptDomains": null,
          "onlyDomains": null
        }
      },
      {
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
      },
      {
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
      },
      {
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
  const collection = dao.findCollectionByNameOrId("av0dkco3tamzo59");

  return dao.deleteCollection(collection);
})
