import { Component } from '@angular/core';
import  {MatButtonModule} from '@angular/material/button';
@Component({
  selector: 'app-root',
  imports: [ MatButtonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'event';
}
