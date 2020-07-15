import Client from "shopify-buy";

export const INITIAL_CLIENT = "INITIAL_CLIENT";
export const CREATE_CHECKOUT = "CREATE_CHECKOUT";
export const UPDATE_CHECKOUT = "UPDATE_CHECKOUT";

const createShopifyClientSuccess = client => ({
  type: INITIAL_CLIENT,
  payload: client,
});

export const createShopifyClient = () => {
  return dispatch => {
    const client = Client.buildClient({
      storefrontAccessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      domain: `${process.env.SHOP_NAME}.myshopify.com`,
    });

    console.log(client);

    dispatch(createShopifyClientSuccess(client));
  };
};
