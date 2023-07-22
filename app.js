"use strict";

// 1. დაწერეთ for ციკლი, 0 დან 50 - მდე console.log ში დაბეჭდეთ ინდექსი i
for (let i = 0; i < 50; i++) {
	console.log(i);
}
// 2. დაწერეთ while ციკლი 0 დან 20 - მდე console.log ში დაბეჭდეთ ინდექსი i
let i = 0;
while (i < 20) {
	console.log(i);
	i++;
}

// 3. დაწერეთ do while ციკლი 0 დან 30 - მდე console.log ში დაბეჭდეთ ინდექსი i
i = 0;
do {
	console.log(i);
	i++;
} while (i < 30);

// 4. მოცემული გვაქვს მასივი const numbers = [1,2,5,7,8,10,23,24,26]. for ლუპის დახმარებით შეამოწმეთ მასივის ყველა ელემენტი და  კონსოლში გამოიტანეთ ამ მასივიდან მხოლოდ ლუწი რიცხვები.
const numbers = [1, 2, 5, 7, 8, 10, 23, 24, 26];
for (let index = 0; index < numbers.length; index++) {
	const element = numbers[index];
	if (element % 2 === 0) {
		console.log(element);
	}
}

// 5. გამოიყენეთ const currentDay = new Date().getDay(); ცვლადი;   currentDay ცვლადი გვაძლევს რეალურ კვირის დღეს რიცხვითი სახით 0 - არის კვირა, 1 - არის ორშაბათი და ასე შემდეგ.( 0 - 6 ამდე რიცხვს აბრუნებს სადაც 6 არის შაბათი, ყოველდღე სხვადასხვა მნიშვნელობას დაგიბრუნებთ) , დავწეროთ switch სადაც შევამოწმებთ currentDay-ს და 0 ის შემთხვევაში console.log ში გამოვიტანთ სიტყვას - კვირა, 1 ის შემთხვევაში - ორშაბათს და ასე შემდეგ 6 - შაბათი.
const currentDay = new Date().getDay();
let dayName = "";
console.log(currentDay);

switch (currentDay) {
	case 0:
		dayName = "კვირა";
		break;
	case 1:
		dayName = "ორშ";
		break;
	case 2:
		dayName = "სამ";
		break;
	case 3:
		dayName = "ოთხ";
		break;
	case 4:
		dayName = "ხუთ";
		break;
	case 5:
		dayName = "პარ";
		break;
	case 6:
		dayName = "შაბ";
		break;
	default:
		dayName = "error";
		break;
}

let dayNames = ["kvira", "orsh", "sam", "otxhs", "xutsh", "par", "shab"];
console.log(dayNames[currentDay]);
console.log(dayName);

// scopes
// block
if (true) {
	let i = 10;
	var num1 = 1000;
	// console.log(num1);
}
// console.log(num1);

// function
let num6 = 20;
function fnName() {
	"use strict";
	var num2 = 4234324;
	console.log(num2);
}

// num5 = 132131;
// console.log(num2);

// global
let numNew = "text";

for (let numNew = 0; numNew < 10; numNew++) {}
// console.log(numNew);

// functions
function writeHello() {
	console.log("hello");

	switch (currentDay) {
		case 0:
			dayName = "კვირა";
			break;
		case 1:
			dayName = "ორშ";
			break;
		case 2:
			dayName = "სამ";
			break;
		case 3:
			dayName = "ოთხ";
			break;
		case 4:
			dayName = "ხუთ";
			break;
		case 5:
			dayName = "პარ";
			break;
		case 6:
			dayName = "შაბ";
			break;
		default:
			dayName = "error";
			break;
	}
}

writeHello();
writeHello();
writeHello();
writeHello();

// params

const userName = 12435;
const age = 26;

function writeHelloToUser(name, age) {
	console.log("hello, ", name);
}

writeHelloToUser("nika");

writeHelloToUser("oto", 30);

writeHelloToUser("alina");

// return

function sum(q, price) {
	const c = q * price;
	return c;
}

const sum1 = sum(10, 25);
const sum2 = sum(4, 15);
const sum3 = sum(2, 100);

console.log(sum1, sum2, sum3);
const newSum = sum;
// arrow

const sumFn = function (q, price) {
	const c = q * price;
	return c;
};

