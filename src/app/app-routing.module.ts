import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { MaterialComponent } from './components/pages/material/material.component';
import { ProductComponent } from './components/pages/product/product.component';

const routes: Routes = [
	{path: "", component: HomeComponent},
	{path: "material", component: MaterialComponent},
	{path: "product", component: ProductComponent},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
