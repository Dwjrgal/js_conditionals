// ------------  JS function & object assignment ---------------//

// Daalgavar-1 Ogogdson 2 toonii ihiig oloh function bich

function ihToo(x, y) {
  if (x > y) {
    return x;
  } else {
    return y;
  }
}
let largestNum = ihToo(10, 12);
console.log("Hamgiin ih too:", largestNum);

// Daalgavar-2  Ogogdson array - s ogogdson too baigaa esehiig ol

let array = [10, 20, 30];
let num = 10;

function findIndex(array, num) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === num) {
      return i;
    }
  }
  return -1;
}
console.log("Ogogdson too:", num);

let idx = findIndex(array, 10);

// Daalgavar-3 Ogogdson temdegt moroos ogogdson temdegt mor baigaa esehiig ol

let arraySign = ["Hello"];

function arSign(arsign, sign) {
  for (let i = 0; i < arSign.length; i++) {
    if (arSign[i] === sign) {
      return i;
    }
  }
  return -1;
}

// let signx = arSign(arraySign, H);
// console.log ("index :",signx);

// Daalgavar-4 Array iin dundajiig oloh /function bich

function findAverage(numbers, sum) {
  let average = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum = sum + numbers[i];
  }
  console.log("average :", sum / numbers.length);
  //   return (average = sum / numbers.length);
  //   console.log("average", average);
}

let sum = 0;
let arrayNum = [12, 23, 52, 15];
console.log(findAverage(arrayNum, sum));

// Daalgavar -5 array dotorh niilber oloh

function sumArray(sumNum) {
  let nom = 0;
  for (let i = 0; i < sumNum.length; i++) {
    sumn = sumn + sumNum[i];
  }
  console.log("sum:", sumn);
}
let sumn = 0;
let sumNum = [23, 42, 11, 80];
console.log(sumArray(sumNum, sumn));

// Daalgavar -6  Өгөгдсөн тоо анхны эсэхийг олох функц бич.

function anhniiToo(x) {
  if (x <= 1) return false;
  if (x === 2) return true;

  for (let i = 3; i * i < x; i += 2) {
    if (x % i === 0) return false;
  }
  return true;
}

console.log("Anhnii too mon eseh:", anhniiToo(2));

// Daalgavar -7

// Daalgavar-8 string utgiig urvuugaar bich

// function reverseString(arr) {
//   let reversed = ["Hello"];
//   for (let i = arr.lenght - 1; i >= 0; i--) {
//     reversed.push(arr[i]);
//   }
//   return reversed;
// }

// let rev = reverseString(arr);
// console.log("reversed:", rev);

// let string = ["Hello"];

// let reversedString = string.slice(string).reverse(string);
// console.log(reversedString);

// for (let i = 0; i < string.length; i++) {}

let students = [
  {
    name: "Сэд-Эрдэнэ",

    age: 19,

    gender: "male",

    points: 70,
  },

  {
    name: "Индра",

    age: 19,

    gender: "female",

    points: 50,
  },

  {
    name: "Хатнаа ",

    age: 21,

    gender: "male",

    points: 99,
  },

  {
    name: "Тэмүүлэн",

    age: 23,

    gender: "male",

    points: 55,
  },

  {
    name: "Намуун",

    age: 23,

    gender: "female",

    points: 85,
  },
];

//  AVERAGE AGE OLOKH ;

function averageAge() {
  let sam = 0;
  let som = 0;
  for (let i = 0; i < students.length; i++) {
    sam++;
    som = som + students[i].age;
  }
  let avg = som / sam;
  return avg;
}

let result = averageAge(students);
console.log("Average age:", result);

//  Daalgavar-9/1 ehnii objectiig hevlej garga

console.log(students[0]);

// ANGID HEDEN EREGTEI EMEGTEI SURAGCH BAIGAAG OL

// function findGen() {
//   for (let i = 0; i < students.length; i++) {
//     if (students[i].gender === male) {
//       return male;
//     } else students[i].gender === female;
//     return female;
//   }
// }

// let gender = findGen();
// console.log("Eregtei emegtei too:", gender);

// Нас нь 21-ээс дээш буюу тэнцүү сурагчдыг ол =>

function age21() {
  let sum = "";
  for (let i = 0; i < students.length; i++) {
    if (students[i].age >= 21) {
      // ages.push(students[i].age);
      sum += " " + students[i].age;
    }
  }
  return sum;
}

let ages = age21();
console.log("21-s deesh nastai :", ages);

// 60-аас дээш оноо авсан cурагчдийг тоол =>

let sim;

function more60() {
  for (let i = 0; i < students.length; i++) {
    sim = sim + students[i].points;
    if (students[i].points > 60) {
      onoo = onoo + students[i].points;
    }
  }
}
let onoo = 0;

let onootoi = more60();
console.log("60s deesh onootoi:", onoo);

// -------------JS EXTRA-ASSIGNMENTS --------//

// Daalgavar-1 MAX ,MIN , AVG =>

function findAvgMinMax(arr) {
  let baga = arr[0];
  let ih = arr[0];
  let dundaj = 0;
  let niilber = 0;
  for (let index = 0; index < arr.length; index++) {
    if (baga > arr[index]) {
      baga = arr[index];
    }
    if (ih < arr[index]) {
      ih = arr[index];
    }
    niilber = niilber + arr[index];
  }
  dundaj = niilber / arr.length;
  return {
    min: baga,
    max: ih,
    avg: dundaj,
  };
}

let resultn = findAvgMinMax([18, 50, 12, 30, 90]);
console.log("UR DUN: ", resultn);

// -------- Daalgavar-2 ----------//

// Ogogdson zahialgiin niit borluulaltiin dun

const orders = [
  {
    orderId: 1,
    items: [
      { itemName: "Apple", price: 1 },
      { itemName: "Banana", price: 2 },
    ],
  },
  {
    orderId: 2,
    items: [
      { itemName: "Orange", price: 1.5 },
      { itemName: "Grapes", price: 3 },
    ],
  },
];



function calculateTotalPrice(orders) {  let sum = 0;

  for (let index = 0; index < orders.length; index++) {
    console.log(orders[index].items);
    for (let pIndex = 0; pIndex < orders[index].items.length; pIndex++) {  
      sum = sum + orders[index].items[pIndex].price;
    }
  }
  console.log ("SUM:", sum )
  return sum;
}

let total = calculateTotalPrice(orders);

//-------- Daalgavar-3 -------//

 // Hamgiin ih tsalintai ajiltang oloh =>

const company = {
  name: "Pinecone",
  address: "123 Silicon Valley",
  employees: [
    { name: "Naraa", salary: 90000 },
    { name: "Saraa", salary: 120000 },
    { name: "Gerlee", salary: 110000 },
  ],
};


function findMaxSalaryName(companyData) {
  let ajilchid = companyData.employees;
  let maxSalary = ajilchid[0].salary;
  let maxSalaryName = "";
  for (let i = 0; i < ajilchid.length; i++) {
    if (ajilchid[i].salary > maxSalary) {
      maxSalary = ajilchid[i].salary;
      maxSalaryName = ajilchid[i].name;
    }
  }
  return maxSalaryName;
}

let name = findMaxSalaryName(company);
console.log("Hamgiin ih tsalintai ajiltan:",name);

