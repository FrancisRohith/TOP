import './viewProject.css'
export async function showProject(){
    const container = document.createElement('div')
    container.classList.add('container')
    const projects = await getFromLocal('projects')
    if(projects.length === 0) return
    projects.forEach(p=>{
        const projectContainer = newProjectContainer(p.name,p.tasks)
        container.appendChild(projectContainer)
        
    })
    return container
}

function newProjectContainer(projectName,tasks){
    const projectContainer = document.createElement('div')
    projectContainer.classList.add('proCont')

    const projectHeader = document.createElement('div')
    projectHeader.classList.add('projectHeader')
    
    const title = document.createElement('div')
    title.classList.add('title')
    title.innerHTML = `<span style="font-weight:bold;font-size:20px">${projectName}</span>`
    console.log(`Project name:${projectName}`)
    projectHeader.appendChild(title)
    projectContainer.appendChild(projectHeader)


    const allTtask = document.createElement('div')
    allTtask.classList.add('tasks')

    const taskList = tasks
    if(taskList.length>0){
        for(let i=0;i<taskList.length;i++){
            const taskContainer = document.createElement('div')
            taskContainer.classList.add(`taskContainer${1}`)

            const taskName = document.createElement('div')
            taskName.classList.add('taskName')
            taskName.innerHTML = `<span style="font-weight:bolder;font-size:20px"> ${i+1}. ${taskList[i].taskName}`
            taskContainer.appendChild(taskName)
            console.log(`task ${i+1}:
            Name: ${taskList[i].taskName}`)

            const description = document.createElement('div')
            description.classList.add('description')
            description.innerHTML = `<span style="font-size:12px">Description: </span>${taskList[i].description}`
            taskContainer.appendChild(description)
            console.log(`description :${taskList[i].description}`)

            const taskFooter = document.createElement('div')
            taskFooter.classList.add('taskFooter')

            const priority = document.createElement('div')
            priority.classList.add('priority')
            priority.innerHTML = `<span style="font-size:12px">priority: </span>${taskList[i].priority}`
            taskFooter.appendChild(priority)
            console.log(`priority: ${taskList[i].priority}`)

            const dueDate = document.createElement('div')
            dueDate.classList.add('dueDate')
            dueDate.innerHTML = `<span style="font-size:12px">Due date: </span>${taskList[i].due}`
            taskFooter.appendChild(dueDate)
            console.log(`dueDate: ${taskList[i].due}`)
            taskContainer.append(taskFooter)
            const deleteTaskbtn = document.createElement('button')
            deleteTaskbtn.classList.add('deleteTakbtn')
            deleteTaskbtn.textContent = 'delete task'

            deleteTaskbtn.addEventListener('click',()=>{
                deleteTask(name,taskList[i].taskName)
                taskContainer.remove('.taskContainer${1}')
            })
            taskContainer.appendChild(deleteTaskbtn)
            allTtask.appendChild(taskContainer)
        }
    }
    projectContainer.appendChild(allTtask)
    return projectContainer
}
const projectList = showProject()
    // if(projects.length > 0){
    //     projects.forEach((project)=>{
    //         const projectContainer = document.createElement('div')
    //         projectContainer.classList.add('proCont')

    //         const projectHeader = document.createElement('div')
    //         projectHeader.classList.add('projectHeader')
    //         const title = document.createElement('div')
    //         title.classList.add('title')
    //         title.innerHTML = `<span style="font-weight:bold;font-size:20px">${project.name}</span>`
    //         projectHeader.appendChild(title)

    //         const deletebtn = menu.querySelector('.delete')
    //         const editbtn = menu.querySelector('.edit')

    //         deletebtn.addEventListener('click',()=>{
    //             const updatedprojects = [...projects].filter(p=>p.name !== project.name)
    //             localStorage.setItem('projects',JSON.stringify(updatedprojects))
    //             container.innerHTML = ''
    //             const updatedView = showProject()
    //             container.appendChild(updatedView)
    //         })
            
    //         editbtn.addEventListener('click',()=>{
    //             const dialog  = document.createElement('dialog')
    //             dialog.classList.add('editDialog')

    //             dialog.innerHTML = `<form method="dialog" class="editForm">
    //                     <label for="editName">Name:</label>
    //                     <input type="text" id="editName" value="${project.name}">
                        
    //                     <button type="submit" class="savebtn">Save</button>
    //                     <button type="button" class="cancelbtn">Cancel</button>
    //                 </form>`
    //             document.body.appendChild(dialog)
    //             const savebtn = dialog.querySelector('.savebtn')
    //             const cancelbtn = dialog.querySelector('.cancelbtn')
    //             savebtn.addEventListener('click',()=>{
    //                 const newName = document.querySelector('#editName').value
    //                 const newDesc = document.querySelector('#editDescription').value
    //                 const newDate = document.querySelector('#editDueDate').value
    //                 project.name = newName
    //                 project.description = newDesc
    //                 project.dueDate = newDate
    //                 localStorage.setItem('projects',JSON.stringify(projects))
    //                 dialog.close()
    //                 showProject()
    //             })
    //             cancelbtn.addEventListener('click',()=>{
    //                 dialog.close()
    //             })
               
    //            dialog.showModal()
                
    //         })

    //         projectContainer.appendChild(projectHeader)

            

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

async function viewbyProject(){
    const projects = await getFromLocal('projects')
    if(projects.length === 0) return
    projects.forEach(p=>{
        console.log(`Project name:${p.name}`)
        const taskList = p.tasks
        if(taskList.length>0){
            for(let i=0;i<taskList.length;i++){
                console.log(`task ${i+1}:
                Name: ${taskList[i].taskName}
                description :${taskList[i].description}
                priority: ${taskList[i].priority}
                due: ${taskList[i].due}`)
            }
        }
        
    })
}
async function deleteProject(name){
    const projectList = await getFromLocal('projects')
    if(projectList.length>0){
        for(let i=0;i<projectList.length;i++){
            if(projectList[i].name == name){
                console.log(`deleting ${projectList[i].name}`)
                projectList.splice(i,1)
            }else{
                console.log(`No project named ${name}`)
            }
        }
    }else {
        console.log('No tasks available.');
    }
    setToLocal('projects',projectList)
}
async function deleteTask(projectName,taskName){
    const projectList = await getFromLocal('projects')
    if(projectList.length>0){
        for(let i=0;i<projectList.length;i++){
            if(projectList[i].name == projectName){
                const targetTask = projectList[i].tasks
                
                if(targetTask.length>0){
                    for(let j=0;j<targetTask.length;j++){
                        console.log(`${targetTask[j]}`)
                        console.log(`${targetTask[j].taskName}`)
                        if(targetTask[j].taskName == taskName){
                            console.log(`deleting ${targetTask[j].taskName}`)
                            targetTask.splice(j,1)
                        }else{
                            console.log(`No task named ${taskName}`)
                        }

                    }
                } 
            }else{
                console.log(`No project named ${projectName}`)
            }
        }
    }else {
        console.log('No tasks available.');
    }
    setToLocal('projects',projectList)
}
function deleteAll(){
    setToLocal('projects',[])
}
function getFromLocal(name){
    const result = localStorage.getItem(name)
    return result ? JSON.parse(result) : [] 
}

function setToLocal(name,data){
    localStorage.setItem(name,JSON.stringify(data))
}

function lsv(){
    console.log(getFromLocal('projects'))
}

//export {}