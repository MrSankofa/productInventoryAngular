import { Component } from "@angular/core";
import IProduct from "./IProduct";

@Component({
  selector: "pm-product-list",
  templateUrl: "./productsList.component.html",
  styleUrls: ["./productList.component.css"]
})
export class ProductListComponent {
  products: IProduct[] = [
    {
      productId: 5,
      productName: "Hammer",
      productCode: "TBX-0048",
      releaseDate: "May 21, 2019",
      description: "Curved claw steel hammer",
      price: 8.9,
      starRating: 4.8,
      imageUrl: "assets/images/hammer.png"
    },
    {
      productId: 8,
      productName: "Saw",
      productCode: "TBX-0022",
      releaseDate: "May 15, 2019",
      description: "15-inch steel blade hand saw",
      price: 11.55,
      starRating: 3.7,
      imageUrl: "assets/images/saw.png"
    },
    {
      productId: 10,
      productName: "Video Game Controller",
      productCode: "GMG-0042",
      releaseDate: "October 15, 2018",
      description: "Standard two-button video game controller",
      price: 35.95,
      starRating: 4.6,
      imageUrl: "assets/images/xbox-controller.png"
    }
  ];
  showImage = false;
  filteredProducts: IProduct[] = this.products;
  _listFilter = "";

  get listFilter(): string {
    return this._listFilter;
  }

  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredProducts = this.listFilter
      ? this.products.filter(
          (product: IProduct) =>
            product.productName.indexOf(this.listFilter) !== -1
        )
      : this.products;
  }

  toggleShowImage() {
    this.showImage = !this.showImage;
  }
}
