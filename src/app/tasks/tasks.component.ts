import { Component } from '@angular/core';
import { TaskService } from '../task.service';
import { Task } from 'src/model/task.model';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {

  tasks: Task[];

  constructor(private taskService: TaskService){
    this.tasks = taskService.getTasks(); 
  }

  

}
