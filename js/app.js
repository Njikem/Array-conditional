
let student_name = 'Johnathan';
let student_gpa = 3.8;
let honor_role = true;

if(honor_role === true){
    console.log(`congratulations ${student_name}, you did great!`);
}else{
    console.log('You tried');
}

if(student_gpa >= 0 && student_gpa <=1.9){
    console.log('F');
}else if(student_gpa >= 2.0 && student_gpa <=2.4){
    console.log('D');
}else if(student_gpa >= 2.5 && student_gpa <=2.9 ){
    console.log('C');
}else if(student_gpa >= 3.0 && student_gpa <=3.4){
    console.log('B')
}else if(student_gpa >= 3.5 && student_gpa <=4){
    console.log('A');
}else{
    console.log('Try next year');
}


let student_names = ['nunti', 'Johny', 'haris']
let student_gpas = [2.5, 3.8, 1.9]
let honor_roles = [ false, true, false]


if(honor_roles === true){
    console.log('Congrats');
}else if(honor_roles ===true && student_gpas === 2/3){
    console.log('Good Try')
}else{
    console.log('Try next time');
}


student_names.push('Alice');
console.log(student_names);
student_gpas.push(4);
console.log(student_gpas);
honor_roles.push(true);
console.log(honor_roles);

let last_student= student_names.pop(4);
console.log(last_student);
let last_student_gpa = student_gpas.pop(4);
console.log(last_student_gpa);
let last_student_honor = honor_roles.pop(4);
console.log(last_student_honor);


if(last_student_gpa >= 'student_gpas'){
    console.log('Last Student best student');
}else{
    console.log('You guys tried');
}