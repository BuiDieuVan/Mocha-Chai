define({ "api": [
  {
    "type": "GET",
    "url": "/v1/book/:id",
    "title": "3.Detail",
    "name": "Detail",
    "group": "Book",
    "description": "<p>Detai book</p>",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Headers": [
          {
            "group": "Headers",
            "type": "application/json",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>Content type header.</p>"
          },
          {
            "group": "Headers",
            "type": "String",
            "optional": false,
            "field": "JWT",
            "description": ""
          }
        ],
        "Params": [
          {
            "group": "Params",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Book id</p>"
          }
        ]
      }
    },
    "filename": "app/routes/book.controller.js",
    "groupTitle": "Book"
  },
  {
    "type": "GET",
    "url": "/v1/book",
    "title": "2.List",
    "name": "List",
    "group": "Book",
    "description": "<p>List all Books</p>",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Headers": [
          {
            "group": "Headers",
            "type": "String",
            "optional": false,
            "field": "JWT",
            "description": ""
          },
          {
            "group": "Headers",
            "type": "application/json",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>Content type header.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "{JSON} Response: HTTP/1.1 200 OK",
          "content": "{\n       \"_id\": \"5c9ada510ff30d0b648ac186\",\n       \"title\": \"conan 97\",\n       \"author\": \"NXB Kim Dong\",\n       \"year\": 2019,\n       \"pages\": 191,\n       \"createdAt\": \"2019-03-27T02:05:05.488Z\"\n   },\n   {\n       \"_id\": \"5c9adceefbc4cf131e352947\",\n       \"title\": \"conan 97\",\n       \"author\": \"NXB Kim Dong\",\n       \"year\": 2019,\n       \"pages\": 191,\n       \"createdAt\": \"2019-03-27T02:16:14.978Z\"\n   },\n   {\n       \"_id\": \"5c9adf092f272e168bd2796a\",\n       \"title\": \"conan 97\",\n       \"author\": \"NXB Kim Dong\",\n       \"year\": 2019,\n       \"pages\": 191,\n       \"createdAt\": \"2019-03-27T02:25:13.629Z\"\n   },\n   {\n       \"_id\": \"5c9ae30b0963a71a74bb7323\",\n       \"title\": \"conan 12\",\n       \"author\": \"NXB Kim Dong\",\n       \"year\": 2019,\n       \"pages\": 191,\n       \"createdAt\": \"2019-03-27T02:42:19.543Z\"\n   },\n   {\n       \"_id\": \"5c9ae3100963a71a74bb7324\",\n       \"title\": \"conan 13\",\n       \"author\": \"NXB Kim Dong\",\n       \"year\": 2019,\n       \"pages\": 191,\n       \"createdAt\": \"2019-03-27T02:42:24.867Z\"\n   },\n   {\n       \"_id\": \"5c9aeac0c6413c22235e3419\",\n       \"title\": \"conan 13\",\n       \"author\": \"NXB Kim Dong\",\n       \"year\": 2019,\n       \"pages\": 192,\n       \"createdAt\": \"2019-03-27T03:15:12.808Z\"\n   },\n   {\n       \"_id\": \"5c9af1f0f04727286266b68c\",\n       \"title\": \"conan 14\",\n       \"author\": \"NXB Kim Dong\",\n       \"year\": 2019,\n       \"pages\": 192,\n       \"createdAt\": \"2019-03-27T03:45:52.240Z\"\n   },\n   {\n       \"_id\": \"5c9af1f5f04727286266b68d\",\n       \"title\": \"conan 16\",\n       \"author\": \"NXB Kim Dong\",\n       \"year\": 2019,\n       \"pages\": 192,\n       \"createdAt\": \"2019-03-27T03:45:57.584Z\"\n   },\n   {\n       \"_id\": \"5c9af1f9f04727286266b68e\",\n       \"title\": \"conan 19\",\n       \"author\": \"NXB Kim Dong\",\n       \"year\": 2019,\n       \"pages\": 192,\n       \"createdAt\": \"2019-03-27T03:46:01.427Z\"\n   },\n   {\n       \"_id\": \"5c9af1fef04727286266b68f\",\n       \"title\": \"conan 25\",\n       \"author\": \"NXB Kim Dong\",\n       \"year\": 2019,\n       \"pages\": 192,\n       \"createdAt\": \"2019-03-27T03:46:06.879Z\"\n   }",
          "type": "JSON"
        }
      ]
    },
    "filename": "app/routes/book.controller.js",
    "groupTitle": "Book"
  },
  {
    "type": "POST",
    "url": "/v1/book",
    "title": "1. Create",
    "name": "create",
    "group": "Book",
    "description": "<p>Create new Book</p>",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Headers": [
          {
            "group": "Headers",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Json Web Token (JWT).</p>"
          },
          {
            "group": "Headers",
            "type": "application/json",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>Content type header.</p>"
          }
        ],
        "Body": [
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "Title",
            "description": ""
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "author",
            "description": ""
          },
          {
            "group": "Body",
            "type": "Number",
            "optional": false,
            "field": "Year",
            "description": ""
          },
          {
            "group": "Body",
            "type": "Number",
            "optional": false,
            "field": "pages",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Body-Example:",
          "content": "{\n\t\t\"title\":\"conan 97\",\n\t\t \"author\":\"NXB Kim Dong\",\n\t\t \"year\" :2019,\n\t\t \"pages\":191\n}",
          "type": "JSON"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Response: HTTP/1.1 200 OK",
          "content": "\n    {\n        \"_id\": \"5c9ada510ff30d0b648ac186\",\n        \"title\": \"conan 97\",\n        \"author\": \"NXB Kim Dong\",\n        \"year\": 2019,\n        \"pages\": 191,\n        \"createdAt\": \"2019-03-27T02:05:05.488Z\"\n\t}",
          "type": "JSON"
        },
        {
          "title": "Error-Response: HTTP/1.1 403 ",
          "content": "  {\n   \"code\": \"FORBIDDEN\",\n   \"name\": \"Forbidden\",\n   \"message\": \"You don't have permission to access this resource.\"\n}",
          "type": "json"
        },
        {
          "title": "Error- Response: HTTP/1.1 401",
          "content": "{\n   \"code\": \"UNAUTHORIZED_ERROR\",\n   \"name\": \"credentials_required\",\n   \"message\": \"No authorization token was found\"\n}",
          "type": "JSON"
        }
      ]
    },
    "filename": "app/routes/book.controller.js",
    "groupTitle": "Book"
  },
  {
    "type": "DELETE",
    "url": "/v1/book/:id",
    "title": "4.Delete",
    "name": "delete",
    "group": "Book",
    "description": "<p>Delete Book</p>",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Headers": [
          {
            "group": "Headers",
            "type": "application/json",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>Content type header.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Response: HTTP/1.1 200 OK",
          "content": "\n{\n    \"message\": \"Book successfully deleted!\",\n    \"result\": {\n        \"n\": 1,\n        \"ok\": 1\n    }\n}",
          "type": "JSON"
        }
      ]
    },
    "filename": "app/routes/book.controller.js",
    "groupTitle": "Book"
  },
  {
    "type": "UPDATE",
    "url": "/v1/book/:id",
    "title": "5.Update",
    "name": "update",
    "group": "Book",
    "description": "<p>Update Book</p>",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Headers": [
          {
            "group": "Headers",
            "type": "application/json",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>Content type header.</p>"
          }
        ],
        "Body": [
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": ""
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "author",
            "description": ""
          },
          {
            "group": "Body",
            "type": "Number",
            "optional": false,
            "field": "year",
            "description": ""
          },
          {
            "group": "Body",
            "type": "Number",
            "optional": false,
            "field": "pages",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Response: HTTP/1.1 200 OK ",
          "content": "{\n    \"message\": \"Book updated!\",\n    \"book\": {\n        \"_id\": \"5c9ae3100963a71a74bb7324\",\n        \"title\": \"conan 25\",\n        \"author\": \"NXB Kim Dong\",\n        \"year\": 2017,\n        \"pages\": 193,\n        \"createdAt\": \"2019-03-27T02:42:24.867Z\"\n    }\n}",
          "type": "JSON"
        }
      ]
    },
    "filename": "app/routes/book.controller.js",
    "groupTitle": "Book"
  }
] });
