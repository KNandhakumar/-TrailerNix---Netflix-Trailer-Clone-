import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SearchComponent } from './pages/search/search.component';
import { MovieDetailesComponent } from './pages/movie-detailes/movie-detailes.component';

// * first rotes path and components set 
// * then go to ts file 
// * then import RouterModule 
// * then which link you router so you go to routerLink with that link
export const routes: Routes = [
    {path:'',component:HomeComponent},
    {path:'search',component:SearchComponent},
    {path:'movie/:id',component:MovieDetailesComponent}
];
