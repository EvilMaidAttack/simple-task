import { Injectable } from '@angular/core';
import { Task } from 'src/model/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  getTasks(){
    let dummyTask1 = new Task("Buy groceries");
    let dummyTask2 = new Task("Pick up car from repair shop");

    return [dummyTask1, dummyTask2];
  }

}
