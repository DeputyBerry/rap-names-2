const express = require('express');
const app = express();
const PORT= 8000;


const rappers = {
    '21 Savage':{
        'birthName': 'Shéyaa Bin Abraham-Joseph',
        'birthDate': 'October 22, 1992',
        'birthPlace': 'London, England',
        'birthSign': 'Libra',
        'age': 29,
    },

    'Chance the Rapper':{
        'birthName': 'Chancelor Jonathan Bennett',
        'birthDate': 'April 16, 1993',
        'birthPlace': 'Chicago, Illinois',
        'birthSign': 'Aries',
        'age': 28,
    },

    'Eminem':{
        'birthName': 'Marshall Bruce Mathers III',
        'birthDate': 'October 17, 1972',
        'birthPlace': 'St. Joseph, Missouri',
        'birthSign': 'Libra',
        'age': 49,
    },

    'Dylan':{
        'birthName': 'Dylan',
        'birthDate': 'October 17, 1972',
        'birthPlace': 'Dylan',
        'birthSign': 'Dylan',
        'age': 'Dylan',
    },
}

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/api/:rapperName',(req, res) => {
    const rapperName = req.params.rapperName;
    if(rappers[rapperName]){
        res.json(rappers[rapperName]);
    } else {
        res.json({error: 'Rapper not found'});
    }
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});