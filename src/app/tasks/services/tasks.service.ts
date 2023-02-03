import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  private collection$!: Observable<Task[]>;

  constructor(private http: HttpClient) {
    this.collection = this.http.get<Task[]>('http://localhost:3000/tasks');
  }

  //setter
  public set collection(col: Observable<Task[]>) {
    this.collection$ = col;
  }

  //getter
  public get collection() : Observable<Task[]> {
    return this.collection$;
  }
}
