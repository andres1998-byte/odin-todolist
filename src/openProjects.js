function openProjects () {
    const projectContainer=document.querySelector('.defprojects');
    const LOCAL_STORAGE_LIST_KEY= 'task.projects';
    const LOCAL_STORAGE_SELECTED_LIST_ID_KEY= 'task.selectedProjectId';

    let projects=JSON.parse(localStorage.getItem(LOCAL_STORAGE_LIST_KEY)) || [{id:1, name: 'Today'}, {id:2, name: 'Tomorrow'}, {id:3, name: 'This Week'}, {id:4, name: 'This Month'}, {id:5, name: 'This Year'}] ;
    let selectedProjectId=localStorage.getItem(LOCAL_STORAGE_SELECTED_LIST_ID_KEY);

    function render() {
        clearElement(projectContainer);
        projects.forEach(project => {
            const projectElement= document.createElement('div');
            projectElement.dataset.projectId=project.id;
            projectElement.classList.add("project");
            projectElement.innerText=project.name;
            if (project.id==selectedProjectId) {
                projectElement.classList.add("active-project");
            }
            projectContainer.appendChild(projectElement);
        })
    } 

    projectContainer.addEventListener("click", function (e) {
            selectedProjectId=e.target.dataset.projectId;  
            saveAndRender();
        
    })

    function clearElement(element) {
        while (element.firstChild) {
            element.removeChild(element.firstChild);
        }

    }
    
    function saveAndRender (){
        save();
        render(); 
    }

    function save() {
        localStorage.setItem(LOCAL_STORAGE_LIST_KEY, JSON.stringify(projects));
        localStorage.setItem(LOCAL_STORAGE_SELECTED_LIST_ID_KEY, selectedProjectId);
    }

    render();


    const btnAddProject=document.querySelector('#btnaddproject');
    const formProject=document.querySelector('#projectform');
    const projectInput=document.querySelector('#projecttitle')

    btnAddProject.addEventListener("click", function () {
        formProject.style.display="";
    })

    formProject.addEventListener("submit", function (e) {
        e.preventDefault();
        const projectName= projectInput.value;
        const project= createProject (projectName);
        projectInput.value=null;
        projects.push(project);
        saveAndRender();
        formProject.style.display="none";
    })

    function createProject (name) {
        return {id: Date.now().toString(), name: name, tasks: []}

    }

    const deleteProjectButton=document.querySelector('[data-delete-project]');
    deleteProjectButton.addEventListener("click", function (){
        projects=projects.filter(project => project.id !== selectedProjectId);
        selectedProjectId=null;
        saveAndRender();
    })

}

export default openProjects;