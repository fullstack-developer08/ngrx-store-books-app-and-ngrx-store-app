import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { GoogleBooksService } from './services/books.service';
import {
  addBook,
  removeBook,
  retrievedBookList,
} from './store/actions/books.actions';
import { Book } from './store/models/books.model';
import {
  selectBookCollection,
  selectBooks,
} from './store/selectors/books.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {}
