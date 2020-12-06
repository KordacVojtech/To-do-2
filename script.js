const input = document.getElementById('input');
const typeOfTask = document.getElementById('typeOfTask');
const priority = document.getElementById('priority');
const submitBtn = document.getElementById('submitBtn');
const clearBtn = document.getElementById('clearBtn');
const appDiv = document.getElementById('toDoText');

const remaining = document.getElementById('remaining');


let count = 0;


submitBtn.addEventListener('click', ()=>{
    const name = document.createElement('td');
    const type = document.createElement('td');
    const prior = document.createElement('td');
    const div = document.createElement('table');
    const list = document.createElement('tr');
    
    list.className = 'appendedDiv ';
    div.className = 'appendedDiv';
    name.className = 'task';
    type.className = 'desc';
    prior.className = 'priorTask';

    name.textContent = input.value;
    type.textContent = typeOfTask.value;
    prior.textContent = priority.value;
    
    
    if(typeOfTask.value ==='Homework'|| typeOfTask.value ==='Study'){
        type.style.color = 'rgb(66, 135, 245)';
    } else if (typeOfTask.value ==='Grocery' || typeOfTask.value ==='Gift'){
        type.style.color = 'rgb(245, 66, 126)';
    } else if(typeOfTask.value ==='Birthday' || typeOfTask.value ==='Work'){
        type.style.color = 'rgb(245, 66, 239)';
    } else if (typeOfTask.value ==='Other'){
        type.style.color = 'rgb(245, 161, 66)';
    }

    if(priority.value === 'Low'){
        prior.style.color = 'rgb(3, 252, 7)';
    } else if (priority.value === 'Medium'){
        prior.style.color = 'rgb(244, 247, 17)';
    } else if (priority.value === 'High'){
        prior.style.color = 'rgb(255, 172, 0)';
    } else if (priority.value === 'ASAP'){
        prior.style.color = 'rgb(255, 0, 0)';
    }


    if(input.value ===''){
        alert('Input field must be filled')
    } else{

    list.appendChild(name);
    list.appendChild(type);
    list.appendChild(prior);

    div.appendChild(list);

    appDiv.appendChild(div);

    input.value = '';
    count++
    }

    
    

    

    clearBtn.addEventListener('click', ()=>{
        div.style.display = 'none';
        count = 0;
        remaining.textContent = count+ ' tasks remaining';
    })

    remaining.textContent = count + ' tasks remaining';


    div.addEventListener('click',()=>{
        div.style.textDecoration = 'line-through';
    })

    div.addEventListener('dblclick',()=>{
        div.style.display = 'none';
        count--;
        remaining.textContent = count+ ' tasks remaining';
    })

})




