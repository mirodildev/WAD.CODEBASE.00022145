import { Injectable, inject } from '@angular/core';
import { Event } from './EventItems';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceEventService {
  httpClient= inject(HttpClient);
  constructor() { }

  getAllEventItems(){
    return this.httpClient.get<Event[]>("https://localhost:7189/api/Event/GetAll")

  };

  getByID(id:number){
    return this.httpClient.get<Event>("http://localhost:7189/api/event/GetByID")
  };

  edit(item:Event){


  }
}
