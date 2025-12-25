type TFormatValueIO = string | number | boolean;
const formatValue = (inputVal: TFormatValueIO): TFormatValueIO => {
  if (typeof inputVal === "string") {
    return inputVal.toUpperCase();
  }
  if (typeof inputVal === "number") {
    return inputVal * 10;
  }
  if (typeof inputVal === "boolean") {
    return !inputVal;
  }
  throw new Error("Invalid Argument Type in formatValue!");
};
const getLength = (inputVal: string | Array<any>): number => {
  if (typeof inputVal === "string" || Array.isArray(inputVal)) {
    return inputVal.length;
  }
  throw new Error("Invalid Argument Type in getLength!");
};

class Person {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  getDetails() {
    return `Name: ${this.name}, Age: ${this.age}`;
  }
}
type TRatingObj = {
  title: string;
  rating: number;
};
const filterByRating = (ratings: Array<TRatingObj>): Array<TRatingObj> => {
  const filteredRatings: Array<TRatingObj> = [];

  ratings.forEach((ratingObj: TRatingObj) => {
    if (ratingObj.rating < 0 || ratingObj.rating > 5) {
      throw new Error("Invalid argument in filterByRating!");
    }
    if (ratingObj.rating > 4) {
      filteredRatings.push(ratingObj);
    }
  });
  return filteredRatings;
};

interface User {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
}

const filterActiveUsers = (users: Array<User>): Array<User> => {
  return users.filter((user) => user.isActive);
};

interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}

const printBookDetails = (book: Book): void => {
  const { title, author, publishedYear, isAvailable } = book;
  console.log(
    `Title: ${title}, Author: ${author}, Published: ${publishedYear}, Available: ${
      isAvailable ? "Yes" : "No"
    }`
  );
};

const getUniqueValues = (
  arr1: Array<number | string>,
  arr2: Array<number | string>
): Array<number | string> => {
  const hashMap: Record<string, number> = {};
  const uniqueValues: Array<number | string> = [];

  arr1.concat(arr2).forEach((elem) => {
    if (!(elem.toString() in hashMap)) {
      hashMap[elem.toString()] = 1;
      uniqueValues.push(elem);
    }
  });
  return uniqueValues;
};

interface Product {
  name: string;
  price: number;
  quantity: number;
  discount?: number;
}
const calculateTotalPrice = (products: Array<Product>): number => {
  let totalPrice = 0;
  products.forEach((product) => {
    const { price, discount, quantity } = product;
    if (discount) {
      if (0 <= discount && discount <= 100) {
        const totalDiscount = price * discount * 0.01 * quantity;
        totalPrice += price * quantity - totalDiscount;
      } else {
        throw new Error(`Invalid discount on ${product.name}`);
      }
    } else {
      totalPrice += price * quantity;
    }
  });
  return totalPrice;
};
