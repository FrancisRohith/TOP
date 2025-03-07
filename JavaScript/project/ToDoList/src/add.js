import "./add.css";
const projects = JSON.parse(localStorage.getItem("projects"));
export function taskForm() {
  const container = document.createElement("div");
  container.classList.add("container");

  const form = document.createElement("form");
  form.classList.add("taskForm");
  form.setAttribute("method", "post");

  const name = document.createElement("label");
  name.setAttribute("for", "nameInput");
  name.textContent = "Task name:";
  const nameInput = document.createElement("input");
  nameInput.classList.add("nameInput");
  nameInput.setAttribute("type", "text");
  nameInput.setAttribute("name", "name");
  nameInput.required = true;
  form.appendChild(name);
  form.appendChild(nameInput);

  const description = document.createElement("label");
  description.setAttribute("for", "descriptionIn");
  description.textContent = "Description:";
  const descriptionIn = document.createElement("textarea");
  descriptionIn.classList.add("descriptionIn");
  descriptionIn.setAttribute("type", "text");
  descriptionIn.setAttribute("name", "description");
  description.setAttribute('rows',4)
  description.setAttribute('cols',50)
  descriptionIn.required = true;
  form.appendChild(description);
  form.appendChild(descriptionIn);

  const priority = document.createElement("label");
  priority.setAttribute("for", "priorityIn");
  priority.textContent = "priority:";
  const priorityIn = document.createElement("textarea");
  priorityIn.classList.add("priorityIn");
  priorityIn.setAttribute("type", "text");
  priorityIn.setAttribute("name", "priority");
  priority.setAttribute('rows',4)
  priority.setAttribute('cols',50)
  priorityIn.required = true;
  form.appendChild(priority);
  form.appendChild(priorityIn);

  const dueDate = document.createElement("label");
  dueDate.setAttribute("for", "dueDateIn");
  dueDate.textContent = "Due Date:";
  const dueDateIn = document.createElement("input");
  dueDateIn.classList.add("dueDateIn");
  dueDateIn.setAttribute("type", "date");
  dueDateIn.setAttribute("name", "dueDate");
  form.appendChild(dueDate);
  form.appendChild(dueDateIn);

  const addTask1 = document.createElement("button");
  addTask1.classList.add("addTask1");
  addTask1.setAttribute("type", "submit");
  addTask1.textContent = "Add task to new Project";
  form.appendChild(addTask1);

  const addTask2 = document.createElement("button");
  addTask2.classList.add("addTask2");
  addTask2.setAttribute("type", "button");
  addTask2.textContent = "Add task to existing project";
  form.appendChild(addTask2);

  const backbtn = document.createElement("button");
  backbtn.classList.add("backbtn");
  backbtn.setAttribute("type", "button");
  backbtn.textContent = "Back";
  form.appendChild(backbtn);

  addTask1.addEventListener("click", (e) => {
    e.preventDefault()
    if(form.checkValidity()){
      const newElement = projectForm()
      addNewTask(nameInput.value,descriptionIn.value,priorityIn.value,dueDateIn.value)
      alert(`task added refresh to see!!!!`)
      addTask1.remove()
      addTask2.remove()
    }else{
      alert('input field is empty')
    }
  });
  
  addTask2.addEventListener("click", (e) => {
    e.preventDefault()
    if(form.checkValidity()){
      const newTask = new task(nameInput.value,descriptionIn.value,dueDateIn.value)
      const dropDown = projectDropDown(newTask)
      form.insertBefore(dropDown,addTask1)
      addTask1.remove()
      addTask2.remove()
    }else{
      alert('input field is empty')
    }
  });

  backbtn.addEventListener("click", () => {
    form.remove();
  });
  container.appendChild(form);
  return container;
}

export async function projectForm(){
  const projectElement = document.createElement("div");
  projectElement.classList.add("projectElement");

  const projectName = document.createElement("label");
  projectName.setAttribute("for", "projectName");
  projectName.textContent = "Project name:";
  const projectInput = document.createElement("input");
  projectInput.classList.add("projectName");
  projectInput.setAttribute("type", "text");
  projectInput.setAttribute("name", "project");
  projectInput.required = true;
  projectElement.appendChild(projectName)
  projectElement.appendChild(projectInput);

  const addprojectbtn = document.createElement("button");
  addprojectbtn.classList.add("addprojectbtn");
  addprojectbtn.setAttribute("type", "button");
  addprojectbtn.textContent = "Add project";
  projectElement.appendChild(addprojectbtn);

  const cancelBtn = document.createElement("button");
  cancelBtn.classList.add("cancelBtn");
  cancelBtn.setAttribute("type", "button");
  cancelBtn.textContent = "Cancel";
  projectElement.appendChild(cancelBtn);

  addprojectbtn.addEventListener("click",(e) => {
    addProject(projectInput.value)
    alert(`project added`)
  });

  cancelBtn.addEventListener("click", (e) => {
    projectElement.remove()
  });
  return projectElement
}

function projectDropDown(task){
  const container = document.createElement('div')

  const projectLabel = document.createElement('label')
  projectLabel.setAttribute('for','projects')
  projectLabel.textContent = 'Choose from these projects'
  const projects = document.createElement('select')
  projects.classList.add('projectsInDropDown')
  const options = document.createElement('option')
  options.textContent = '--Select--'
  options.disabled = true
  options.selected = true
  projects.appendChild(options)
  const projectList = getFromLocal('projects')
  if(projectList){
    projectList.forEach(project=>{
      const options = document.createElement('option')
      options.textContent = project.name
      projects.appendChild(options)
    })  
  }

  const addTaskBtn = document.createElement('button')
  addTaskBtn.textContent = 'Add'
  addTaskBtn.addEventListener('click',(e)=>{
    e.preventDefault()
    let projectList = getFromLocal('projects')
    const selectedProject = projectList.find(p=>p.name === projects.value)
    console.log(selectedProject)
    if(selectedProject){
      selectedProject.tasks.push(task)
      setToLocal(projectList)
      alert('added!!!!!')
      container.closest('form').remove()
    }
  })
  container.appendChild(projects)
  container.appendChild(addTaskBtn)
  return container
}

function project(name){
  return {
      name:name,
      tasks:[]
  }
}

function task(name,desc,priority,due){
  this.taskName = name;
  this.description = desc ;
  this.priority = priority;
  this.due = due;
}

function getFromLocal(name){
  const result = localStorage.getItem(name)
  return result ? JSON.parse(result) : [] 
}

function setToLocal(name,data){
  localStorage.setItem(name,JSON.stringify(data))
}

async function addProject(name){
  const projectList = await getFromLocal('projects')
  const newProject = new project(name)
  projectList.push(newProject)
  setToLocal('projects',projectList)
}

async function addNewTask(projectName,name,desc,priority,due){
  const projects = await getFromLocal('projects')
  projects.forEach(p=>{
      if(p.name == projectName){
          const newTask = new task(name,desc,priority,due)
          let taskArray = p.tasks
          taskArray.push(newTask)
          console.log('task added')
          setToLocal('projects',projects)
          return 
      }else{
          console.log(`No project named ${projectName}`)
      }
  })   
}