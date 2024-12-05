import { Component, inject } from '@angular/core';
import { ServiceEventService } from '../../service-event.service';
import { ActivatedRoute } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [MatChipsModule, MatCardModule],
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'], 
})
export class DetailsComponent {
  detailsEvent: any = {
    id: 0,
    title: '',
    description: '',
    categoryID: 0,
    category: {
      id: 0,
      name: '',
    },
  };

  serviceEvent = inject(ServiceEventService);
  activatedRoute = inject(ActivatedRoute);

  constructor() {
    const eventId = this.activatedRoute.snapshot.params['id'];
    this.serviceEvent.getByID(eventId).subscribe(
      (resultedItem) => {
        this.detailsEvent = resultedItem;
      },
      (error) => {
        console.error('Error fetching event details:', error);
      }
    );
  }
}
