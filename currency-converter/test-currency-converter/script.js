import { convertCurrency } from "cm-currency-converter";

convertCurrency("USD", "INR", 5).then(res=> console.log(res));