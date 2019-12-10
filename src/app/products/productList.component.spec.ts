import { ProductListComponent } from "./productsList.component";
import { async, TestBed } from "@angular/core/testing";
describe("Product List Component", () => {
  let fixture;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProductListComponent]
    }).compileComponents();
    fixture = TestBed.createComponent(ProductListComponent);
  }));

  it("should create the Product List Component", () => {
    const PLComponent = fixture.debugElement.componentInstance;

    expect(PLComponent).toBeTruthy();
  });

  it("should intialize a showImage property with a value of false", () => {
    const PLComponent = fixture.debugElement.componentInstance;

    expect(PLComponent.showImage).toBeDefined();
    expect(PLComponent.showImage).toEqual(false);
  });

  it("should render hide Image on showImage=false and show image on showImage=true", () => {
    const PLComponent = fixture.debugElement.componentInstance;
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;

    const resultFalse = compiled.querySelector("button").textContent;
    console.log("PLComponent:", PLComponent);
    console.log("result:", resultFalse);

    PLComponent.showImage = true;
    console.log("PLComponent:", PLComponent);
    fixture.detectChanges();
    const resultTrue = compiled.querySelector("button").textContent;
    console.log("result:", resultTrue);

    expect(resultFalse).toEqual("Show Image");
    expect(resultTrue).toEqual("Hide Image");
  });
});
