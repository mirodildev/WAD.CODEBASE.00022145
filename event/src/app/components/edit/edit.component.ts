import { Component, OnInit, inject } from '@angular/core';
import { ServiceEventService } from '../../service-event.service';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ActivatedRoute, Router } from '@angular/router';
import { Event } from '../../EventItems';

function findIndexByID(jsonArray: any[], indexToFind: number): number {
  return jsonArray.findIndex((item) => item.id === indexToFind);
}
@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatSelectModule, MatInputModule, MatButtonModule],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent implements OnInit {
  EventService = inject(ServiceEventService);
  activatedRoute = inject(ActivatedRoute);
  router = inject(Router);
  editEvent: Event = {
    id: 0,
    name: '',
    description: '',
    categoryID: 0,
    location: "",
    category: {
      id: 0,
      name: "",
    }
  };

  categoryObject: any;
  selected: any
  cID: number = 0;
  ngOnInit() {
    this.EventService.getByID(this.activatedRoute.snapshot.params['id']).subscribe((result) => {
      this.editEvent = result;
      this.selected = this.editEvent.categoryID;
    });
    this.EventService.getAllCategories().subscribe((result) => {
      this.categoryObject = result;
    });
    console.log(this.categoryObject)
  }
  toHome() {
    this.router.navigateByUrl("home")
  }
  edit() {
    this.editEvent.categoryID = this.cID;
    this.editEvent.category = this.categoryObject[findIndexByID(this.categoryObject, this.cID)];
    this.EventService.edit(this.editEvent).subscribe(res => {
      alert("Changes has been updated")
      this.router.navigateByUrl("home");
    })
  }
}