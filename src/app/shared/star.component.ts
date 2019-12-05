import { Component, Input, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "pm-star",
  templateUrl: "./star.component.html",
  styleUrls: ["./star.component.css"]
})
export default class starComponent {
  private _starWidth: number;
  private _rating: number;
  @Input() productName: string;

  get rating(): number {
    return this._rating;
  }
  @Input()
  set rating(rating: number) {
    this._starWidth = (rating / 5) * 75;
    this._rating = rating;
  }
  set starWidth(value: number) {
    this._starWidth = value;
  }
  get starWidth(): number {
    return this._starWidth;
  }

  @Output() notify: EventEmitter<string> = new EventEmitter<string>();

  //   onClick(): void {
  //     this.showRating.emit(`${this.productName}'s rating is: ${this.rating}`);
  //   }

  onClick(): void {
    this.notify.emit(`${this.productName} product rating is ${this.rating}`);
  }
}
