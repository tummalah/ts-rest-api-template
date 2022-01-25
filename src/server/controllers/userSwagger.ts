import * as joi from 'joi';
import j2s from 'joi-to-swagger';

const CreateUserjoiSchema = joi.object().keys({
    username:    joi.string().required(),
    addressLine1:   joi.string().required(),
    state: joi.string().required(),
    country: joi.string().required()
})

const createUserSchema = j2s(CreateUserjoiSchema).swagger
// swagger info
const swPostUser = {
    "summary": "Create the new user",
    "tags": [
      "postUser"
    ],
    "requestBody": {
      "content": {
        "application/json": {
          "schema": {
            ...createUserSchema
          }
        }
      }
    },
    "responses": {
      "201": {
        "description": "User created"
      },
      "default": {
        "description": "Error message"
      }
    }
  }
  
  export const swUserController = {
    "/user": {
      
      "post": {
        ...swPostUser
      }
    }
  }
export default createUserSchema