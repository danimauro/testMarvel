import { Routes, RouterModule } from '@angular/router';

//Componentes
import { HomeComponent } from './components/home/home.component';
import { DetailComponent } from './components/detail/detail.component';

const APP_ROUTES: Routes = [
  
    { path: 'home', component: HomeComponent},
    { path: 'details/:id', component: DetailComponent},
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    { path: '**', pathMatch: 'full', redirectTo: 'home'}
  
  ];
  
  export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);