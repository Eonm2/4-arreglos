let model = require('./student');

let students = [];

let student = {
    name: 'Erick Nolasco Machuca',
    controlNumber: '17401029',
    email: "erocnolascoma@ittepic.edu.mx",
    grade: 80
};
let student2 = {
    name: 'Paulina Alejandra Nova Ramirez',
    controlNumber: '17401031',
    email: "paalnovara@ittepic.edu.mx",
    grade: 90
};

students = model.create(student, students);
students = model.create(student2, students);

console.log("-------Al insertar--------");
model.read(students);

students = model.erase(0, students);

console.log("-------Al eliminar--------");
model.read(students);

model.create(student, students);
console.log("-------Al volver a insertar--------");
model.read(students);

students = model.update(1, {
    name: "Erick Octavio Nolasco Machuca",
    controlNumber: "17401029",
    email: "erocnolascoma@ittepic.edu.mx",
    grade: 90
}, students);

console.log("-------Despues de actualizar--------");
model.read(students);

console.log("-------Despues de eliminar por numero de control--------");
students = model.eraseControlNumber('17401031', students);
model.read(students);

console.log("-------------Buscar un estudiante-------------")
model.read(model.find("17401029", students));

console.log("--------------Mayor a 70------------------")
model.read(model.mayor70(students));

console.log("--------------Update por campo------------------")
model.read(model.update1(students, "17401029", "grade", 70));
