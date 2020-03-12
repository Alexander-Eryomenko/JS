var letters = []
var str = "Backend As A Service"
var arrStr = str.split(' ')
for ( var i = 0; i < arrStr.length; i++ ){
    letters.push (arrStr[i][0])
}
console.log(letters)
var lettersStr = letters.join (',')
console.log (lettersStr)



function tip (type) {
    if (typeof type === 'number'){
       console.log (new Date ())
    }
    else {
        console.log ("Неверный тип данных")
    }
}
tip (5)
tip ('5')

