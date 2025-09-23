import { Routes } from '@angular/router';
import { Clima } from './pages/clima/clima';

export const routes: Routes = [
  { path: '', redirectTo: 'clima', pathMatch: 'full' },
  { path: 'clima', component: Clima },
  { path: '**', redirectTo: 'clima' }
];
