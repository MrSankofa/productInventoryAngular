import { ProductListComponent } from "./productsList.component";
describe("Product List Component", () => {
  it("should have show image property", () => {
    const component = new ProductListComponent();
    console.log("component:", component.showImage);
    expect(component.showImage).toBeDefined();
  });
});
