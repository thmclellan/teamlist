import { Component } from '@angular/core';

import { TaskListPage } from '../task-list/task-list';
import { TaskCreatePage } from '../task-create/task-create';
import { TaskCompletePage } from '../task-complete/task-complete';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = TaskListPage;
  tab2Root: any = TaskCompletePage;
  tab3Root: any = TaskCreatePage;
  tabsPlacement = 'top'; // tab placement 

  constructor() {

  }
}
