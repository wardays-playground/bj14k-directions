// Array Methods
function foreach(object, callback) {
    if (Array.isArray(object)) {
        foreachArray(object, callback);
    } else {
        foreachObj(object, callback);
    }
}

function foreachArray(arr, fn) {
    for (let i = 0; i < arr.length; i++) {
        fn(arr[i], i, arr);
    }
}

function foreachObj(obj, fn) {
    var array = Object.keys(obj);
    for (let i = 0; array.length > i; i++) {
        fn(array[i], obj[array[i]], i, obj);
    }
}

// Object Methods

function every(original, fn) {
    let result = 0;
    foreach(original, function (key, value) {
        if (!fn(key, value)) {
            result += 1;
        }
    });
    return result > 0 ? false : true;
}

function areEquals(first, second) {
    if ((Object.prototype.toString.call(second) || Object.prototype.toString.call(first)) !== '[object Object]') {
        throw new Error('not an object');
    }
    if (Object.keys(first).length !== Object.keys(second).length) {
        return false;
    }
    let result = every(first, function (key, value) {
        return second[key] === value;
    })
    return result;
}

function includesObject(array, obj) {

    var result = 0;
    if (array.length === 0 || !Array.isArray(array)) { return false; };
    foreach(array, function (e) {
        if (areEquals(obj, e)) {
            result = 1;
        }
    });
    return result === 1 ? true : false;
}

function removeDuplicates(params) {
    var result = [];
    foreach(params, function (e) {
        if (!includesObject(result, e)) {
            result.push(e);
        }
    });
    return result;
}


const params = [
    {
        name: 'Adress7',
        country: 'Spain',
        city: 'Barcelona',
        street: 'Diagonal',
        number: '605'
    },
    {
        name: 'Adress1',
        country: 'Spain',
        city: 'Barcelona',
        street: 'Diagonal',
        number: '608'
    },
    {
        name: 'Adress5',
        country: '',
        city: '',
        street: '',
        number: '123'
    }
];

/* Regresar la cantidad de direcciones con al menos una propiedad vacía */

function adressEmpty(array) {
    let arrayEmptyValues = [];
    array.forEach((element) => {
        foreach(element, (_, value) => {
            if (!value.length) {
                arrayEmptyValues.push(element);
            }
        });
    });
    return removeDuplicates(arrayEmptyValues).length;
}

// console.log(adressEmpty(params));

/* Retornar el array quitando los valores repetidos */

function repeatValues(array) {
    return removeDuplicates(array);
}

// console.log(repeatValues(params));

/* Ordenar los elementos Ascendemente/Descendentemente según una propiedad (nombre, país, etc.) 
   Se deberá poder introducir en la función cualquier propiedad. */

function compare(property, isAscendent) {
    if (isAscendent) {
        return function (a, b) {
            if (a[property] < b[property])
                return -1;
            if (a[property] > b[property])
                return 1;
            return 0;
        }
    }
    return function (b, a) {
        if (a[property] < b[property])
            return -1;
        if (a[property] > b[property])
            return 1;
        return 0;
    }
}

function ordenedElementsArray(array, property, isAscendent) {
    return array.sort(compare(property, isAscendent));
}

// console.log(ordenedElementsArray(params, 'name', true));

/*  Filtrar direcciones por una o más propiedades: nombre, país, ciudad, calle o número. */

function filteredDirections(array, values) {
    return array.filter(el => {
        var keys = Object.keys(el);
        for (let i = 0; i < keys.length; i++) {
            if (values.includes(el[keys[i]])) {
                return el;
            }
        }
    })
}

// console.log(filteredDirections(params, ['Adress1']));

/*
    Retornar la dirección con el número más alto.
    Null, undefined o vacío no se mostrarán.
*/

function returnValueNum(array, isGreat) {
    return array.sort(compare('number', isGreat)).pop()
}

// console.log(returnValueNum(params, true));

/* 
    Retornar la dirección con el número más bajo
    Null, undefined o vacío no se mostrarán.
*/

// console.log(returnValueNum(params, false));


/* 
    Contar el número de coincidencias dado una o más propiedades: nombre, país, ciudad, calle o número.
*/

function groupBy(array) {
    var obj = array.reduce((obj, item) => {
        Object.keys(item).forEach((e, i) => {
            obj[e] = obj[e] || [];
            obj[e].push(i);
        })
        return obj;
    }, {});

    var keys = Object.keys(obj);
    var modObj = {};
    keys.forEach(e => {
        modObj[e] = obj[e].length;
    })

    return modObj;
}

function coincidenceValues(array, values) {
    var arr = [];
    array.forEach((e) => {
        var keys = Object.keys(e);
        for (let i = 0; i < keys.length; i++) {
            if (values.includes(e[keys[i]])) {
                var obj = {};
                obj[keys[i]] = e[keys[i]];
                arr.push(obj);
            }
        }
    })
    return groupBy(arr);
}


console.log(coincidenceValues(params, ['Barcelona', 'Diagonal']));