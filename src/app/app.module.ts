import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { ProductListComponent } from "./products/productsList.component";
import { FormsModule } from "@angular/forms";
import starComponent from "./shared/star.component";

@NgModule({
  declarations: [AppComponent, ProductListComponent, starComponent],
  imports: [BrowserModule, FormsModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
