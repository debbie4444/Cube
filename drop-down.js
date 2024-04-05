document.addEventListener('DOMContentLoaded', function() {
    const firstDescription = document.getElementById('description1');
    firstDescription.style.display = 'block'; 
});

const toggleButtons = document.querySelectorAll('.toggleButton');

toggleButtons.forEach((toggleButton, index) => {
    toggleButton.addEventListener('click', function() {
        const detailsList = document.querySelectorAll('.details'); 
        const imageContainers = document.querySelectorAll(".image");
        if (detailsList[index].style.display === 'none') {
            detailsList[index].style.display = 'block';
            imageContainers[index].style.display = 'block';
        } else {
            detailsList[index].style.display = 'none';
        }
        
    });
});

const confirmButtons = document.querySelectorAll('.confirmButton');

confirmButtons.forEach((button, index) => {
    button.addEventListener('click', function() {

        const descriptions = document.querySelectorAll('.description'); 
      
        descriptions[index].classList.add('hide');
        setTimeout(() => {
            descriptions[index].classList.remove('hide');
            descriptions[index].style.display = 'none';
            
            if (index < descriptions.length - 1) {
                descriptions[index + 1].style.display = 'block';
                
            }
            
        }, 1000);
    });
   
});







function getValue(input,index) {
    fromValue= input.value;
    

    params[index-1] = fromValue;

    var imgElement 
    switch(index) {
        case 1:
            imgElement = document.getElementById('img1');
            imgElement.src = 'pic/'+fromValue+'.png';
         break;
        case 15:
            imgElement = document.getElementById('img5');
            imgElement.src = 'pic/'+fromValue+'.png';
         break;
        default:
         
     }
    
    
    
}


function submitForm() {

    
    var nextPageURL = "anwser.html?params=" + params.join("--");

    window.location.href = nextPageURL;
}