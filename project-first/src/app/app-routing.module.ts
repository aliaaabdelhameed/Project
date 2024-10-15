import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';  // تأكد من استيراد مكون الصفحة الرئيسية
import { ContactComponent } from './contact/contact.component';
import { HistoricalComponent } from './historical/historical.component';
import { HotelsComponent } from './hotels/hotels.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';

const routes: Routes = [
  { path: '', component: HomeComponent },  
  {path: '', component: HistoricalComponent},
  {path: '', component: HotelsComponent},
  {path: '', component:RestaurantsComponent},
  {path: '', component: ContactComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }