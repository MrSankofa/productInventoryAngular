import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "pm-star",
  templateUrl: "./star.component.html",
  styleUrls: ["./star.component.css"]
})
export class StarComponent {
  _starWidth: number;
  _rating: number;
  @Input() productName: string;

  get starWidth(): number {
    return (this._rating / 5) * 75;
  }

  get rating(): number {
    return this._rating;
  }
  @Input()
  set rating(value: number) {
    this._rating = value;
  }

  @Output() notify: EventEmitter<string> = new EventEmitter<string>();

  onClick(): void {
    console.log("clicked");
    this.notify.emit(`${this.productName} product rating is ${this.rating}`);
  }
}
