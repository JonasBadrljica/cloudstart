import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Todo } from './todo';

@Injectable({
  providedIn: 'root'
})
export class FetcherService {

  endpoint: string = "http://localhost:8080/todo";

  httpHeader = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  
  constructor(private httpClient: HttpClient) { }

  get(id: string) {
    return this.httpClient.get<Todo>(this.endpoint + "/" + "id", this.httpHeader)
  }

  post(todo: Todo) {
    return this.httpClient.post<any>(this.endpoint, JSON.stringify(todo), this.httpHeader)
  }

  getAll() {
    return this.httpClient.get<Todo[]>(this.endpoint, this.httpHeader)
  }

  delete(id: string) {
    return this.httpClient.delete<any>(this.endpoint + "/" + "id", this.httpHeader)
  }

  put(todo: Todo) {
    return this.httpClient.post<any>(this.endpoint + "/" + "id", JSON.stringify(todo), this.httpHeader)
  }
}