import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DetailProductComponent } from './pages/detail-product/detail-product.component';

export const routes: Routes = [
    {path: 'search/:keyword', component: HomeComponent},
    {path: 'category/:id', component: HomeComponent},
    {path: 'products/:id', component: DetailProductComponent},
    {path: 'category', component: HomeComponent},
    {path: 'products', component: HomeComponent},
    {path: '', redirectTo: '/products', pathMatch: 'full'},
    {path: '**', redirectTo: '/products', pathMatch: 'full'}
];
