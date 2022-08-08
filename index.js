const initialValue = [
  {
    id: 1,
    username: "Sahil",
    phoneNo: 1234567,
  },

  {
    id: 2,
    username: "Aditya",
    phoneNo: 345678,
  },
  {
    id: 3,
    username: "Digvijay",
    phoneNo: 2345678,
  },
];

// const remove = initialValue.filter((obj) => {
//   return obj.id !== 3;
// });
// console.log(remove);

initialValue.splice(2, 1);

console.log(initialValue);
