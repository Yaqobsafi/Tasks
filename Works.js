let students = [
  { name: "Ahmad", scores: [80, 90, 75] },
  { name: "Sami", scores: [60, 50, 70] },
  { name: "Yaqob", scores: [9, 8, 92] },
  { name: "Zahid", scores: [99, 99, 99] },
  { name: "Jamal", scores: [91, 100, 100] },
  { name: "Hasan", scores: [10, 11, 100] },
  { name: "Mohammed", scores: [100, 100, 100] },
  { name: "Farzam", scores: [90, 90, 90] },
  { name: "Ali", scores: [9, 9, 9] },
  { name: "Danash", scores: [100, 99, 92] },
  { name: "Elyas", scores: [12, 4, 33] },
  { name: "Fayas", scores: [90, 4, 2] },
];

function calculateStats(student) {
  const avg = student.scores.reduce((a,b)=>a+b,0) / student.scores.length;
  const min = Math.min(...student.scores);
  const max = Math.max(...student.scores);
  return { ...student, avg: avg.toFixed(2), min, max };
}


function render() {
  const container = document.getElementById("studentContainer");
  container.innerHTML = "";

  const updated = students.map(calculateStats);

  updated.forEach(student => {
    const passed = student.avg >= 60;

    container.innerHTML += `
      <div class="card ${passed ? 'pass' : 'fail'}">
        <h3>${student.name}</h3>
        <p><strong>Scores:</strong> ${student.scores.join(", ")}</p>
        <p><strong>Average:</strong> ${student.avg}</p>
        <p><strong>Min:</strong> ${student.min}</p>
        <p><strong>Max:</strong> ${student.max}</p>
        <p><strong>Status:</strong> ${passed ? "✅ Passed" : "❌ Failed"}</p>
      </div>
    `;
  });


  const passedStudents = updated.filter(s => s.avg >= 60);

  // Find top student
  let topStudent = updated[0];
  updated.forEach(s => {
    if (parseFloat(s.avg) > parseFloat(topStudent.avg)) {
      topStudent = s;
    }
  });

  document.getElementById("summary").innerHTML = `
    <h3>📊 Summary</h3>
    <p>Total Students: ${students.length}</p>
    <p>Passed Students: ${passedStudents.length}</p>
    <p>Top Student: 🏆 ${topStudent.name} (Avg: ${topStudent.avg})</p>
  `;
}

function addStudent() {
  const name = document.getElementById("name").value.trim();
  const scoresInput = document.getElementById("scores").value.trim();

  if (!name || !scoresInput) {
    alert("Please fill all fields!");
    return;
  }else if (name > 20 || scoresInput.length > 9) {
    alert("Name must be less than 20 characters and scores must be less than 10 digits!");
    return;
  }else if(scoresInput.split(",").some(s => isNaN(s.trim()))) {
    alert("Scores must be numbers separated by commas!");
    return;
  }
  const scores = scoresInput.split(",").map(Number);

  students.push({ name, scores });

  document.getElementById("name").value = "";
  document.getElementById("scores").value = "";

  render();
}


render();