import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpErrorResponse, HttpParams } from "@angular/common/http"
@Injectable()

export class HttpService {
  public Url = 'http://localhost:3000/api/v1'

  constructor(private _http: HttpClient, public route: Router) { 
    console.log("HTTP service is called")
  }

    // Error Handler for HTTP
    private handleError(err: HttpErrorResponse) {
      console.log("Handle error Http calls")
      console.log(err.message);
      return Observable.throw(err.message)
    }
    
    
    public getAllProducts():any{
      return this._http.get(this.Url + '/inventory/getAllProducts')
    } 
    public createProduct(data):any{
      return this._http.post((this.Url + '/inventory/createProduct'), data)
    }
    public editProduct(data):any{
          return this._http.put((this.Url + '/inventory/editProduct'), data)
    }
    public buyProduct(data):any{
      return this._http.put((this.Url + '/inventory/buyProduct'), data)
    }
    public deleteProduct(data):any{
      return this._http.post((this.Url + '/inventory/deleteProduct'), data)
    }
}
