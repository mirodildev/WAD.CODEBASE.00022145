import { Component, OnInit, inject } from '@angular/core';
import { ServiceEventService } from '../../service-event.service';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from '../../EventItems';

function findIndexByID(jsonArray: any[], indexToFind: number): number {
  return jsonArray.findIndex((item) => item.id === indexToFind);
}
@Component({
  selector: 'app-category-edit',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatSelectModule, MatInputModule, MatButtonModule],
  templateUrl: './category-edit.component.html',
  styleUrl: './category-edit.component.css'
})
export class CategoryEditComponent implements OnInit {
  CategoryService = inject(ServiceEventService);
  activatedRoute = inject(ActivatedRoute);
  router = inject(Router);
  editCategory: Category = {
    id: 0,
    name: '',
  };

  categoryObject: any;
  selected: any
  cID: number = 0;
  ngOnInit() {
    this.CategoryService.getByID(this.activatedRoute.snapshot.params['id']).subscribe((result) => {
      this.editCategory = result;
      this.selected = this.editCategory.id;
    });
    this.CategoryService.getAllCategories().subscribe((result) => {
      this.categoryObject = result;
    });
    console.log(this.categoryObject)
  }
  toHome() {
    this.router.navigateByUrl("home")
  }
  edit() {
    this.editCategory.id = this.cID;
    this.CategoryService.editCategory(this.editCategory).subscribe(res => {
      alert("Changes has been updated")
      this.router.navigateByUrl("home");
    })
  }
}