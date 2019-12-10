import { Component } from "@angular/core";

@Component({
  selector: "pm-product-list",
  templateUrl: "./productsList.component.html"
})
export class ProductListComponent {
  showImage = false;

  toggleShowImage() {
    this.showImage = !this.showImage;
  }
}
