import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {

  constructor(private appService: HttpService, private _route: ActivatedRoute, private route: Router) { }

  public data:any = [];
  public quantity:number;

  ngOnInit() {
    this.getAllProducts();
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

  public deleteProduct:any = (product_id) => {
    let data = {
      "id":product_id
    }
    this.appService.deleteProduct(data).subscribe(
      (apiResponse) => {
        console.log("Delete Success")
        this.ngOnInit()
      }, 
      (error) => {
        console.log(error)

      })
  }

  public addProduct: any = (product_id,quantity) => {
    let data = {
      "id":product_id,
      "quantity": quantity + 1
    }
    console.log(data)
      this.appService.editProduct(data).subscribe(
        (apiResponse) => {
        console.log('apiResponse', apiResponse)
        this.quantity = null
        this.ngOnInit()
        
        }, 
        (error) => {
          console.log(error)

        })
    }

 
}
