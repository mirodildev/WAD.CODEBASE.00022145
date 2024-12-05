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
    return this.httpClient.get<Event>("https://localhost:7189/api/Event/GetByID/" +id)
  };

  edit(item: Event) {
    return this.httpClient.put("https://localhost:7189/api/Event/Update", item)

  };
  delete(id: number) {
    return this.httpClient.delete("https://localhost:7189/api/Event/Delete/" + id);
  }
  create(item: Event) {
    return this.httpClient.post<Event>("https://localhost:7189/api/Event/Create", item);
  }
  getAllCategories() {
    return this.httpClient.get<Event[]>("https://localhost:7189/api/Category/Get")
  }
}