import * as dotenv from 'dotenv-safe'
import container from "./server/controllers/di/di-container";
import { ExpressApi } from "./server/express.api";

const appConfig = dotenv.config({example: '.env.example' });


const api = new ExpressApi();

api.run();
