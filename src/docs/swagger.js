export const swaggerConfig = {
  "openapi": "3.0.0",
  "info": {
    "title": "Documentação da API",
    "description": "Documentação fornecida pelo desenvolvedor para uso correto da API",
    "version": "1.0.0",
    "contact": {
      "name": "Philipe S",
      "url": "https://github.com/Pafs001/arduino-iot/",
      "email": "pafs001"
    }
  },
  "servers": [
    {
      "url": "{basePath}",
      "description": "The production API server",
      "variables": {
        "project": {
          "default": "arduino-iot",
          "description": "this value is assigned by the service provider, in this example `gigantic-server.com`"
        },
        "basePath": {
          "enum": [
            "https://pafs001.github.io/arduino-iot/api",
            "http://localhost/api"
          ],
          "default": "https://pafs001.github.io/arduino-iot/api"
          }

      }
    }
  ],
  "securitySchemes": {
    "bearerAuth": {
      "type": "http",
      "scheme": "bearer",
      "bearerFormat": "JWT"
    }
  },
  "components": {
    "schemas": {
      "Register": {
        "type": "object",
        "properties": {
          "id": { "type": "integer"},
          "title": { "type": "string"},
          "meter1": { "type": "integer"},
          "meter2": { "type": "integer"},
          "date": { "type": "string", "format": "date-time"},
        }
      },
      "Consolidate": {
        "type": "object",
        "properties": {
          "id": { "type": "integer"},
          "title": { "type": "string"},
          "meter1": { "type": "integer"},
          "meter2": { "type": "integer"},
          "date": { "type": "string", "format": "date-time"},
        }
      }
    }
  },
  "paths": {
    "/register": {
      "post": {
        "summary": "Cadastro de Registros",
        "description": "Rota responsável pela criação de registros",
        "tags": ["Register"],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "array",
                "$ref": "#/components/schemas/Register"
              },
              "example":
                {
                  "title": "Arrancada em Atibaia",
                  "meter1": 44,
                  "meter2": 37,
                  "date": "2023-04-28T20:09:00"
                }
            }
          }
        },
        "responses": {
          "201": {
            "description": "Created",
            "content": {
              "application/json": {
                "schema": {
                  "items": { "$ref": "#/components/schemas/Register" }
                }
              }
            }
          },
          "400": { "description": "Register Already exists!" },
          "401": { "description": "Unauthorized" },
        }
      },
      "get": {
        "summary": "Listagem de Registros",
        "description": "",
        "tags": ["Register"],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "application/json": {
                "schema": {
                  "items": { "$ref": "#/components/schemas/Register" }
                }
              }
            }
          },
          "400": { "description": "Parameter error!" },
        }
      }
    },
    "/register/findbytitle": {
      "get": {
        "summary": "Listagem de Registros",
        "description": "Lista os eventos filtrando pelo título",
        "tags": ["Register"],
        "parameters": [
          {
            "name": "title",
            "in": "query",
            "description": "Título do evento.",
            "required": true
          }
        ],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "application/json": {
                "schema": {
                  "items": { "$ref": "#/components/schemas/Register" }
                }
              }
            }
          },
          "400": { "description": "Parameter error!" },
        }
      }
    },
    "/register/{id}": {
      "put": {
        "summary": "Atualização de Registros",
        "description": "",
        "tags": ["Register"],
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "description": "ID do evento",
            "required": true
          }
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "array",
                "$ref": "#/components/schemas/Register"
              },
              "example":
                {
                  "title": "Arrancada em SP",
                  "meter1": 28,
                  "meter2": 25,
                  "date": "2023-06-06T20:09:00"
                }
            }
          }
        },
        "responses": {
          "200": { "description": "Success" },
          "400": { "description": "Parameter error!" },
        }
      },
      "delete": {
        "summary": "Remoção de Registros",
        "description": "",
        "tags": ["Register"],
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "description": "ID do evento",
            "required": true
          }
        ],
        "responses": {
          "200": { "description": "Success" },
          "400": { "description": "Parameter error!" },
        }
      }
    },
  }
}
