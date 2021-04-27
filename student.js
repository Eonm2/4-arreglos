function create(student, students) {
    students.push(student);
    return students
}

function read(students) {
    students.forEach(s => {
        console.log("Nombre: " + s.name);
        console.log("Núero de control: " + s.controlNumber);
        console.log("Email: " + s.email);
        console.log("Grade: " + s.grade);
    });
}

function eraseControlNumber(controlNumber, students) {
    let index = students.findIndex(s => s.controlNumber == controlNumber);
    if (index !== -1) {
        students.splice(index, 1);
        return students;
    } else {
        return students;
    }
}

function erase(pos, students) {
    students.splice(pos, 1);
    return students;
}

function update(pos, newElement, students) {
    students[pos] = newElement;
    return students;
}
function find(controlNumber, students) {
    let index = students.findIndex(s => s.controlNumber == controlNumber);
    let students1 = [];
    if (index !== -1) {
        students1.push(students[index])
        return students1;
    } else {
        return students1;
    }
}

function mayor70(students) {
    let students70 = [];
    students.forEach(s => {
        if (s.grade > 70) {
            students70.push(s);
        }
    });
    return students70;
}
function update1(students, numeroControl, campo, nuevoValor) {
    let index = students.findIndex(s => s.controlNumber == numeroControl);
    if (campo == "name") {
        students[index].name = nuevoValor;
    } else if (campo == "controlNumber") {
        students[index].controlNumber = nuevoValor;
    } else if (campo == "email") {
        students[index].email = nuevoValor;
    } else if (campo == "grade") {
        students[index].grade = nuevoValor;
    }
    return students;
}


module.exports.create = create;
module.exports.read = read;
module.exports.erase = erase;
module.exports.update = update;
module.exports.eraseControlNumber = eraseControlNumber;
module.exports.find = find;
module.exports.mayor70 = mayor70;
module.exports.update1 = update1;
