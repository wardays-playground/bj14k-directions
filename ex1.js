var arrMethods = require('./arrMethods');

const params = [
    {
        name: 'Adress1',
        country: 'Spain',
        city: 'Barcelona',
        street: 'Diagonal',
        number: '605'
    },
    {
        name: 'Address2',
        country: 'Spain',
        city: 'Barcelona',
        street: '',
        number: ''
    },
    {
        name: 'Address3',
        country: '',
        city: '',
        street: 'Diagonal',
        number: '123'
    }
];


var messageError = (keys) => {
    return `Faltan los valores de: ${keys.join(', ')}`;
};

var formatedData = (param) => {
    var paramFormated = {};
    var keysNotValue = [];

    arrMethods.foreach(param, (key, value) => {
        if (value.length !== 0) {
            paramFormated[key] = value;
        } else { keysNotValue.push(key); }
    });

    if (!paramFormated.hasOwnProperty('country') || !paramFormated.hasOwnProperty('city')) {
        if (Object.keys(paramFormated).length < 3) { return messageError(keysNotValue); }
        return `${paramFormated['name']}: ${paramFormated['street']} ${paramFormated['number']}`;
    }
    if (!paramFormated.hasOwnProperty('street') || !paramFormated.hasOwnProperty('number')) {
        if (Object.keys(paramFormated).length < 3) { return messageError(keysNotValue); }
        return `${paramFormated['city']}, ${paramFormated['country']} (${paramFormated['name']})`;
    }
    if (paramFormated.hasOwnProperty('name')) {
        return `${paramFormated['name']}: ${paramFormated['street']} ${paramFormated['number']}, ${paramFormated['city']} - ${paramFormated['country']}`;
    } else {
        messageError(keysNotValue);
    }
};

params.forEach(e => console.log(formatedData(e)));
