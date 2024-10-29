// document.getElementById('cow1').onclick = ()=>{
//     alert('cow1 clicked')
// } 
// document.getElementById('images').addEventListener('click' , function(e){
//     console.log("Images clicked")
// } ,false)
// document.getElementById('cow2').addEventListener('click' , function(e){

//     console.log("cow2 clicked")
//     e.stopPropagation(); //It will stops the propogation of event

//     e.defaultPrevented(); //It prevents the default function of event
// } ,true)//false is one of the default argument here It can be written and cannot be, there are some exception available where we have to pass false/true as a third argument
//Event propogation - If two events or more event are associated with an element then they are propogation from child to parent if the third parameter is false in the eventlistener 
//Its depends on the value of third parameter of eventlistener of parent

document.querySelector('#images').addEventListener('click', function(e){
    console.log(e.target.tagName);
    if (e.target.tagName == 'IMG') {
        let remove = e.target.parentNode;
        remove.remove();
    }
    // remove.parentNode.removeChild(remove)
})

