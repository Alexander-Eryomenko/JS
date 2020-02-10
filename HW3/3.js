//imperative array fill 3
var arr = [];
arr[0] = prompt('Ввести что-нибудь');
arr[1] = prompt('Ввести что-нибудь');
arr[2] = prompt('Ввести что-нибудь');
arr[3] = prompt('Ввести что-нибудь');
console.log(arr);

//while confirm
var r = confirm("Введите")
while (r != true){
    if(r === true) break;
}

//array fill

var arr1 = [];
while(prompt !== null){
    var i = prompt('Заполняем массив');
    arr1.push(i);
    if(i == null) break;
}

//array fill nopush

var arr1 = [];
while(prompt !== null){
    var i = prompt('Заполняем массив');
    arr1.splice(0,0, prompt('Добавляем значения'));
    if(i == null) break;
}



var arr = [];

arr.splice(0,0, prompt('Добавляем значения'));




