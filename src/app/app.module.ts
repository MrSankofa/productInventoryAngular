import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { ProductListComponent } from "./products/productsList.component";
import { StarComponent } from "./shared/star.component";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [AppComponent, ProductListComponent, StarComponent],
  imports: [BrowserModule, FormsModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
