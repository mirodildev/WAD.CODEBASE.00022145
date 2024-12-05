import { Component, inject } from '@angular/core';
import { ServiceEventService } from '../../service-event.service';
import { ActivatedRoute } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';

@Component({
  selector: 'app-category-details',
  standalone: true,
  imports: [MatChipsModule, MatCardModule],
  templateUrl: './category-details.component.html',
  styleUrls: ['./category-details.component.css'],
})
export class CategoryDetailsComponent {
  detailsCategory: any = {
    id: 0,
    name: ''
  };

  serviceCategory = inject(ServiceEventService);
  activatedRoute = inject(ActivatedRoute);

  constructor() {
    const categoryId = this.activatedRoute.snapshot.params['id'];
    this.serviceCategory.getCategoryByID(categoryId).subscribe(
      (resultedItem) => {
        this.detailsCategory = resultedItem;
      },
      (error) => {
        console.error('Error fetching event details:', error);
      }
    );
  }
}
