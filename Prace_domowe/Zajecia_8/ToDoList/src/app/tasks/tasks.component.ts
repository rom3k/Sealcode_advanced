import { Component, OnInit, NgModule } from '@angular/core';



@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})

export class TasksComponent implements OnInit {
  tasks: Array<String>
  addTask(value: any): void {
    if (this.tasks.indexOf(value) != -1) {
      alert("You can't add task that already exists.")
    }
    else if(value.trim() == '') {
      alert("You can't add an empty task.")
    }
    else {
      this.tasks.push(value);
    }
  }
  deleteTask(element: any): void {
    let i = this.tasks.indexOf(element);
    this.tasks.splice(i, 1);
  }

  constructor() { 
    this.tasks = [];
  }

  ngOnInit() {
  }
}
