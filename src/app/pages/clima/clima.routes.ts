import { Routes } from "@angular/router";

export const climaRoutes: Routes = [
    {
        path: '',
        loadComponent: () => import('./clima').then(r => r.Clima)
    }
];