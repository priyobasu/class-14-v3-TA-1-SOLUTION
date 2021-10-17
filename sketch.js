var Student={
  name: "priyadarshini",
  class: "10",
  section:"a",
  roll:"10",
  marks:[20,40,60,70]
}



function setup() {
  createCanvas(400, 400);
  console.log(Student.name);
  console.log(Student.class);
  Student.name="Shreya";
  console.log(Student.name)
}

function draw() {
  background(220);
}