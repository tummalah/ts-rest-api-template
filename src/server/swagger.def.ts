import * as fs from 'fs'
import {swUserController} from './controllers/userSwagger'
const swagger = {
    openapi: '3.0.0',
    info: {
      title: 'TS BoilerPlate',
      version: '1.0.0',
      description: 'The REST API Boilerplate'
    },
    servers: [
      {
        url: 'http://localhost:3000',
        description: 'Development server'
      }
    ],
    paths: {
        ...swUserController
    }
  };
  

  function GenerateSwagger(){
      fs.writeFileSync('swagger.json', JSON.stringify(swagger));
  }
  GenerateSwagger();

