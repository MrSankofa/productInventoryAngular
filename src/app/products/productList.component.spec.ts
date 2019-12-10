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
    console.log("compiled:", compiled);

    const resultFalse = compiled.querySelector("button").textContent;
    console.log("PLComponent:", PLComponent);
    console.log("result:", resultFalse);

    PLComponent.showImage = true;
    console.log("PLComponent:", PLComponent);
    fixture.detectChanges(); // very necessary
    const resultTrue = compiled.querySelector("button").textContent;
    console.log("result:", resultTrue);

    expect(resultFalse).toContain("Show Image");
    expect(resultTrue).toContain("Hide Image");
  });

  it("should toggle showImage value on button click", () => {
    const PLComponent = fixture.debugElement.componentInstance;
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    compiled.querySelector("button").click();
    fixture.detectChanges();
    expect(PLComponent.showImage).toEqual(true);
  });
});
