export default interface IProduct {
  productId: number;
  productName: string;
  productCode: string;
  releaseDate: string;
  description: string;
  price: number;
  starRating: number;
  imageUrl: string;
}

/**
 * "productId": 5,
    "productName": "Hammer",
    "productCode": "TBX-0048",
    "releaseDate": "May 21, 2019",
    "description": "Curved claw steel hammer",
    "price": 8.9,
    "starRating": 4.8,
    "imageUrl": "assets/images/hammer.png"
 */
