export const FETCH_PRODUCTS_SUCCESS = "FETCH_PRODUCTS_SUCCESS";

const fetchProductsSuccess = products => ({
  type: FETCH_PRODUCTS_SUCCESS,
  payload: products,
});

// fetch products
export const fetchProducts = products => {
  //   const productsFilter = products.map(product => {
  //     product.variants.forEach(variant => {
  //       let colors = [];
  //       let materials = [];
  //       let sizes = [];

  //       variant.selectedOptions.forEach(option => {
  //         switch (option.name) {
  //           case "Size":
  //             sizes.push(option.value);
  //             break;
  //           case "Color":
  //             colors.push(option.value);
  //             break;
  //           case "Material":
  //             materials.push(option.value);
  //             break;
  //           default:
  //             break;
  //         }
  //       });

  //       console.log({ sizes, colors, materials });
  //     });
  //   });

  // {
  // "color": "blue",
  // "image": "/assets/img/product/fashion/2.jpg",
  // "size": [
  // 	{
  // 	"name": "x",
  // 	"stock": 3
  // 	},
  // 	{
  // 	"name": "m",
  // 	"stock": 6
  // 	},
  // 	{
  // 	"name": "xl",
  // 	"stock": 7
  // 	}
  // ]
  // }

  return dispatch => {
    dispatch(fetchProductsSuccess(products));
  };
};
