const obj = {
  name: "철수",
  age: 12,
  school: {
    name: "다람쥐 초등학교",
  },
};
// dot notation
obj.name; // "철수"
obj.age; // 12
obj.school; // { name : "다람쥐 초등학교" }

// bracket notation
let name = "age";
obj[name]; // 12
obj["name"]; // "철수"
obj["age"]; // 12

const student = {};
student;
student.name = "철수";
student;
student.name;
student["name"];
