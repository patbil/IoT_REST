const { Gpio } = require('onoff');
const GPIO = require('onoff').Gpio;
const PIR = new Gpio(4, 'in', 'both');
const BUZZER = new GPIO(18, 'out', 'both')

// PIR.watch((err, val) => {
//     if(val == 1){
//         console.log("")
//         BUZZER.writeSync(0);
//     } else {
//         BUZZER.writeSync(1);
//     }
// });

// // PIR.watch(function(err, value){
// //     if(value == 1){
// //         console.log("pir")
// //         BUZZER.writeSync(0);
// //     }  else {
// //         console.log("nopir")
// //         BUZZER.writeSync(1);
// //     }
// // });


