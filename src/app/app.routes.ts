import { Routes } from '@angular/router';
import { appConfig } from './app.config';
import { App } from './app';
import { HelloWorld } from './pages/hello-world/hello-world';

export const routes: Routes = [
    {
        path:'home',
        component:HelloWorld
    },
    {
        path:'**',
        redirectTo:'home'
    },
    
];
