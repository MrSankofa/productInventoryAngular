import { Component, OnInit } from "@angular/core";
import IProduct from "../shared/IProduct";
import ProductService from "./product.service";

@Component({
  selector: "pm-product-list",
  templateUrl: "./productsList.component.html"
})
export class ProductListComponent implements OnInit {
  private _productService;
  constructor(productService: ProductService) {
    this._productService = productService;
  }

  products: IProduct[] = [];
  showImage: boolean = false;
  _listFilter: string = "";
  filteredProducts: IProduct[];
  showRating: string;

  get listFilter(): string {
    return this._listFilter;
  }

  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredProducts = this.listFilter
      ? this.performFilter(this.listFilter)
      : this.products;
  }

  performFilter(term: string): IProduct[] {
    term = term.toLocaleLowerCase();
    return this.products.filter(
      (product: IProduct) =>
        product.productName.toLocaleLowerCase().indexOf(term) !== -1
    );
  }
  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  onNotify(message: string) {
    this.showRating = message;
  }

  ngOnInit() {
    this.products = this._productService.getProducts();
    this.filteredProducts = this.products;
  }
}