console.log(sumFn(10, 2));

const sumArrow = (q, price) => {
	const c = q * price;
	return c;
};

console.log(sumArrow(10, 2));

// array methods/functions

const countries = [
	{
		name: "Georgia",
		currencies: {
			GEL: {
				name: "lari",
				symbol: "₾",
			},
		},
		capital: ["Tbilisi", "Tbilisi"],
		flag: "https://flagcdn.com/w320/ge.png",
		map: "https://goo.gl/maps/bvCaGBePR1ZEDK5cA",
	},
	{
		name: "Federal Republic of Germany",
		currencies: {
			EUR: {
				name: "Euro",
				symbol: "€",
			},
		},
		capital: ["Berlin"],
		flag: "https://flagcdn.com/w320/de.png",
		map: "https://goo.gl/maps/mD9FBMq1nvXUBrkv6",
	},
	{
		name: "Ukraine",
		currencies: {
			UAH: {
				name: "Ukrainian hryvnia",
				symbol: "₴",
			},
		},
		capital: ["Kyiv", "Kyiv"],
		flag: "https://flagcdn.com/w320/ua.png",
		map: "https://goo.gl/maps/DvgJMiPJ7aozKFZv7",
	},
	{
		name: "United Kingdom of Great Britain and Northern Ireland",
		currencies: {
			GBP: {
				name: "British pound",
				symbol: "£",
			},
		},
		capital: ["London"],
		flag: "https://flagcdn.com/w320/gb.png",
		map: "https://goo.gl/maps/FoDtc3UKMkFsXAjHA",
	},
];

// foreach

const fnForForEach = (country, index, arr) => {
	console.log(country.name);
};

// countries.forEach(fnForForEach);
countries.forEach((country) => {
	console.log(country.name);
});

// filter
const foteredCountries = countries.filter((country, index, arr) => {
	return country.capital.length === 1;
});

console.log(foteredCountries);

// find
const georgia = countries.find((country) => {
	return country.name === "Georgia";
});
console.log(georgia);

// some
const someElements = countries.some((country, index, arr) => {
	return country.capital.length === 1;
});

console.log(someElements);

// every
const everyElements = countries.every((country, index, arr) => {
	return country.capital.length === 1;
});

console.log(everyElements);

// map

const countryNames = countries.map((el, index, arr) => {
	return { countryName: "country name is " + el.name };
});

console.log(countryNames);

const arrayOfNums = [10, 20, 30, 40];
// includes

// console.log(arrayOfNums.includes(20));

// sort

const currencies = [
	{
		code: "AMD",
		quantity: 1000,
		rateFormated: "6.6742",
		diffFormated: "0.0202",
		rate: 6.6742,
		name: "სომხური დრამი",
		diff: 0.0202,
		date: "2023-07-21T17:45:10.772Z",
		validFromDate: "2023-07-22T00:00:00.000Z",
	},
	{
		code: "EUR",
		quantity: 1,
		rateFormated: "2.8673",
		diffFormated: "0.0131",
		rate: 2.8673,
		name: "ევრო",
		diff: -0.0131,
		date: "2023-07-21T17:45:10.772Z",
		validFromDate: "2023-07-22T00:00:00.000Z",
	},
	{
		code: "GBP",
		quantity: 1,
		rateFormated: "3.3111",
		diffFormated: "0.0046",
		rate: 3.3111,
		name: "დიდი ბრიტანეთის გირვანქა სტერლინგი",
		diff: -0.0046,
		date: "2023-07-21T17:45:10.772Z",
		validFromDate: "2023-07-22T00:00:00.000Z",
	},
	{
		code: "TRY",
		quantity: 1,
		rateFormated: "0.0957",
		diffFormated: "0.0003",
		rate: 0.0957,
		name: "თურქული ლირა",
		diff: 0.0003,
		date: "2023-07-21T17:45:10.772Z",
		validFromDate: "2023-07-22T00:00:00.000Z",
	},

	{
		code: "USD",
		quantity: 1,
		rateFormated: "2.5771",
		diffFormated: "0.0078",
		rate: 2.5771,
		name: "აშშ დოლარი",
		diff: 0.0078,
		date: "2023-07-21T17:45:10.772Z",
		validFromDate: "2023-07-22T00:00:00.000Z",
	},
];
