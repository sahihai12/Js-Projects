'use strict';



const addcardbutton = document.querySelectorAll('.mainlist .addCard');

addcardbutton.forEach(btns => {
    btns.addEventListener('click', () => {
        let formplacement = btns.previousElementSibling;
        let form = `<div class="addCardDiv">
                        <form>
                            <input type="text" class="titleValue" placeholder="Enter Title">
                            <input type="text" class="descValue" placeholder="Enter Desc">
                            <button class="submitdata" type="submit"><i class="fas fa-circle-right"></i></button>
                        </form>
                    </div>`;
        formplacement.insertAdjacentHTML('beforeend', form);  
        submit()
    })
});

function submit() {
    let forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            let titleVal = form.children[0];
            let titleDes = form.children[1];
            // console.log(titleVal.value);
            // console.log(titleDes.value);
            create(titleVal.value , titleDes.value);
        });
    });
}


const data = fetch('./mvc/data.json').then(response => response.json()).then(da => console.log(da)).catch(e => console.log(e)); 
// console.log(dataBase.Todo);
