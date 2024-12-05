import { Component, inject } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import {Event} from '../../EventItems';
import { MatButtonModule } from '@angular/material/button';
import { ServiceEventService } from '../../service-event.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [MatTableModule, MatButtonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  eventSevice=inject(ServiceEventService);
  router = inject(Router)
  items: Event[]=[];
  ngOnInit(){
    this.eventSevice.getAllEventItems().subscribe((result)=>{this.items = result});
  }

  displayedColumns: string[] = ['ID', 'Name', 'Description', 'Category Id', 'Location', 'Actions'];
  EditClicked(itemID:number){
    console.log(itemID, "From Edit")
    this.router.navigateByUrl("/edit/"+itemID);
  };
  DetailsClicked(itemID:number){
    console.log(itemID, "From Details")
    this.router.navigateByUrl("/details/"+itemID);
  };
  DeleteClicked(itemID:number){
    console.log(itemID, "From Delete")
    this.router.navigateByUrl("/delete/"+itemID);
  };
  CreateClicked() {
    this.router.navigateByUrl("create")
  }
}
