import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

//router module used for setting up the application level route
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from "@angular/common/http";
import { HttpService } from './services/http.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InventoryComponent } from './inventory/inventory.component';
import { AddProductsComponent } from './add-products/add-products.component';
import { BuyProductComponent } from './buy-product/buy-product.component';


@NgModule({
  declarations: [
    AppComponent,
    InventoryComponent,
    AddProductsComponent,
    BuyProductComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'inventory', component: InventoryComponent },
      { path: 'buy_product', component: BuyProductComponent },
      { path: 'add_product', component: AddProductsComponent },
      { path: '', redirectTo: 'inventory', pathMatch: 'full'},
      { path: '**', redirectTo: 'inventory', pathMatch: 'full'},
    ])
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
