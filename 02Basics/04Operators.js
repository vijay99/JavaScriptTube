//D = (L - s)/L * 100

var listPrice = 799;

var sellingPrice = 199;

var discount = ((listPrice - sellingPrice)/listPrice)* 100

console.log("Discount percentage is :"+discount);

var displayDiscountPercentage = Math.round(discount);

console.log(displayDiscountPercentage);

console.log(displayDiscountPercentage+" % off");