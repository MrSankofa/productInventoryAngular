import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError, tap } from "rxjs/operators";

import IProduct from "../shared/IProduct";

@Injectable({
  providedIn: "root"
})
export default class ProductService {
  private productUrl = "../../api/products/products.json";
  private _http: HttpClient;
  constructor(http: HttpClient) {
    this._http = http;
  }
  getProducts(): Observable<IProduct[]> {
    return this._http.get<IProduct[]>(this.productUrl).pipe(
      tap(data => console.log("All: " + JSON.stringify(data))),
      catchError(this.handleError)
    );
  }
  private handleError(err: HttpErrorResponse) {
    // in a real world app, we may send the server to some remote loggin infrastructure
    // instead of just loggin it to the console

    let errorMessage = "";
    if (err.error instanceof ErrorEvent) {
      // a client-side or network error occurred.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }

    console.error(errorMessage);
    return throwError(errorMessage);
  }
}
