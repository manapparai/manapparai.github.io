import { Component, HostListener } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'manapparai';

  constructor(private router: Router){

  }

  ngOnInit() {
    // this.router.events.subscribe((event) => {
    //   if (event instanceof NavigationEnd) {
    //     // Any route Redirect to the "home" route
    //     this.router.navigate(['/home']);
    //   }
    // });
  }

  @HostListener('window:beforeunload', ['$event'])
  handleBeforeUnload(event: Event) {
    // This will be triggered when the user refreshes the page
    // or closes the browser tab/window.
    this.router.navigate(['/']);
  }

  @HostListener('window:unload', ['$event'])
  handleUnload(event: Event) {
    // This will be triggered when the user closes the browser tab/window.
    // You might want to handle this differently if needed.
    this.router.navigate(['/home']);
  }
}
