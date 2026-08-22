"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const studentName = 'Rafi';
const studentAge = 16;
const studentEmail = 'rafdi@gmail.com';
const studentName2 = 'Sadia';
const studentAge2 = 18;
const studentEmail2 = 'sadia@gmail.com';
const createStudent = (name, age, email, marks) => {
    const obj = { name, age, email, marks, forgetPass() {
        } };
    return obj;
};
const rafi = createStudent('Rafi', 16, 'rafi@gmail.com', 100);
const sadia = createStudent('Sadia', 17, 'sadia@gmail.com', 150);
rafi.marks = 0;
console.log(rafi, sadia);
// const rafi = {
//     name: 'Rafi',
//     age: 16,
//     email: 'rafdi@gmail.com'
// }
//# sourceMappingURL=object.js.map