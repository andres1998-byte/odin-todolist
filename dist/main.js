(()=>{"use strict";!function(){const e=document.querySelector(".defprojects"),t="task.projects",i="task.selectedProjectId";let n=JSON.parse(localStorage.getItem(t))||[{id:1,name:"Today",tasks:[]},{id:2,name:"Tomorrow",tasks:[]},{id:3,name:"This Week",tasks:[]},{id:4,name:"This Month",tasks:[]},{id:5,name:"This Year",tasks:[]}],o=localStorage.getItem(i)||1;const r=document.querySelector("[data-todo-items]");function d(){c(e),n.forEach((t=>{const i=document.createElement("div");i.dataset.projectId=t.id,i.classList.add("project"),i.innerText=t.name,t.id==o&&i.classList.add("active-project"),e.appendChild(i)}));const t=n.find((e=>e.id==o));null==o?r.innerHTML="":(c(r),function(e){e.tasks.forEach((e=>{const t=document.createElement("div");t.classList.add("todoitem");const i=document.createElement("div");i.innerHTML=`<b>Task:</b> ${e.title}`,t.appendChild(i);const n=document.createElement("div");n.innerHTML=`<b>Description:</b> ${e.description}`,t.appendChild(n);const o=document.createElement("div"),d=new Date(e.dueDate).toLocaleString("en-US",{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"});o.innerHTML=`<b>Due Date:</b> ${d}`,t.appendChild(o);const c=document.createElement("div");c.innerHTML=`<b>Priority:</b> ${e.priority}`,t.appendChild(c);const s=document.createElement("input");s.setAttribute("type","checkbox"),s.setAttribute("id","completed"),t.appendChild(s),s.id=e.id,s.checked=e.complete,r.appendChild(t)}))}(t))}function c(e){for(;e.firstChild;)e.removeChild(e.firstChild)}function s(){a(),d()}function a(){localStorage.setItem(t,JSON.stringify(n)),localStorage.setItem(i,o)}e.addEventListener("click",(function(e){o=e.target.dataset.projectId,s()})),d();const l=document.querySelector("#btnaddproject"),u=document.querySelector("#projectform"),m=document.querySelector("#projecttitle");l.addEventListener("click",(function(){u.style.display=""})),u.addEventListener("submit",(function(e){e.preventDefault();const t=(i=m.value,{id:Date.now().toString(),name:i,tasks:[]});var i;m.value=null,n.push(t),s(),u.style.display="none"})),document.querySelector("[data-delete-project]").addEventListener("click",(function(){n=n.filter((e=>e.id!==o)),o=null,s()}));const p=document.querySelector("#form");document.querySelector(".addimgg").addEventListener("click",(function(){p.style.display=""})),p.addEventListener("submit",(function(e){e.preventDefault();let t=Date.now().toString(),i=document.querySelector("#title").value,r=document.querySelector("#description").value,d=document.querySelector("#duedate").value,c=document.querySelector("#priority").value,a=new class{constructor(e,t,i,n,o,r){this.id=e,this.title=t,this.description=i,this.dueDate=n,this.priority=o,this.complete=r}setId(e){this.id=e}getId(){return this.id}setTitle(e){this.title=e}getTitle(){return this.title}setDescription(e){this.description=e}getDescription(){return this.description}setDate(e){this.dueDate=e}getDate(){return this.dueDate}setPriority(e){this.priority=e}getPriority(){return this.priority}setComplete(e){this.complete=e}getComplete(){return this.complete}}(t,i,r,d,c,!1);n.find((e=>e.id==o)).tasks.push(a),s(),p.style.display="none",document.querySelector("#title").value="",document.querySelector("#description").value="",document.querySelector("#duedate").value="",document.querySelector("#priority").value=""})),document.querySelector("[data-delete-complete]").addEventListener("click",(function(){const e=n.find((e=>e.id==o));e.tasks=e.tasks.filter((e=>!e.complete)),s()})),r.addEventListener("click",(function(e){"input"==e.target.tagName.toLowerCase()&&(n.find((e=>e.id==o)).tasks.find((t=>t.id==e.target.id)).complete=e.target.checked,a())}))}()})();