migrate((db) => {
  const collection = new Collection({
    "id": "av0dkco3tamzo59",
    "created": "2023-01-10 13:46:25.950Z",
    "updated": "2023-01-10 13:46:25.950Z",
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
