
import { json, urlencoded } from "body-parser";
import * as compression from "compression";
import * as express from "express";
import * as http from "http";
import { AppRouter } from "./app.router";
import './controllers/indexController';
import './controllers/userController';
import { ExpressOIDC } from "@okta/oidc-middleware";
import * as session from "express-session";
import path = require("path");




export class ExpressApi {
  private app: express.Express;
  private oidc: ExpressOIDC;
  
  constructor() {
    

    this.app = express();
    
    this.configure();
  }

  private configure() {
    this.registerOidc();
    this.registerViews();
    this.configureMiddleware();
    this.addLocals();
 

  }

  private registerViews(){
    this.app.set( "views", path.join( __dirname,".." ,"views" ) );
    this.app.set( "view engine", "ejs" );
  }
  private registerOidc()
  {
     this.oidc = new ExpressOIDC( {
      
      client_id: process.env.OKTA_CLIENT_ID,
      client_secret: process.env.OKTA_CLIENT_SECRET,
      issuer: `${ process.env.OKTA_ORG_URL }/oauth2/default`,
      redirect_uri: `${ process.env.HOST_URL }/authorization-code/callback`,
      appBaseUrl:`${ process.env.HOST_URL }`,
      scope: "openid profile"
  } );
  

  }
  private configureMiddleware() {
    this.app.use(json({ limit: "50mb" }));
    this.app.use(compression());
    this.app.use(urlencoded({ limit: "50mb", extended: true }));
    this.app.use(session( {
      resave: true,
      saveUninitialized: false,
      secret: process.env.SESSION_SECRET
        } ));
    this.app.use(this.oidc.router);
    this.app.use(AppRouter.getInstance());
    
  }

  private addLocals(){
    this.app.locals.oidc=this.oidc;
    
  }




  public run() {
    const port = process.env.PORT;
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