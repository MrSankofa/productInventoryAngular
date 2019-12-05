import { IProductData } from "./IProductData";
import {
  Component,
  OnChanges,
  Input,
  Output,
  EventEmitter
} from "@angular/core";

@Component({
  selector: "pm-star",
  templateUrl: "./star.component.html",
  styleUrls: ["./star.component.css"]
})
export class StarComponent implements OnChanges {
  @Input() rating: number;
  @Input() productClicked: string;
  starWidth: number;

  @Output() notify: EventEmitter<IProductData> = new EventEmitter<
    IProductData
  >();

  ngOnChanges(): void {
    this.starWidth = (this.rating / 5) * 75;
  }

  onClick() {
    this.notify.emit({ productName: this.productClicked, starRating: 3 });
  }
}
