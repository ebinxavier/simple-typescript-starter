import { Big, SMA } from 'trading-signals';

const sma = new SMA(3);

// You can add numbers individually:
sma.update(40);
sma.update(30);
sma.update(20);

// You can add multiple numbers at once:
sma.updates([20, 40, 80]);

// You can add strings:
sma.update('10');

// You can replace a previous value (useful for live charts):
sma.update('40', true);

// You can add arbitrary-precision decimals:
sma.update(new Big(30));

// You can get the result in various formats:
console.log(sma.getResult().toFixed(2)); // "40.00"
console.log(sma.getResult().toFixed(4)); // "40.0000"
