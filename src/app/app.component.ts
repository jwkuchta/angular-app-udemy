import { Component } from '@angular/core';

@Component({
  // the following string holds the app root. Replaces content in the html file with the component
  selector: 'app-root',
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css']
  // alternatively you can use define styling here
  styles: [`
    h3 {
      color: goldenrod;
    }
  `]
})
export class AppComponent {
}
