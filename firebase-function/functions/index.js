const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp({
        apiKey: 'AIzaSyDOO9Zrk4DLP2BnXD-aS0aExOpHSWOs12w',
        authDomain: 'fir-app-exemple.firebaseapp.com',
        databaseURL: 'https://fir-app-exemple.firebaseio.com',
        projectId: 'fir-app-exemple',
        storageBucket: '',
        messagingSenderId: '971022050740',
        appId: '1:971022050740:web:a63eaff77de0afd8'
});

exports.addcard = functions.https.onRequest((request, response) => {
    let card = JSON.parse(request.body);

    admin.database().ref('card').push(card).then(() => {
        response.status(200).send('Gravacao realizada com sucesso')
    }, error => {
        response.status(500).send(error);
    });
});

exports.updateCount = functions.database.ref('/card/{pushId}').onCreate((snapshot, context) => {
    admin.database().ref('card').once('value').then(snap => {
        admin.database().ref('contagem').set(snap.numChildren()).then(() =>{
            return snap.numChildren();
        })
    });
});