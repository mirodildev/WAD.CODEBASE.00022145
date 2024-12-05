import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Event} from './EventItems';
import  {MatButtonModule} from '@angular/material/button';
import { HomeComponent } from './components/home/home.component';


@Component({
  selector: 'app-root',
  imports: [ MatButtonModule, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'event';
}
