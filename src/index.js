const electron = require('electron')
const path = require('path')
const BrowserWindow = electron.remote.BrowserWindow

const stockBtn = document.getElementById('stockBtn')
const authBtn = document.getElementById('authBtn')
const priceCalBtn = document.getElementById('priceCalBtn')
const leasingBtn = document.getElementById('leasingBtn')
const billMailBtn = document.getElementById('billMailBtn')
const customerBtn = document.getElementById('customerBtn')
const reservationBtn = document.getElementById('reservationBtn')

const stockR = document.getElementById('stockResponse')
const authR = document.getElementById('authResponse')
const priceCalR = document.getElementById('priceResponse')
const leasingR = document.getElementById('leasingResponse')
const billMailR = document.getElementById('billMailResponse')
const customerR = document.getElementById('customerResponse')
const reservationR = document.getElementById('reservationResponse')

stockBtn.addEventListener('click', function (event) {
    fetch('https://ppl-stock.herokuapp.com/')
        .then(function (response) {
            return response.text();
        }).then(function (text) {
            // <!DOCTYPE ....
            console.log(text);
            stockR.innerText = text;
        });
})

authBtn.addEventListener('click', function (event) {
    fetch('https://ppl-auth.herokuapp.com/')
        .then(function (response) {
            return response.text();
        }).then(function (text) {
            // <!DOCTYPE ....
            console.log(text);
            authR.innerText = text;
        });
})

priceCalBtn.addEventListener('click', function (event) {
    fetch('https://ppl-pricecalculator.herokuapp.com/')
        .then(function (response) {
            return response.text();
        }).then(function (text) {
            // <!DOCTYPE ....
            console.log(text);
            priceCalR.innerText = text;
        });
})

leasingBtn.addEventListener('click', function (event) {
    fetch('https://ppl-leasing.herokuapp.com/')
        .then(function (response) {
            return response.text();
        }).then(function (text) {
            // <!DOCTYPE ....
            console.log(text);
            leasingR.innerText = text;
        });
})

billMailBtn.addEventListener('click', function (event) {
    fetch('https://ppl-billingandmailing.herokuapp.com/')
        .then(function (response) {
            return response.text();
        }).then(function (text) {
            // <!DOCTYPE ....
            console.log(text);
            billMailR.innerText = text;
        });
})

customerBtn.addEventListener('click', function (event) {
    fetch('https://ppl-customer.herokuapp.com/')
        .then(function (response) {
            return response.text();
        }).then(function (text) {
            // <!DOCTYPE ....
            console.log(text);
            customerR.innerText = text;
        });
})

reservationBtn.addEventListener('click', function (event) {
    fetch('https://ppl-reservation.herokuapp.com/')
        .then(function (response) {
            return response.text();
        }).then(function (text) {
            // <!DOCTYPE ....
            console.log(text);
            reservationR.innerText = text;
        });
})

