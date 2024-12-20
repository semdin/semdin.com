import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';

export const routes: Routes = [
  { path: '', component: HomeComponent }, // Ana rota (Home)
  { path: 'about', component: AboutComponent }, // About rotası
];
