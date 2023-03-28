migrate((db) => {
  const snapshot = [
    {
      "id": "_pb_users_auth_",
      "created": "2023-01-17 14:31:05.355Z",
      "updated": "2023-01-17 14:32:39.628Z",
      "name": "users",
      "type": "auth",
      "system": false,
      "schema": [
        {
          "system": false,
          "id": "users_name",
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
          "id": "users_avatar",
          "name": "avatar",
          "type": "file",
          "required": false,
          "unique": false,
          "options": {
            "maxSelect": 1,
            "maxSize": 5242880,
            "mimeTypes": [
              "image/jpg",
              "image/jpeg",
              "image/png",
              "image/svg+xml",
              "image/gif",
              "image/webp"
            ],
            "thumbs": null
          }
        },
        {
          "system": false,
          "id": "h5ivkhzj",
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
          "id": "psfm9yjw",
          "name": "promo",
          "type": "select",
          "required": false,
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
      "listRule": "id = @request.auth.id",
      "viewRule": "id = @request.auth.id",
      "createRule": "",
      "updateRule": "id = @request.auth.id",
      "deleteRule": "id = @request.auth.id",
      "options": {
        "allowEmailAuth": true,
        "allowOAuth2Auth": true,
        "allowUsernameAuth": true,
        "exceptEmailDomains": null,
        "manageRule": null,
        "minPasswordLength": 8,
        "onlyEmailDomains": null,
        "requireEmail": false
      }
    },
    {
      "id": "nea1gh478fx13fw",
      "created": "2023-01-17 14:32:39.629Z",
      "updated": "2023-01-17 14:32:39.629Z",
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
    },
    {
      "id": "4w5sehht8w6y0fz",
      "created": "2023-01-17 14:32:39.630Z",
      "updated": "2023-01-24 14:40:23.495Z",
      "name": "role",
      "type": "base",
      "system": false,
      "schema": [
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
      "listRule": "",
      "viewRule": "",
      "createRule": null,
      "updateRule": null,
      "deleteRule": null,
      "options": {}
    },
    {
      "id": "2xxjylw3l3p745m",
      "created": "2023-01-17 14:32:39.630Z",
      "updated": "2023-01-17 14:32:39.630Z",
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
            "collectionId": "_pb_users_auth_",
            "cascadeDelete": false
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
            "maxSelect": 1,
            "collectionId": "4w5sehht8w6y0fz",
            "cascadeDelete": false
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
    },
    {
      "id": "av0dkco3tamzo59",
      "created": "2023-01-17 14:32:39.630Z",
      "updated": "2023-01-17 14:32:39.630Z",
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
    }
  ];

  const collections = snapshot.map((item) => new Collection(item));

  return Dao(db).importCollections(collections, true, null);
}, (db) => {
  return null;
})
