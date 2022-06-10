'use strict';

const submitBtn = document.querySelector('button'),
output = document.querySelector('.output'),
json = document.querySelector('.json'),
paramsection = document.querySelector('.paramsection'),
parameters = document.querySelector('.parameters'),
jsonData = document.querySelector('.jsonData'),
customParameter = document.querySelector('.customParameter'),
contentType = document.getElementsByName('content'),
postType = document.querySelector('.postType'),
getType = document.querySelector('.getType'),
radioContentType = document.querySelector('input[name="content"]:checked').value;
;


console.log(radioContentType);
console.log();

if (radioContentType.checked) {
    json.style.display = "block";
}

if(radioContentType.checked){
    paramsection.style.display = "block";
    console.log('check');
}


submitBtn.addEventListener('click' , () => {
    output.style.display = 'block';
});