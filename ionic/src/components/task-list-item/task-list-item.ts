import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'task-list-item',
  templateUrl: 'task-list-item.html'
})
export class TaskListItem {
    @Input() task; 
    @Output() updated = new EventEmitter();

    constructor() { 
        console.log("TaskListItem");

    }
}