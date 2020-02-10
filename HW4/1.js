var persons = [  //декларативно объявляем массив, в котором хранятся объекты
    {
        name : "Николай",
        surname : "Волков",
        age : "20",
        fathername : "Максимович",
    },
    {
        name : "Александр",
        surname : "Александров",
        sex : "male",
    },
    {
        name : "Олег",
        surname : "Соколов",
        education : "high",
    },
];

for ( var person of persons){
    // console.log(person)
}
    // for (var key in person){
    //     console.log(key)
    // }
    // var header = Object.keys(person)
    // console.log(header)
    var header = {...person};
        console.log(header)
    // for(var key in header){
    //     console.log(header[key])
    // }





document.write(`<table style="border: 1px solid black">`);
document.write(`<tr>`);
document.write(`<th>  ${header[key]}  </th>`);
document.write(`</tr>`)
document.write(`</table>`);