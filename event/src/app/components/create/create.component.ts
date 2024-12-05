import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { ServiceEventService } from '../../service-event.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [FormsModule, MatInputModule, MatSelectModule, MatInputModule, MatButtonModule, MatChipsModule, CommonModule, MatFormFieldModule],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})

export class CreateComponent {
  eventService = inject(ServiceEventService);
  router = inject(Router);
  cate: any;
  cID: number = 0;

  createEvent: any = {
    title: "",
    descriptiom: "",
    categoryID: 0
  }
  ngOnInit() {
    this.eventService.getAllCategories().subscribe((result) => {
      this.cate = result
    });
  };
  create() {
    this.createEvent.categoryID = this.cID
    this.eventService.create(this.createEvent).subscribe(result => {
      alert("Item Saved")
      this.router.navigateByUrl("home")
    });
  };
}