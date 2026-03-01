let studentsusernames = [
    
      { studentusername : "Hamed" , score : "100" },
       { studentusername : "Sami" ,  score : "90" },
       { studentusername : "Kihan" ,  score : "92" },
       { studentusername : "Burhan" ,  score : "95" },
       { studentusername : "Rafi" ,  score : "91" },
       { studentusername : "Farzam" ,  score : "90" },
        { studentusername : "Yaqob" , score : "52" },
        { studentusername : "Mohammed" , score : "30" },
        { studentusername : "Ali" , score : "19" },
        { studentusername : "Rahmat" , score : "18" },
        { studentusername : "Ahmad" , score : "10" },
        { studentusername : "Mustafa" , score : "0" }
    
];
studentsusernames.filter(students => students.score > 50).forEach(students => {
    let passingStudentsElement = document.getElementById("passingStudents");
    passingStudentsElement.innerHTML += students.studentusername +  " passed with "+ students.score + " score<br>";
});
studentsusernames.filter(students => students.score < 50).forEach(students => {
    let failingStudentsElement = document.getElementById("failingStudents");
    failingStudentsElement.innerHTML += students.studentusername +  " Failed with "+ students.score + " score<br>";
});
  function getData(){
    let studentusername = prompt("Enter Student Name:");
    var score = prompt("Enter Student Score:");
    document.getElementById("passingStudents").innerHTML += studentusername + " passed with " + score + " score<br>";
    if(score < 50){
        document.getElementById("failingStudents").innerHTML += studentusername + " Failed with " + score + " score<br>";
    }
  }

