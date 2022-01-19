//TODO customize Express Request Interface to include Okta Types

import { Request, Response, NextFunction } from 'express';

export function isAuthenticated(req:any,res:Response, next:NextFunction){
    if (req.isAuthenticated()){
        
        next()
    }
    else{
        res.redirect('/login')
    }

    }
