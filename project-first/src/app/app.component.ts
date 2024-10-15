import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from "./footer/footer.component";
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { HistoricalComponent } from "./historical/historical.component";
import { HotelsComponent } from "./hotels/hotels.component";
import { ContactComponent } from './contact/contact.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FooterComponent, HeaderComponent, HomeComponent, ContactComponent, HistoricalComponent, HotelsComponent ,RestaurantsComponent], 
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'project-first';
}
