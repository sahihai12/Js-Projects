import {dataBase} from './data.json';

let id = 1; 
export function create(tit , desc) {
    let today = new Date;
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    let date = today.getDate()+ ' ' + months[today.getMonth()] + ', ' + today.getFullYear();
    let time = today.getHours() + ":" + today.getMinutes();
    let fulltitle = tit;
    let desccription = desc;
    let newdata = {
        'id': id++,
        'title': fulltitle,
        'desc':  desccription,
        'date': date,
        'time': time,
    }
    // console.log(dataBase);
    dataBase.Todo.push(newdata)
    // console.log(dataBase);
    show()
}

function show() {
    console.log(dataBase.Todo.length);
}
