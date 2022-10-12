console.log('Start')
console.log('Start2')


window.setTimeout(function() {
    console.log('Inside timeout, after 2500 seconds')
}, 2500)

function timeout2second() {
    console.log('After 2 second')
}

setTimeout(timeout2second, 2000)

console.log('End')


/*
$.on('button', 'click', function(){
    console.log('clicked')
})


*/
/*console.log("Start 1");*/
console.log("Start");
/*
function timeout2() {
    console.log('After 2 sec')
}*/
/*setTimeout(timeout2, 2000)*/
setTimeout(function timeout() {
    console.log("inside settimeout");
}, 0);

console.log("End");