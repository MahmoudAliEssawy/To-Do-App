
let userInput = document.getElementById('userTask')
let ul = document.getElementById('ulList')
let spanCounter = document.getElementById('count')
let h4 = document.getElementById('hh')

let counter =0
// create LI item 
function addListItem(){
    if(userInput.value !=''){
        let li = document.createElement('li')
        let span = document.createElement('span')
        let symol= document.createTextNode('\u00D7')
        span.classList.add('close')
        span.appendChild(symol)
        let text = document.createTextNode(userInput.value)
        li.appendChild(text)
        li.appendChild(span)
        userInput.value = ''
        ul.appendChild(li)
        saveTask() 
        countAdd()
        returnCounter()
        console.log(counter)
    }else{
        alert('must enter something !')
    }
}


// delete list item by enter inner Paranet 
ul.addEventListener('click' , function(ev){
    if(ev.target.tagName == 'SPAN'){
        ev.target.parentElement.remove()
        saveTask()
        counterMIn()
        returnCounter()
    }else if(ev.target.tagName =='LI'){
        ev.target.classList.toggle('cheacked')
        saveTask()

    }
},false)

// save task
function saveTask(){
    localStorage.setItem('userTask' , ul.innerHTML)
}

// showTask()
function showTask(){
    ul.innerHTML = localStorage.getItem('userTask')
}

showTask()

// cheack Count 

let countAdd = ()=>{
    counter++
    localStorage.setItem('userCounter' , counter)
    spanCounter.innerText = counter
    
}

let counterMIn = ()=>{
    if(counter>=1){
        counter--
        localStorage.setItem('userCounter' , counter)
        spanCounter.innerText = counter
    }else{
        counter = 0
    }
    
}

let returnCounter = ()=>{
    counter = localStorage.getItem('userCounter')
    spanCounter.innerText = counter
    h4.style.background='green'
    h4.style.color='white'
    if(counter<1){
        h4.style.background='black'
        h4.style.color='white'
    }
}
returnCounter()