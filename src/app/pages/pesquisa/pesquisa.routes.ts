import { Routes } from "@angular/router";

export const pesquisaRoutes: Routes = [
    {
        path: '',
        loadComponent: () => import('./pesquisa').then(r => r.Pesquisa)
    }
];