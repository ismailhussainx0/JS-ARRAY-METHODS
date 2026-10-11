const students = [
    { name: "Ismail", marks: 85 },
    { name: "Ammar", marks: 42 },
    { name: "Anus", marks: 67 },
    { name: "Umer", marks: 30 },
    { name: "Ayan", marks: 95 }
];

// passing students array return
const getPassingStudents = (students) => {

    let passingStudents = students.filter(function(student){
        return student.marks >= 50;
    })

    return passingStudents;
}

const passedStudents = getPassingStudents(students);


// only passed students marks
const getPassingStudentsMarks = (passedStudents) => {

    let studentsMarks = passedStudents.map(function(passedStudent){
        return passedStudent.marks; 
    })

    return studentsMarks;
}

let passedStudentsMarks = getPassingStudentsMarks(passedStudents);
console.log(passedStudentsMarks)


// get passed students names 
const getPassStudentNames = (passedStudents) => {

    let studentNames = passedStudents.map(function(student){
        return student.name;
    })

    return studentNames;
}
console.log(getPassStudentNames(passedStudents));


// passing students name
const getPassingStudentsNames = (students) => {

    let passStudents = students.filter(function(student){
        return student.marks >= 50;
    })

    let stdNames = passStudents.map(function(student){
        return student.name;
    });

    return stdNames;
}

console.log(getPassingStudentsNames(students));


// Reduce Practice
const numbers = [10, 20, 30, 40];

const getTotal = (numbers) => {

    let total = numbers.reduce(function(totalNumber, number){
        return totalNumber + number;
    }, 0)

    return total;

}

console.log(getTotal(numbers));


// Reduce Praticle Task 
const cart = [
    { name: "Keyboard", price: 2500 },
    { name: "Mouse", price: 1200 },
    { name: "Headphones", price: 3500 },
    { name: "USB Cable", price: 500 }
];

const getCartTotal = (cart) => {

    let totalPrice = cart.reduce(function(totalPrice, item){
        return totalPrice + item.price;
    }, 0)

    return totalPrice;

}

const totalAmout = getCartTotal(cart);
console.log(totalAmout);







