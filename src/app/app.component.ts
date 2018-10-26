import { Component, OnInit } from '@angular/core';
import { CustomerService } from './customer.service';
import { LocalStorageService } from 'ngx-webstorage';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    
  constructor(public customerService: CustomerService, private localSt: LocalStorageService) {
  }

  ngOnInit() {
    this.showComments(this.tasks[0]);
  };

    public tasks =  this.customerService.taskList;

    public inputText: string;

    public index = 1;

    public comments: Array<string>;

    public newTask = {name: this.inputText, comments: []};

    public addTask() { 
      //let newTask = {name: this.inputText, comments: []};
      this.tasks.push(this.newTask);
    }

    public deleteTask(item) {
      let index = this.tasks.indexOf(item);
      if (index > -1) {
        this.tasks.splice(index, 1);
      }
    }

  public showComments(item) {
    this.index = this.tasks.indexOf(item) + 1;
    this.comments = this.tasks[this.tasks.indexOf(item)].comments;
  }
  
  //  public getLocalStorage() {
  //   let localStorageItem = JSON.parse(localStorage.getItem("newTask"));
  //  }
}

