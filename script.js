const nextPerson = document.getElementById('next__person')
const sectionCenter = document.getElementById('section__center')
const listItem = document.querySelector('.list__item')
const numberPerPage = 3;
var pageNumber = 1;
var numberOfPages = 10;


const fetchPost = async (pageNumber)=>{
    const response = await fetch(`./data.json`);
    const data = await response.json();
    sectionCenter.innerHTML = "";
    data.slice(pageNumber*numberPerPage-numberPerPage, pageNumber*numberPerPage).forEach((item, index)=>{
        sectionCenter.innerHTML += `<div class="data__container">
        <div class="number__container">
        <h2>${numberPerPage*(pageNumber-1)+ index+1}</h2>
        </div>
        <div class="name__location__container">
        <p class="name">Name: ${item.name}</p>
        <p class="location">Location: ${item.location}</p>
        </div>
        </div>`
    })
    if(pageNumber !== 10){
        listItem.innerHTML = `currently ${numberPerPage} people showing`
        console.log('hii');
    }else if(pageNumber === 10){
        listItem.innerHTML = `currently ${(data.length)- (Math.floor((data.length)/numberPerPage)*numberPerPage)} people showing`
        console.log('byy');
    }
}
fetchPost()
const initialDisplay = async (pageNumber)=>{
    const response = await fetch(`./data.json`);
    const data = await response.json();
    sectionCenter.innerHTML = "";
    data.slice(pageNumber*numberPerPage-numberPerPage, pageNumber*numberPerPage).map((item, index)=>{
        sectionCenter.innerHTML += `<div class="data__container">
        <div class="number__container">
        <h2>${index+1}</h2>
        </div>
        <div class="name__location__container">
        <p class="name">Name: ${item.name}</p>
        <p class="location">Location: ${item.location}</p>
        </div>
        </div>`
    })
}
initialDisplay()


window.addEventListener('DOMContentLoaded', ()=>{
    initialDisplay(1)
})

nextPerson.addEventListener('click', (e)=>{
    e.preventDefault();
    if(pageNumber < numberOfPages){
        pageNumber++;
        fetchPost(pageNumber)
    }else if(pageNumber === numberOfPages){
        alert('No more user left')
    }
})
// listItem.innerHTML = `currently ${}`
