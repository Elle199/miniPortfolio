$(document).ready(function(){
    this.projectNum = document.querySelector('#p-num');
    this.projectName = document.querySelector('#p-name');;
    this.projectArtist = document.querySelector('#p-artist');;
    animateIn();
    animateOut();
});

function animateIn(){
    $('#crossbar1').animate({
        width:'15%',
        left:'0'
    },1000).animate({
        width: '0',
        left: '15%'
    },1000);
    $('#crossbar2').animate({
        width:'20%',
        left:'0'
    },1000).animate({
        width: '0',
        left: '20%'
    },1000);
    $('#crossbar3').animate({
        width:'12%',
        left:'0'
    },1000).animate({
        width: '0',
        left: '12%'
    },1000);
}

function animateOut() {
    $('#crossbar1').delay(500).animate({
        width: '15%',
        left: '0',
    },1000).animate({
        width:'0',
        left: '-15%'
    },1000);
    $('#crossbar2').delay(500).animate({
        width: '20%',
        left: '0'
    },1000).animate({
        width:'0',
        left: '-20%'
    },1000);
    $('#crossbar3').delay(500).animate({
        width: '12%',
        left: '0'
    },1000).animate({
        width:'0',
        left: '-12%'
    },1000);
}
