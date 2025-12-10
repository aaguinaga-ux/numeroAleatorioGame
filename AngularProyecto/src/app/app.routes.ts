import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { Juego } from './pages/juego/juego';


export const routes: Routes = [
  { path: 'login', component: Login },
  { path: 'juego', component: Juego },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', redirectTo: 'login' }
  
];
