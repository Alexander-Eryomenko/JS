var notebook = {
    brand: prompt('Введите производителя'),
    owner: prompt('Укажите имя владельца'),
    type:  prompt('Введите серийный номер'),
    model: prompt('Введите модель'),
    ram: +prompt('Введите кол-во оперативной памяти'),
    size: +prompt('Введите размер дисплея'),
    weight: +prompt('Введите вес'),
    resolution: {
        width: +prompt('Введите кол-во пикселей по ширине'),
        height: +prompt('Введите кол-во пикселей по высоте'),
    },
};

var phone = {
    owner: prompt('Укажите имя владельца'),
    brand: prompt('Введите производителя'),
    model: prompt('Введите модель'),
    ram: +prompt('Введите кол-во оперативной памяти'),
    color: prompt('Укажите цвет'),
};

var person = {
    smartphone: prompt('Укажите ваш мобильный телефон'),
    laptop: prompt('Укажите Ваш ноутбук'),
    name: prompt('Введите имя'),
    surname: prompt('Введите фамилию'),
    married: confirm('Если согласны нажмите "Ok"'),
};

console.log(person.smartphone.owner.laptop.owner.smartphone == person.smartphone);