import { MetadataKeys } from "./metadataKeys";
import { Methods } from "./routeMethods";

import * as express from 'express';


export function controller(routePrefix: string, routerInstance: express.Router ) {
    // eslint-disable-next-line @typescript-eslint/ban-types
    return function<T extends { new(...args: any[]): {} }>(target: T) {
      const router = routerInstance;

      Object.getOwnPropertyNames(target.prototype).forEach(key=>{
      if (key === 'constructor') {
        return;
      }
      const routeHandler = target.prototype[key];
      
      
      const path = Reflect.getMetadata(
        MetadataKeys.path,
        target.prototype,
        key
      );
      const method: Methods = Reflect.getMetadata(
        MetadataKeys.method,
        target.prototype,
        key
      );
      const middlewares =
        Reflect.getMetadata(MetadataKeys.middleware, target.prototype, key) ||
        [];
      // const requiredBodyProps =
      //   Reflect.getMetadata(MetadataKeys.validator, target.prototype, key) ||
      //   [];

      // const validator = bodyValidators(requiredBodyProps);

      if (path) {
        router[method](
          `${routePrefix}${path}`,
         middlewares,
          routeHandler
        );
      }
    });

    };
  }