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
  selector: 'app-category-create',
  standalone: true,
  imports: [FormsModule, MatInputModule, MatSelectModule, MatInputModule, MatButtonModule, MatChipsModule, CommonModule, MatFormFieldModule],
  templateUrl: './category-create.component.html',
  styleUrl: './category-create.component.css'
})

export class CategoryCreateComponent {
  categoryService = inject(ServiceEventService);
  router = inject(Router);
  cate: any;
  cID: number = 0;

  createCategory: any = {
    categoryID: 0,
    name:""
  }
  ngOnInit() {
    this.categoryService.getAllCategories().subscribe((result) => {
      this.cate = result
    });
  };
  create() {
    this.createCategory.categoryID = this.cID
    this.categoryService.createCategory(this.createCategory).subscribe(result => {
      alert("Item Saved")
      this.router.navigateByUrl("category")
    });
  };
}