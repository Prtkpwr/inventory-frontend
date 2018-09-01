import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.css']
})
export class AddProductsComponent implements OnInit {

  constructor(private appService: HttpService, private _route: ActivatedRoute, private route: Router) { }
  public product: any;
  public quantity: any;
  ngOnInit() {
  }
  public createProduct: any = () => {
    let data = {
      "product" : this.product,
      "quantity": this.quantity
    }
      this.appService.createProduct(data).subscribe(
        (apiResponse) => {
        console.log('apiResponse', apiResponse)
        this.product = '';
        this.quantity = null
        
        }, 
        (error) => {
          console.log(error)

        })
    }

}
