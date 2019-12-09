import { Component } from "@angular/core";
import IProduct from "./IProduct";

import ProductService from "./product.service";

@Component({
  templateUrl: "./productsList.component.html",
  selector: "pm-product-list"
})
export class ProductListComponent {
  // private _productService;
  // constructor(productService: ProductService) {
  //   this._productService = productService;
  // }

  products: IProduct[] = [
    {
      productId: 1,
      productName: "Leaf Rake",
      productCode: "GDN-0011",
      releaseDate: "March 19, 2019",
      description: "Leaf rake with 48-inch wooden handle.",
      price: 19.95,
      starRating: 3.2,
      imageUrl: "assets/images/leaf_rake.png"
    },
    {
      productId: 2,
      productName: "Garden Cart",
      productCode: "GDN-0023",
      releaseDate: "March 18, 2019",
      description: "15 gallon capacity rolling garden cart",
      price: 32.99,
      starRating: 4.2,
      imageUrl: "assets/images/garden_cart.png"
    },
    {
      productId: 5,
      productName: "Hammer",
      productCode: "TBX-0048",
      releaseDate: "May 21, 2019",
      description: "Curved claw steel hammer",
      price: 8.9,
      starRating: 4.8,
      imageUrl: "assets/images/hammer.png"
    }
  ];

  showImage: boolean = false;
  _listFilter: string = "";
  filteredProducts: IProduct[] = this.products;

  get listFilter(): string {
    return this._listFilter;
  }

  set listFilter(value: string) {
    value = value.toLocaleLowerCase();
    this._listFilter = value;
    this.filteredProducts = this.listFilter
      ? this.products.filter(
          (product: IProduct) =>
            product.productName.toLocaleLowerCase().indexOf(value) !== -1
        )
      : this.products;
  }

  toggleImage() {
    this.showImage = !this.showImage;
  }

  // ngOnInit() {
  //   this._productService.getProducts().subscribe({
  //     next: products => {
  //       this.products = products;
  //       this.filteredProducts = this.products;
  //     },
  //     error: err => (this.errorMessage = err)
  //   });
    // this.products = this._productService.getProducts();
  // }
}
