import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductListComponent } from './components/product-list/product-list.component';

export const routes: Routes = [
    {path: 'category/:id', component: HomeComponent},
    {path: 'category', component: HomeComponent},
    {path: 'products', component: HomeComponent},
    {path: '', redirectTo: '/products', pathMatch: 'full'},
    {path: '**', redirectTo: '/products', pathMatch: 'full'}
];
