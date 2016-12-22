import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login';


export const ROUTES: Routes = [
  { path: '',      component: LoginComponent },
  { path: 'login',  component: LoginComponent }
];
