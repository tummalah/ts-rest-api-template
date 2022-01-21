//TODO customize Express Request Interface to include Okta Types

import {  Response, NextFunction } from 'express';
import {IoktaRequest} from '../../../server/helpers/types/oktaRequest';

export function isAuthenticated(req:IoktaRequest,res:Response, next:NextFunction){
    
    if (req.isAuthenticated()){
        
        next()
    }
    else{
        res.redirect('/login')
    }

    }
