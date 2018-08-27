import './index.css';
import numeral from 'numeral';

const courseValue = numeral(2000).format('$0,0.00');

/* eslint-disable no-console */
console.log(`I would pay ${courseValue} for this awesome video course`);
