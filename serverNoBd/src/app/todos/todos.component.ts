import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Todo} from '../app.component';
import {TodosService} from '../shared/todos.service';
import {delay} from 'rxjs/operators';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
private loading: boolean = true;

  constructor(private todosService: TodosService) {
  }

  ngOnInit(): void {
    this.todosService.fetchTodos()
      .pipe(delay(2000)).subscribe(() => this.loading = false);
  }

  onChange(id: number) {
    this.todosService.onToggle(id);

  }

  delete(id: number) {
    this.todosService.delete(id);
  }
}
