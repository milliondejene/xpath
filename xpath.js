// function resolver() {
//   return "https://www.iworkplc.com";
// }


var xpathvalue = document.evaluate(
  '//*[@id="comp-kktfmgn8"]/p/span',
  document,
  null,
  XPathResult.ANY_TYPE,
  null
);
var xpathvalue2 = document.evaluate(
  '//*[@id="comp-ks7htvty"]/p/span',
  document,
  null,
  XPathResult.ANY_TYPE,
  null
);

let lastFourDigits = xpathvalue.iterateNext().textContent.substr(-4);

console.log(lastFourDigits)

let lastFourDigits2 = xpathvalue2.iterateNext().textContent.substr(-4);

console.log(lastFourDigits2)

let officenumber= parseInt(lastFourDigits);

let mobilenumber = parseInt(lastFourDigits2);

let result = officenumber / mobilenumber;

console.log(result);


// function nsResolver(prefix) {
//     return 'https://www.iworkplc.com' || null;
//   }

//   var xpathvalue =   document.evaluate( '//*[@id="comp-kktfmgn8"]/p/span', document, nsResolver, XPathResult.ANY_TYPE );

//   console.log(xpathvalue);
