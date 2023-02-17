import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { StateTask } from 'src/app/core/enums/state-task';
import { Task } from 'src/app/core/models/task';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  // private collection$!: Observable<Task[]>;
  private collection$: BehaviorSubject<Task[]> = new BehaviorSubject<Task[]>(
    []
  );

  constructor(private http: HttpClient) {
    this.refreshCollection();
  }

  public refreshCollection() {
    this.http.get<Task[]>('http://localhost:3000/tasks').subscribe((data) => {
      this.collection$.next(data);
    });
  }

  //getter
  public get collection(): Observable<Task[]> {
    this.refreshCollection();
    return this.collection$;
  }

  public changeState(item: Task, state: StateTask): Observable<Task> {
    const obj = new Task(item);

    obj.state = state;

    return this.update(obj);
  }

  public update(obj: Task): Observable<Task> {
    return this.http
      .put<Task>(`http://localhost:3000/tasks/${obj.id}`, obj)
      .pipe(
        tap(() => {
          this.refreshCollection();
        })
      );
  }
  public getItemById(id: number): Observable<Task> {
    return this.http.get<Task>(`http://localhost:3000/tasks/${id}`);
  }
  public add(obj: Task): Observable<Task> {
    return this.http.post<Task>('http://localhost:3000/tasks', obj);
  }

  public delete(id: Number): Observable<Task> {
    return this.http.delete<Task>(`http://localhost:3000/tasks/${id}`).pipe(
      tap(() => {
        this.refreshCollection();
      })
    );
  }
}
