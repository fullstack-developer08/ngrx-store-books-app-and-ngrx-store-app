import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { GoogleBooksService } from '../services/books.service';
import {
  addBook,
  removeBook,
  retrievedBookList,
} from '../store/actions/books.actions';
import { addRoute } from '../store/actions/routes.actions';
import {
  selectBookCollection,
  selectBooks,
} from '../store/selectors/books.selectors';
import { routerStore } from '../store/selectors/routes.selectors';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  books$ = this.store.select(selectBooks);
  bookCollection$ = this.store.select(selectBookCollection);
  routerStore$ = this.store.select(routerStore);

  onAdd(bookId: string) {
    this.store.dispatch(addBook({ bookId }));
  }

  onRemove(bookId: string) {
    this.store.dispatch(removeBook({ bookId }));
  }

  constructor(private booksService: GoogleBooksService, private store: Store) {}

  ngOnInit() {
    this.booksService
      .getBooks()
      .subscribe((books) => this.store.dispatch(retrievedBookList({ books })));

    this.routerStore$.subscribe((data) => [
      this.store.dispatch(addRoute({ obj: data })),
    ]);
  }
}
