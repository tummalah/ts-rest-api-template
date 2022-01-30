import { RequestHandler } from 'express';
export class HealthCheck {
    
    private  ready=true;
    private readonly health='up';
    private static instance = new HealthCheck();
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    private constructor(){}
    static getInstance(){
        
    return HealthCheck.instance;
        
    }
     OnHealth(): RequestHandler{
        return (req,res,next)=>{
            res.status(200).send(this.health)
        }
    }

     OnReady(): RequestHandler{
        return (req,res,next)=>{
            if (this.ready){
            res.status(200).send(this.ready)
            }
            else{
                res.status(404).send(this.ready)
            }
        }
    }

    setNotReady() {
        this.ready= false;
        // sleep here for your N seconds

        // Begin cleaning up connections 
    }


    
}