'use strict';

function test(str) {
  if (typeof str !== 'string') {
    alert('аргумент не строка');
    return;
  }

  str = str.trim();
  return str.length > 30 ? str.slice(0, 30) + '...' : str;
  }

// console.log(test('   Приветвыра ывао шловыалдвфоалдофвдлф фдокфдшодфлу   '));