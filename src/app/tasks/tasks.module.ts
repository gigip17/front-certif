import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TasksRoutingModule } from './tasks-routing.module';
import { PageListTasksComponent } from './pages/page-list-tasks/page-list-tasks.component';
import { PageAddTaskComponent } from './pages/page-add-task/page-add-task.component';
import { PageEditTaskComponent } from './pages/page-edit-task/page-edit-task.component';
import { FormComponent } from './form/form.component';
import { FormTaskComponent } from './components/form-task/form-task.component';


@NgModule({
  declarations: [
    PageListTasksComponent,
    PageAddTaskComponent,
    PageEditTaskComponent,
    FormComponent,
    FormTaskComponent
  ],
  imports: [
    CommonModule,
    TasksRoutingModule
  ]
})
export class TasksModule { }
