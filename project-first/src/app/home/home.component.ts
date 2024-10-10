import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  userName="Alia" ;
  sayHello(){
alert("hello")
  }
  imgSrc="images/Aswan.jpg"

  protectedPrice=5000

onsale=true

}



