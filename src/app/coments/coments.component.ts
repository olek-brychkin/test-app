import { Component, OnInit, Input } from '@angular/core';
import { CustomerService } from '../customer.service';
import { AppComponent } from '../app.component';


@Component({
  selector: 'app-coments',
  templateUrl: './coments.component.html',
  styleUrls: ['./coments.component.css']
})
export class ComentsComponent implements OnInit {

  @Input() index: number;
  
  @Input() comments: Array<string>;

  constructor( public customerService: CustomerService) {
   }

  ngOnInit() {
  }

  public inputTextComment: string;

  public submit() {
    this.customerService.taskList[this.index - 1].comments.push(this.inputTextComment);
    console.log("comments = ", this.customerService.taskList[this.index].comments);
  }

}
