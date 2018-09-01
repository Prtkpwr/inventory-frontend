import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-buy-product',
  templateUrl: './buy-product.component.html',
  styleUrls: ['./buy-product.component.css']
})
export class BuyProductComponent implements OnInit {

  constructor(private appService: HttpService, private _route: ActivatedRoute, private route: Router) { }
  public data:any = [];
  ngOnInit() {
    this.getAllProducts()
  }

  public getAllProducts: any = () => {
    this.appService.getAllProducts().subscribe(
      (apiResponse) => {
        this.data = apiResponse
        console.log('apiResponse', this.data)
      
      }, 
      (error) => {
        console.log(error)

      })
  }
}