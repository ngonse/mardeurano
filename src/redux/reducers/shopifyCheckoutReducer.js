import { INITIAL_CLIENT } from "../actions/shopifyCheckoutAction";

const initState = {
  client: {},
  checkout: {},
};

const shopifyCheckoutReducer = (state = initState, action) => {
  console.log(action.payload);

  if (action.type === INITIAL_CLIENT) {
    return {
      ...state,
      client: action.payload,
    };
  }

  return state;
};

export default shopifyCheckoutReducer;
