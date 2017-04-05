import { Component } from '@angular/core';

import { NavController, ToastController } from 'ionic-angular';
import { TaskService} from '../../services/task/task.service';

import moment from 'moment';

@Component({

  templateUrl: 'task-create.html'
})
export class TaskCreatePage {

  newTask:any = {};

  constructor(public navCtrl: NavController, public toastCtrl: ToastController, public _taskService:TaskService) {

    this.resetTask(); 

  }
  createTask() { 
    console.log("Create new task", this.newTask);
 

    // validation if required 
    this._taskService.post(this.newTask) 
     .subscribe(
          res => { 
            console.log("Task added scucessfully", res);
            this.showTaskResult('Task added successfully'); 

            this.resetTask();
          },
          err => { 
            console.log("There was an error while posting the task", err);
            this.showTaskResult('Task Creation Error'); 
          }
        );
    };
 
  resetTask() { 
      this.newTask = {}; 
      this.newTask.dueDate = moment().startOf('day').add(7, 'days').toDate().toISOString(); 
  }
  showTaskResult(message) {

     // Confirm to user 
    let toast = this.toastCtrl.create({
      message: message,
      duration: 2500, 
      position:'middle'
    });
    toast.present();
  }
  dateChanged() { 
    // todo: future validation 
    console.log("Date Changed");

  }
}
