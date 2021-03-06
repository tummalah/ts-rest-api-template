import {Request} from 'express';

interface Profile {
    provider: string;
    id: string;
    displayName: string;
    username?: string | undefined;
    name?: {
        familyName: string;
        givenName: string;
        middleName?: string | undefined;
    } | undefined;
    emails?: Array<{
        value: string;
        type?: string | undefined;
    }> | undefined;
    photos?: Array<{
        value: string;
    }> | undefined;
}


export interface IoktaRequest extends Request {
userContext ?: Record<'userinfo',Profile>,
isAuthenticated(): this is AuthenticatedRequest;
isUnauthenticated(): this is UnauthenticatedRequest;

}
   
// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface AuthInfo {}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface User {}
interface AuthenticatedRequest extends Request {
    userContext: Record<'userinfo',Profile>;
}

interface UnauthenticatedRequest extends Request {
    userContext?: undefined;
}