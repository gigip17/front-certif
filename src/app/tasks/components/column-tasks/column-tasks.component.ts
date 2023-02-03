import { Component, OnInit, Input } from '@angular/core';
import { Task } from 'src/app/core/models/task';

@Component({
  selector: 'app-column-tasks',
  templateUrl: './column-tasks.component.html',
  styleUrls: ['./column-tasks.component.scss'],
})
export class ColumnTasksComponent implements OnInit {
  @Input() collection!: Task[];
  @Input() title!: string;
  public filted!: Task[];

  constructor() {
    // console.log(this.collection);
  }

  ngOnInit(): void {
    console.log(this.title);
    this.filted = this.collection.filter(
      (collection) => collection.state === this.title
    );
    console.log(this.filted);
  }
}
