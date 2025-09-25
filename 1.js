
let studentData = new Array();

//[{id,name,age}]
const n = prompt("Total Number of Student ");

function askDetails(){
const id = prompt ("whats the id ")
const name = prompt("whats the name ");
const age = prompt("whats the age ")

studentData.push({
id : Number(id),
name : name,
age : Number(age)
})
}

for (i=0;i<n;i++){askDetails();}

console.log(studentData)

console.log('------------')

console.log('which student db u want to delete enter its id or name')

function deleteStudent(studentRemoved){
   studentData=studentData.filter(obj => obj.id !== Number(studentRemoved) && obj.name!== studentRemoved )
}

const m = prompt("How many students u wanna remove from db ")


for (i=0;i<m;i++){
const studentRemoved = prompt ("Enter Name / ID ")
    
    deleteStudent(studentRemoved)}

console.log(studentData)