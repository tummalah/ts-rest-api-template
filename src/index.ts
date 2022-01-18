import container from "./server/controllers/di-container";
import { ExpressApi } from "./server/express.api";


const api = new ExpressApi();

api.run();
