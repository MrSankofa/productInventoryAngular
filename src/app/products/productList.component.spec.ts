import { ProductListComponent } from "./productsList.component";
import { async, TestBed } from "@angular/core/testing";
import { FormsModule } from "@angular/forms";
const productsAPI = require("../../api/products/products.json");

describe("Product List Component", () => {
  let fixture;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProductListComponent],
      imports: [FormsModule]
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
    // console.log("compiled:", compiled);

    const resultFalse = compiled.querySelector("button").textContent;
    // console.log("PLComponent:", PLComponent);
    // console.log("result:", resultFalse);

    PLComponent.showImage = true;
    // console.log("PLComponent:", PLComponent);
    fixture.detectChanges(); // very necessary
    const resultTrue = compiled.querySelector("button").textContent;
    // console.log("result:", resultTrue);

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

  it("should hide table if there are no products", () => {
    const PLComponent = fixture.debugElement.componentInstance;
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;

    PLComponent.products = [];
    fixture.detectChanges();

    expect(compiled.querySelector("table")).toBeNull();
  });

  // You will need to update this test based on the products given to us from the server.
  // we want to check for bugs in our actual code
  // including the 5 star rating would make this test brittle
  // along with the price
  it("should render the list of products if given correct data (emphasis on if given)", () => {
    const PLComponent = fixture.debugElement.componentInstance;
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;

    const list = compiled.querySelector("tbody").children;
    const lenOfElements = compiled.querySelector("tbody").children.length;
    // console.log(
    //   'compiled.querySelector("tbody").children:',
    //   compiled.querySelector("tbody").children
    // );

    // console.log("list[0].innerText:", list[0].innerText);
    expect(lenOfElements).toEqual(PLComponent.products.length);
    expect(list[0].innerText).toContain("Hammer	May 21, 2019");
  });

  it("should show and hide images on button click", () => {
    const PLComponent = fixture.debugElement.componentInstance;
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    const button = compiled.querySelector("button");
    const shouldBeNull = compiled.querySelector(".productImages");

    button.click();
    fixture.detectChanges();
    const shouldBeTruthy = compiled.querySelector(".productImages");

    expect(shouldBeNull).toBeNull();
    expect(shouldBeTruthy).toBeTruthy();
  });

  it("should filter products based on search", () => {
    const PLComponent = fixture.debugElement.componentInstance;
    PLComponent.products = productsAPI;
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;

    // when the listFilter's value is am => hammer should come up
    PLComponent.listFilter = "am";
    fixture.detectChanges();
    const products = compiled.querySelector(".products");
    const children = compiled.querySelector("tbody").children;
    console.log("products:", products);
    console.log("children:", children);
    expect(children.length).toEqual(2);
    // could be more thoroughly tested if you check that it's only the hammer and video game controller
  });
});
