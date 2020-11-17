import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export  class TodosService{
/*https://www.youtube.com/watch?v=YN8zNnV0sK8
* https://jsonplaceholder.typicode.com/todos/1
* https://jsonplaceholder.typicode.com/guide/
* */
  public todos: Todo[] = [  ];

  constructor(private http: HttpClient) {}

  fetchTodos(): Observable<Todo[]>{
  return   this.http.get<Todo[]>('https://jsonplaceholder.typicode.com/todos?_limit=5')
    .pipe(tap(todos => this.todos = todos));
  }

  onToggle(id: number) {
    const idx = this.todos.findIndex(s => id === s.id);
    this.todos[idx].completed = !this.todos[idx].completed;
  }
  delete(id: number){
    this.todos = this.todos.filter(t => t.id !== id);
  }

  addTodo(todo: Todo){
    this.todos.push(todo);
  }

}
export interface Todo {
  id: number;
  title: string;
  completed: boolean;
  date: any;
}
