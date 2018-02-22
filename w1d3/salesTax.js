var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];



function calculateSalesTax(salesArray, taxObject) {
  var result = {};
  for (item in salesArray) {
    var salesData = salesArray[item].sales;
    var companyName = salesArray[item].name;
    var companyProvince = salesArray[item].province;
    if (result[companyName]) {
      //calculate the sales and add to "result"(object) under the key "item"(name) under the object with totalSales and totalTaxes
      result[companyName].totalSales += calculateTotalSales(salesData);
      result[companyName].totalTaxes += calculateTax(calculateTotalSales(salesData), (taxObject[companyProvince]));
    } else {
      // create a new key(name), along with an object that contains totalSales and totalTaxes
    result[companyName] = {totalSales: calculateTotalSales(salesData) /*calculate totalSales */ , totalTaxes: calculateTax(calculateTotalSales(salesData), taxObject[companyProvince]) /*calculate totalTaxes */ };
  }
}
return result;
}


function calculateTotalSales (array) {
  var totalSales = 0;
  for (number in array) {
    totalSales += array[number];
  }
  return totalSales;
}

function calculateTax (sales, rate) {
  return sales * rate;
}


var results = calculateSalesTax(companySalesData, salesTaxRates);
console.log(results);

