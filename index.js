const batteryBatches = [4, 5, 3, 4, 4, 6, 5];
// Code your solution here

// const totalBatteries = batteryBatches.reduce(function(batteryBatches, currentBat) {
//     if (currentBat in batteryBatches) {
//         batteryBatches[currentBat]++;
//     } else {
//         batteryBatches[currentBat] = 1;
//     }
//     return batteryBatches;
//   },
// );
// function reducer(accumulator, batteryBatches){
//     for(let bat in batteryBatches){
//         bat
//     }
//     // return accumulator += 
// }

// //let totalBatteries = batteryBatches.reduce(reducer,0);

const totalBatteries = batteryBatches.reduce(function(total, batches){
    return batches + total
    }
  )