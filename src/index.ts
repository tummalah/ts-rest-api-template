import * as dotenv from 'dotenv-safe'
import container from "./server/controllers/di/di-container";
import { ExpressApi } from "./server/express.api";
import { logging } from './server/helpers/logger/logmanager';

const appConfig = dotenv.config({example: '.env.example' });

logging
  .configure({
    minLevels: {
      '': 'info',
      'controllers': 'debug'
    }
  })
  .registerConsoleLogger();


const api = new ExpressApi();

api.run();
