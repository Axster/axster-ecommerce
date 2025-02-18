const today = new Date();
const standardDelivery = new Date(today);
standardDelivery.setDate(today.getDate() + 4);
const standardDeliveryEnd = new Date(
  standardDelivery
);

standardDeliveryEnd.setDate(
  standardDelivery.getDate() + 1
);

export { standardDelivery, standardDeliveryEnd };
