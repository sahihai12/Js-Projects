"use strict";

const submitBtn = document.querySelector("button"),
    json = document.querySelector(".json"),
    addparam = document.querySelector(".add");

let jsonData = document.querySelector(".jsonData input"),
customParameter = document.querySelector(".customParameter input"),
paramsection = document.querySelector(".paramsection");

jsonData.addEventListener("click", () => {
    paramsection.style.display = "none";
    json.style.display = "block";
});

customParameter.addEventListener("click", () => {
    paramsection.style.display = "block";
    json.style.display = "none";
});

addparam.addEventListener("click", () => {
    let data = `<div class="parameters">
    <input type="text" class="parameterKey" placeholder="Key">
    <input type="text" class="parameterValue" placeholder="Value">
    <div class="close"><i class="fas fa-minus"></i></div>
</div>`;
    paramsection.insertAdjacentHTML("beforeend", data);

    let close = document.querySelectorAll('.close');
    close.forEach(cl => {
        cl.addEventListener('click', () => {
            console.log(cl.parentElement.remove());
        })
    });
});

submitBtn.addEventListener("click", () => {
    let url = document.querySelector('.url');
    let request = document.querySelector('input[name="request"]:checked').value;
    let contentType = document.querySelector('input[name="content"]:checked').value;
    let data = {};

    if (contentType == 'customtype') {
        paramsection = document.querySelectorAll('.paramsection .parameters');
        for (const key of paramsection) {
            let key = document.querySelector('.parameterKey').value;
            let value = document.querySelector('.parameterValue').value;
            console.log(`${key} : ${value} `);
        }
        // paramsection.forEach(section => {
        //     console.log(section);
            // let key = document.querySelector('.parameterKey').value;
            // let value = document.querySelector('.parameterValue').value;
            // console.log(`${key} : ${value} `);
        //     // data[key] = value;

        // });
    } else {
        console.log(contentType);
        let textarea = document.querySelector('.jsonforpost').value;
        data = textarea;
    }

    



    // if (url.value) {
    //     if (request == 'get') {
    //         fetch(url).then((respone) => response.json()).then(jsons => outputdisplay(jsons))
    //     } else {
    //         fetch(url, {
    //                 method: request,
    //                 body: JSON.stringify({
    //                     title: 'foo',
    //                     body: 'bar',
    //                     userId: 1907097009,
    //                 }),
    //                 headers: {
    //                     'Content-type': 'application/json; charset=UTF-8',
    //                 },
    //             })
    //             .then((response) => response.json())
    //             .then((jsons) => outputdisplay(jsons));
    //     }
    // } else {
    //     throw new Error('url must be valid')
    // }
});