import { Component } from '@angular/core';

import { TaskListPage } from '../task-list/task-list';
import { TaskCreatePage } from '../task-create/task-create';
 

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page


  tab1Root: any = TaskCreatePage;
  tab2Root: any = TaskListPage;
  tabsPlacement = 'top'; // tab placement 

  constructor() {

  }
}
