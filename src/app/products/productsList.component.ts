import { Component, OnInit } from "@angular/core";
import IProduct from "../shared/IProduct";

@Component({
  selector: "pm-product-list",
  templateUrl: "./productsList.component.html"
})
export class ProductListComponent implements OnInit {
  products: IProduct[];

  ngOnInit() {
    console.log("test");
  }
}
