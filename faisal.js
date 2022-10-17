import {Order} from '@shopify/shopify-api/dist/rest-resources/2021-10/index.js';
const test_session = await Shopify.Utils.loadCurrentSession(request, response);
await Order.all({
  session: test_session,
  status: "any",
});
console.log(Order)