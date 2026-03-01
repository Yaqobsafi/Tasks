let students = [
    
      {  studentname : "Hamed" , score : "100" },
       { studentname : "Sami" ,  score : "90" },
       { studentname : "Kihan" ,  score : "92" },
       { studentname : "Burhan" ,  score : "95" },
       { studentname : "Rafi" ,  score : "91" },
       { studentname : "Farzam" ,  score : "90" },
        { studentname : "Yaqob" , score : "50" },
        { studentname : "Mohammed" , score : "30" },
        { studentname : "Ali" , score : "19" },
        { studentname : "Rahmat" , score : "18" },
        { studentname : "Ahmad" , score : "10" },
        { studentname : "Mustafa" , score : "0" }
    
];
students.filter(students => students.score > 50).forEach(students => alert(students.studentname +  " passed with "+ students.score + " score"))
students.filter(students => students.score < 50).forEach(students => alert(students.studentname +  " Failed with "+ students.score + " score"))

