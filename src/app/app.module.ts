import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { StoreModule } from "@ngrx/store";
import { collectionReducer } from "./store/reducers/collection.reducer";
import { booksReducer } from "./store/reducers/books.reducer";
import { BookListComponent } from "./book-list/book-list.component";
import { BookCollectionComponent } from "./book-collection/book-collection.component";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import {
  routerReducer,
  RouterState,
  StoreRouterConnectingModule
} from "@ngrx/router-store";
import { CustomSerializer } from "./store/custom-serializer";
import { AddressComponent } from "./address/address.component";
import { HomeComponent } from "./home/home.component";
import { routesReducer } from "./store/reducers/routes.reducer";

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    BookCollectionComponent,
    AddressComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({
      books: booksReducer,
      collection: collectionReducer,
      router: routerReducer,
      routes: routesReducer
    }),
    HttpClientModule,
    StoreDevtoolsModule.instrument({}),
    StoreRouterConnectingModule.forRoot({
      serializer: CustomSerializer
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
