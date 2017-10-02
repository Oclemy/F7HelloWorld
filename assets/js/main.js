/*
 -Initialize your app
 -Export selectors engine
 */
var myApp = new Framework7();
var $$ = Dom7;

var mainClass=function()
{
    this.initializeApp=function()
    {
        $$('#cyanBtn').on('click', function () {
            myApp.alert('Cyan Clicked');
        });
        $$('#tealBtn').on('click', function () {
            myApp.alert('Teal Clicked');
        });
    }
}

m=new mainClass();
m.initializeApp();