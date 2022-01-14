
import { json, urlencoded } from "body-parser";
import * as compression from "compression";
import * as express from "express";
import * as http from "http";
import { AppRouter } from "./app.router";
import './controllers/indexController';



export class ExpressApi {
  private app: express.Express;

  
  constructor() {
    

    this.app = express();
    
    this.configure();
  }

  private configure() {
    this.configureMiddleware();
 

  }

  private configureMiddleware() {
    this.app.use(json({ limit: "50mb" }));
    this.app.use(compression());
    this.app.use(urlencoded({ limit: "50mb", extended: true }));
    this.app.use(AppRouter.getInstance());
    
  }

 




  public run() {
    const port = 3000;
    const server = http.createServer(this.app);
    server.listen(port,()=>console.log("%s started on port:%d",process.env.npm_package_name,port));
    server.on("error", this.onError);
   
    
  }

  private onError(error) {
    const port = error.port;
    if (error.syscall !== "listen") {
      throw error;
    }

    const bind = typeof port === "string" ? `Pipe ${port}` : `Port ${port}`;

    // handle specific listen errors with friendly messages
    switch (error.code) {
      case "EACCES":
        console.error(`${bind} requires elevated privileges`);
        process.exit(1);
        break;
      case "EADDRINUSE":
        console.error(`${bind} is already in use`);
        process.exit(1);
        break;
      default:
        throw error;
    }
  }
}