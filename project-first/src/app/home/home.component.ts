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



// Selecting specified elements
const aboutUsSection = document.querySelector(".about-us") as HTMLElement;
const headerText = document.querySelector(".text") as HTMLElement;
const asteriskIcon = document.querySelector(".fas.fa-asterisk") as HTMLElement;
const imageContainer = document.querySelector(".image-container") as HTMLElement;
const image1 = document.querySelector(".image.image1") as HTMLImageElement; // Adjusted for specificity
const image2 = document.querySelector(".image.image2") as HTMLImageElement;

// Example usage
if (aboutUsSection) {
    console.log("About Us Section:", aboutUsSection);
}

if (headerText) {
    console.log("Header Text:", headerText);
}

if (asteriskIcon) {
    console.log("Asterisk Icon:", asteriskIcon);
}

if (imageContainer) {
    console.log("Image Container:", imageContainer);
}

if (image1) {
    console.log("Image 1:", image1);
}

if (image2) {
    console.log("Image 2:", image2);
}
