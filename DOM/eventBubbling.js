//EVENT BUBBLING ((putting the event listening on a child element and going or "bubbling" up the DOM))

// document.querySelector('.card-title').addEventListener('click', 
// function(){
//     console.log('card title')
// })

// document.querySelector('.card-content').addEventListener('click', 
// function(){
//     console.log('card content')
// })

// document.querySelector('.card').addEventListener('click', 
// function(){
//     console.log('card')
// })

// document.querySelector('.col').addEventListener('click', 
// function(){
//     console.log('col')
// })

//EVENT DELEGATION (putting the event listening on a parent element and going down the DOM)
//find the element you want to find using e.target to see what you're clicking on

// const delItem = document.querySelector('.delete-item');

// delItem.addEventListener('click', deleteItem);

document.body.addEventListener('click', deleteItem)

function deleteItem(e){
    // console.log(e.target)
    // if(e.target.parentElement.className === 'delete-item secondary content'){
    //     console.log('this aint it chief')
    // }

    //we use contains here instead of className, as className could change and it would no
    //target the right element
    if(e.target.parentElement.classList.contains('delete-item')){
        console.log('yeet');
        e.target.parentElement.parentElement.remove();
    }
}