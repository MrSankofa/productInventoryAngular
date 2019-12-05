import { Component, Input, OnChanges } from "@angular/core";

@Component({
  selector: "pm-star",
  templateUrl: "./star.component.html",
  styleUrls: ["./star.component.css"]
})
export default class starComponent {
  private _starWidth: number;
  private _rating: number;
  get rating(): number {
    return this._rating;
  }
  @Input()
  set rating(rating: number) {
    this._starWidth = (rating / 5) * 75;
  }
  set starWidth(value: number) {
    this._starWidth = value;
  }
  get starWidth(): number {
    return this._starWidth;
  }
}
