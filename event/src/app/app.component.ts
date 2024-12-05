import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import  {MatButtonModule} from '@angular/material/button';
import { NavigationComponent } from './components/navigation/navigation.component';


@Component({
  selector: 'app-root',
  imports: [MatButtonModule, RouterOutlet, NavigationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'event';
}
