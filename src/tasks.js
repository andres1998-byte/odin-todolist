function createTask () {
    let projectList=[];

    function task(title, description, dueDate, priority) {
        this.title=title;
        this.description=description;
        this.dueDate=dueDate;
        this.priority=priority;
    
    }

    function render () {
        let itemsDisplay=document.querySelector(".todoitems");
        itemsDisplay.innerHTML="";
        console.log(projectList.length);



        for (let i=0; i<projectList.length; i++) {
            let itemDisplay=document.createElement("div");
            itemDisplay.classList.add("todoitem");

            let item=projectList[i];

            let itemTitle=document.createElement("div");
            itemTitle.classList.add("itemtitle");
            itemTitle.innerHTML=`${item.title}`;
            itemDisplay.appendChild(itemTitle);

            let itemDesc=document.createElement("div");
            itemDesc.classList.add("itemdesc");
            itemDesc.innerHTML=`${item.description}`;
            itemDisplay.appendChild(itemDesc);

            let itemDueDate=document.createElement("div");
            itemDueDate.classList.add("itemduedate");
            itemDueDate.innerHTML=`${item.dueDate}`;
            itemDisplay.appendChild(itemDueDate);

            let itemPriority=document.createElement("div");
            itemPriority.classList.add("itempriority");
            itemPriority.innerHTML=`${item.priority}`;
            itemDisplay.appendChild(itemPriority);

            itemsDisplay.appendChild(itemDisplay);


        }
    }

    
    function submitTask() {
        let form=document.querySelector("#form");
        form.addEventListener("submit", function () {
            event.preventDefault();
            let title=document.querySelector("#title").value;
            let description=document.querySelector("#description").value;
            let dueDate=document.querySelector("#duedate").value;
            let priority=document.querySelector("#priority").value;
            let newTask= new task(title, description, dueDate, priority);
            projectList.push(newTask);
            form.style.display="none";
            render();
    
        })
    }

    submitTask();
}




export default createTask;