const {checkAvailability} = require('./library.js');

const onFulfill = (itemsArray) => {
  console.log(`Items checked: ${itemsArray}`);
  console.log(`Every item was available from the distributor. Placing order now.`);
};

const onReject = (rejectionReason) => {
	console.log(rejectionReason);
};
let checkSunglasses=checkAvailability('sunglasses','Favorite Supply Co.');
let checkPants=checkAvailability('pants','Favorite Supply Co.');
let checkBags=checkAvailability('bags','Favorite Supply Co.');
// Write your code below:
const promiseArray = [checkSunglasses,checkPants,checkBags];
Promise.all(promiseArray).then(onFulfill).catch(onReject);

