import { Component, Input } from "@angular/core";

@Component({
  selector: "pm-star",
  templateUrl: "./star.component.html",
  styleUrls: ["./star.component.css"]
})
export class StarComponent {
  _starWidth: number;
  _rating: number;

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
}
