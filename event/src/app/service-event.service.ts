import { Injectable, inject } from '@angular/core';
import { Event } from './EventItems';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceEventService {
  httpClient = inject(HttpClient);
  constructor() { }

  getAllEventItems() {
    return this.httpClient.get<Event[]>("https://localhost:7189/api/Event/GetAll")

  };

  getByID(id: number) {
    return this.httpClient.get<Event>("https://localhost:7189/api/EventGetByID/" +id)
  };

  edit(item: Event) {


  };
  delete(id: number) {
    return this.httpClient.delete("https://localhost:7189/api/Event/Delete/" + id);
  }
  create(item: Event) {
    return this.httpClient.post<Event>("https://localhost:7189/api/Event/Create", item);
  }
  getAllCategories() {
    return this.httpClient.get<Event[]>("http://localhost:7189/api/Category/Get")
  }
}