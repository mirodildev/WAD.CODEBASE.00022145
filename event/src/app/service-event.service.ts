import { Injectable, inject } from '@angular/core';
import { Category, Event } from './EventItems';
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
    return this.httpClient.get<Category[]>("https://localhost:7189/api/Category/Get")
  }
  getCategoryByID(id: number) {
    return this.httpClient.get<Category>("https://localhost:7189/api/Category/GetByID/" +id)
  };

  editCategory(item: Category) {
    return this.httpClient.put("https://localhost:7189/api/Category/Update", item)

  };
  deleteCategory(id: number) {
    return this.httpClient.delete("https://localhost:7189/api/Category/Delete/" + id);
  }
  createCategory(item: Category) {
    return this.httpClient.post<Category>("https://localhost:7189/api/Category/Create", item);
  }
}