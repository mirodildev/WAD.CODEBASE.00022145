import { Component, inject } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { Category } from '../../EventItems';
import { MatButtonModule } from '@angular/material/button';
import { ServiceEventService } from '../../service-event.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category-home',
  imports: [MatTableModule, MatButtonModule],
  templateUrl: './category-home.component.html',
  styleUrl: './category-home.component.css'
})
export class CategoryHomeComponent {
  eventSevice = inject(ServiceEventService);
  router = inject(Router)
  items: Category[] = [];
  ngOnInit() {
    this.eventSevice.getAllCategories().subscribe((result) => { this.items = result });
  }

  displayedColumns: string[] = ['ID', 'Name', 'Actions'];
  EditClicked(itemID: number) {
    console.log(itemID, "From Edit")
    this.router.navigateByUrl("/category-edit/" + itemID);
  };
  DetailsClicked(itemID: number) {
    console.log(itemID, "From Details")
    this.router.navigateByUrl("/category-details/" + itemID);
  };
  DeleteClicked(itemID: number) {
    console.log(itemID, "From Delete")
    this.router.navigateByUrl("/category-delete/" + itemID);
  };
  CreateClicked() {
    this.router.navigateByUrl("category-create")
  }
}
