import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { FeaturesComponent } from './features/features.component';
import { CategoriesComponent } from './categories/categories.component';
import { ReviewComponent } from './review/review.component';
import { BlocksComponent } from './blocks/blocks.component';

const routes: Routes = [
  {
    path:'header',component:HeaderComponent
  },
  {
    path:'footer',component:FooterComponent
  },
  {
    path:'',component:HomeComponent
  },
  {
    path:'features', component:FeaturesComponent
  },
  {
    path:'categories',component:CategoriesComponent
  },
  {
    path:'review',component:ReviewComponent
  },
  {
    path:'blocks',component:BlocksComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
