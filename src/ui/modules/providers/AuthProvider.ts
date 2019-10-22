import { AuthApp } from '../../../app/app/AuthApp';
import { AuthCallbackRequestAdapter } from '../../../ui/request-adapters/auth/AuthCallbackRequestAdapter';
;

export const AuthProvider = [
    {
        provide: 'AuthApp',
        useClass: AuthApp
    },
    {
        provide: 'AuthCallbackRequestAdapter',
        useClass: AuthCallbackRequestAdapter
    }
];