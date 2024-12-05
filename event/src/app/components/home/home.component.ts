import { Component, inject } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import {Event} from '../../EventItems';
import { MatButtonModule } from '@angular/material/button';
import { ServiceEventService } from '../../service-event.service';

@Component({
  selector: 'app-home',
  imports: [MatTableModule, MatButtonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  eventSevice=inject(ServiceEventService);
  items: Event[]=[];
  ngOnInit(){
    this.eventSevice.getAllEventItems().subscribe((result)=>{this.items = result});
  }

  displayedColumns: string[] = ['ID', 'Title', 'Description', 'Category Name', 'Location', 'Actions'];
  EditClicked(itemID:number){
    console.log(itemID, "From Edit")
  };
  DetailsClicked(itemID:number){
    console.log(itemID, "From Details")
  };
  DeleteClicked(itemID:number){
    console.log(itemID, "From Delete")
  };
}
