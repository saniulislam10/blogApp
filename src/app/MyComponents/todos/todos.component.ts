import { Component, OnInit } from '@angular/core';
import { Todo } from "../../Todo";
import { GetApiService } from '../../Service/get-api.service'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos: Todo[];
  // blogsModelObj: Todo = new Todo();
  constructor(
    private api: GetApiService,
    private http: HttpClient
  ) {

  }

  ngOnInit() {
    this.get();
  }

  get(){
    this.api.getApi()
    .subscribe(res => {
      this.todos= res.data;
    })
  }

  delete(todo: Todo) {
    const index = this.todos.indexOf(todo);
    this.api.deleteApi(this.todos[index]._id)
    .subscribe(res => {
      this.get();
    })
  }
  add(todo: Todo) {
    console.log(todo);
    this.api.postApi(todo).subscribe( res => {
      this.get();
    }
    );
  }
  edit(todo: Todo) {
    const index = this.todos.indexOf(todo);
    this.todos[index].active = !this.todos[index].active;
  }
  update( todo: Todo ){
    console.log(todo);
    this.api.updateApi(todo)
    .subscribe(res => {
      this.get();
    })
  }

}
