import "./styles.css";
import {taskForm,projectForm} from "./add.js";
import {showProject} from "./viewProject.js";

const mainPage = document.querySelector(".mainpage");
const addTaskBtn = document.querySelector(".addTask");
const viewProjectbtn = document.querySelector(".viewProject");
const addProjectBtn = document.querySelector('.addProject')

addProjectBtn.addEventListener('click',async ()=>{
    mainPage.innerHTML = ''
    const addProject = await projectForm()
    mainPage.appendChild(addProject)
})

addTaskBtn.addEventListener("click", () => {
  mainPage.innerHTML = "";
  mainPage.appendChild(taskForm());
});
const projectList = showProject()
viewProjectbtn.addEventListener("click",async () => {
  mainPage.innerHTML = "";
  try {
        const projectList = await showProject(); 
        if (projectList instanceof Node) {
            mainPage.appendChild(projectList); 
        } else {
            console.error('showProject did not return a Node:', projectList);
        }
    } catch (error) {
        console.error('Error loading projects:', error);
    }
});



// import "./viewProject.css"


//     container.textContent = 'No Projects'
//     container.style.color = 'gray'
//     return container

// }

// function getFromLocal(name){
// const result = localStorage.getItem(name)
// return result ? JSON.parse(result) : []
// }

// function setToLocal(name){
// return localStorage.setItem('projects',JSON.stringify(name))
// }

// function dropDownMenu(){
//     const container = document.createElement('div')
//     container.classList.add('menuContainer')

//     const dots = document.createElement('div')
//     dots.classList.add('dots')

//     const dot1 = document.createElement('span')
//     const dot2 = document.createElement('span')
//     const dot3 = document.createElement('span')
//     dots.appendChild(dot1)
//     dots.appendChild(dot2)
//     dots.appendChild(dot3)

//     container.appendChild(dots)

//     const dropDown = document.createElement('div')
//     dropDown.classList.add('dropDown')

//     const edit = document.createElement('div')
//     edit.classList.add('edit')
//     edit.textContent = 'Edit'
//     dropDown.appendChild(edit)

//     const Delete = document.createElement('div')
//     Delete.classList.add('delete')
//     Delete.textContent = 'Delete'
//     dropDown.appendChild(Delete)

//     container.appendChild(dropDown)

//     document.addEventListener('DOMContentLoaded',()=>{
//         dots.addEventListener('click',()=>{
//             dropDown.classList.toggle('show')
//         })
//         document.addEventListener('click',(e)=>{
//             if(!dots.contains(e.target) && !dropDown.contains(e.target)){
//                 dropDown.classList.remove('show')
//             }
//         })
//     })
//     return container
// }



