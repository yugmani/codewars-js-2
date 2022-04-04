// Import stylesheets
import './style.css';

// ******************************************
//Buying a car
// ******************************************

// Let us begin with an example:

// A man has a rather old car being worth $2000. He saw a secondhand car being worth $8000. He wants to keep his old car until he can buy the secondhand one.

// He thinks he can save $1000 each month but the prices of his old car and of the new one decrease of 1.5 percent per month. Furthermore this percent of loss increases of 0.5 percent at the end of every two months. Our man finds it difficult to make all these calculations.

// Can you help him?

function nbMonths(
  startPriceOld,
  startPriceNew,
  savingperMonth,
  percentLossByMonth
) {
  //your code here
  let months = 0;
  let leftOver = 0;
  let saving = 0;
 do {
    months++;
    saving += months * savingperMonth;
    if (months % 2 === 0 ){
      percentLossByMonth +=  percentLossByMonth + (percentLossByMonth/100 * 0.5);
    }

    startPriceOld -= (percentLossByMonth/100 * startPriceOld);

    startPriceNew -= (percentLossByMonth/100 * startPriceNew);      

    leftOver = saving + startPriceOld - startPriceNew;
    
   
  } while (saving + startPriceOld <= startPriceNew) 

    return [months, leftOver];
}

console.log(nbMonths(2000, 8000, 1000, 1.5));
