let num = 1;
let add = document.querySelector("#add");

add.addEventListener("click", function addList(event) {
    event.preventDefault();
    let task = document.querySelector("#taskInput");
    let time1 = document.querySelector(".time1");
    let time2 = document.querySelector(".time2");
    let date = document.querySelector("#date");
    let table = document.querySelector("#taskList");
    let newTask = document.createElement("tr");
    let color = randomColor();
    newTask.innerHTML = `<td>${num}</td><td>${date.value}</td><td>${task.value}</td><td>${time1.value}</td><td>${time2.value}</td><td><input type="checkbox" name="completion" id="completion"></td>`;
    newTask.style.backgroundColor=color;
    table.append(newTask);
    num += 1;
    date.value="";
    task.value="";
    time1.value="";
    time2.value=""; 
});

function randomColor() {
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);

    let color = `rgba(${red},${green},${blue},0.5)`;
    return color
}



// {/* <div class="checkbox-wrapper-12">
//   <div class="cbx">
//     <input checked="" type="checkbox" id="cbx-12">
//     <label for="cbx-12"></label>
//     <svg fill="none" viewBox="0 0 15 14" height="14" width="15">
//       <path d="M2 8.36364L6.23077 12L13 2"></path>
//     </svg>
//   </div>
  
//   <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
//     <defs>
//       <filter id="goo-12">
//         <feGaussianBlur result="blur" stdDeviation="4" in="SourceGraphic"></feGaussianBlur>
//         <feColorMatrix result="goo-12" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 22 -7" mode="matrix" in="blur"></feColorMatrix>
//         <feBlend in2="goo-12" in="SourceGraphic"></feBlend>
//       </filter>
//     </defs>
//   </svg>
// </div> */}