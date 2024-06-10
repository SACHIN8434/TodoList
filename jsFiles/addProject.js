const addProject = document.getElementById("addProject");
const form1  = document.getElementById("form1");


const activeSection = document.getElementById("activeSection");

const cancelBtn = document.getElementById("cancelBtn");


//array for active projects

const arr = [];







//whenever click to add project we have to open a form
addProject.addEventListener("click", (e)=>{
   form1.classList.toggle("temp");
})

form1.addEventListener("submit",(e)=>{
    e.preventDefault();
    console.log("add project btn is clicked");
    const projectTitle = document.getElementById("projectTitle");
const projectDescription = document.getElementById("projectDescription");

if(!projectTitle.value || !projectDescription.value){
    alert("Please enter all fields");
}

const obj = {
    title:projectTitle.value,
    description:projectDescription.value,
}

arr.push(obj);
console.log(arr);
form1.classList.toggle("temp");




    const div = document.createElement("div");
    const h2 = document.createElement("h2");
    h2.innerHTML = obj.title;
    const p = document.createElement("p");
    p.innerHTML = obj.description;

    const cross = document.createElement("li");

    const para = document.createElement("p");


    para.innerHTML = "Finish";
    para.style.backgroundColor = "red";
    para.style.color = "white";
    para.style.cursor = "pointer";

    cross.style.color = "red";
    cross.innerHTML = "X";
    cross.style.cursor = "pointer";
    

   
    div.appendChild(h2);
    div.appendChild(p);
    div.appendChild(cross);
    div.appendChild(para);
    // div.style.marginTop = "2rem";
    div.style.textAlign = "center";
    div.style.border = "1px solid black";
    div.style.borderRadius = "5px";
    div.style.width = "80%";
    div.style.margin = "1rem auto";
    div.style.boxShadow = "1px 1px black"

    cross.addEventListener("click",(e)=>{
        div.remove();
    })
    // div.classList.add(Date.now());
    activeSection.appendChild(div);
    activeSection.classList.toggle("activeProjectDisplay");

    // const newArr = arr.filter((item)=>item.addEventListener("click",(e)=>e.document.getElementById != ))

  activeSection.addEventListener("click",(e)=>document.removeChild(e.document));

  


})

cancelBtn.addEventListener("click",(e)=>{
    form1.classList.toggle("temp");
})






