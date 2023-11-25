import { Component } from '@angular/core';

// @Component({  -- decorator defines the component
//   selector: 'app-root',   -  It specifies the name by which the component can be referenced in HTML. 
//   templateUrl: './app.component.html', place of HTML template for the component
//   styleUrls: ['./app.component.css'], styling related to component
// })


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-day2-project';
}
