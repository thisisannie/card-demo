let cardTriggers = document.getElementsByClassName('card--content--trigger-more');

for(var i=0;i<cardTriggers.length;i++)
{
    cardTriggers[i].addEventListener('click',function(e){
        // Your On Click code
        console.log(e.target.previousElementSibling);
        e.target.classList.toggle("active");
        e.target.previousElementSibling.classList.toggle("active");
    },false);
}

// let myReferenceDiv = document.getElementById('mydiv');
// let prev = myReferenceDiv.previousElementSibling;