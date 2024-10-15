import { Component ,HostListener} from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  // State variables
  isMenuOpen = false;
  isNavActive = false;
  headerTextOpacity = 1;
  logoImageSrc = 'https://i.imgur.com/2rxL2qG.png"';

  // Toggle the navigation menu (hamburger menu)
  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  // Listen to scroll events to modify the header based on pageYOffset (scrollY)
  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    const scrollY = window.scrollY || window.pageYOffset;

    const headerSection = document.querySelector('header') as HTMLElement;
    if (headerSection) {
      const headerHeight = headerSection.offsetHeight;

      // Change navbar state based on scroll position
      if (scrollY > headerHeight - 75) {
        this.isNavActive = true;
        this.logoImageSrc = 'https://i.imgur.com/2rxL2qG.png"';
      } else {
        this.isNavActive = false;
        this.logoImageSrc = 'https://i.imgur.com/2rxL2qG.png"';
      }

      // Adjust header text opacity based on scroll
      this.headerTextOpacity = Math.max(-scrollY / 300 + 1, 0);
    }
  }


}
