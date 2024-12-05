import { Component, Input } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import {Event} from '../../EventItems';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-home',
  imports: [MatTableModule, MatButtonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  // @Input() items:any;
  items: Event[] = [
      {
        
        "ID": 1,
        "Title": "Complete Project",
        "Description": "Finish the coding project by the deadline.",
        "CategoryID": 3,
        "Category": {
          "ID": 3,
          "Name": "Work"
        },
        "Location": "somewhere"
      },
  ];
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
