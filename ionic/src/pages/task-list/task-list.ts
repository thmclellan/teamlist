import { Component,OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TaskService } from '../../services/task/task.service';

@Component({
  templateUrl: 'task-list.html'
})
export class TaskListPage implements OnInit {

  tasks = []; 

  constructor(public navCtrl: NavController, public _taskService:TaskService) {

  }
  ngOnInit() { 
    console.log("Retrieve task list");
     // validation if required 
     this.refresh(); 

  }
  refresh(refresher?:any) {  
    this._taskService.query() 
     .subscribe(
          res => { 
            console.log("Task results", res);
            this.tasks = res; 
            if (refresher) refresher.complete(); 
     
          },
          err => { 
            console.log("There was an error while querying tasks", err);
            if (refresher) refresher.complete(); 
          }
        );
  }

  ionViewDidEnter() { 
      console.log("ionViewDidEnter")
      this.refresh();

  }
}
