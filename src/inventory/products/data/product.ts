export class Product {
  id: number;
  name: string;
  price: number;
  stock: number;
  packing: string;
  description: string;
  //status?: string;

  constructor(values: Object = {}) {
	  Object.assign(this, values);
  }
}

// let product = new Product({
// 	name: 'my product',
// 	price: 234,
// 	stock: 10,
// 	packing: 'X01',
// 	description: "new product description"
// });
