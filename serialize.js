// средний коэффициент сжатия-> 106%


// для соблядения четкого формата при Сериализации, дополняем каждое число ведущими нулями.
const serialize = (arr) => {
  const maxNum = Math.max(...arr.map(num => num.toString().length));
  return arr.map(num => num.toString().padStart(maxNum, '0')).join(',');
}

// для обратного преобразования сериализованной строки в исходную структуру данных
const deserialize = (str) => {
    return str.split(',').map(numStr => parseInt(numStr, 10));
}

const tests = [
  //простейшие короткие    
  [1, 2, 3, 12, 345, 12331],
  //случайные
  Array.from({ length: 50 }, () => Math.floor(Math.random() * 100) + 1),
  Array.from({ length: 100 }, () => Math.floor(Math.random() * 1000) + 1),
  Array.from({ length: 500 }, () => Math.floor(Math.random() * 10000) + 1),
  Array.from({ length: 1000 }, () => Math.floor(Math.random() * 100000) + 1),
  //граничные
  [1, 2, 3, 4, 5, 6, 7, 8, 9], 
  [10, 20, 30, 40, 50, 60, 70, 80, 90], 
  [100, 200, 300, 400, 500, 600, 700, 800, 900],
  //каждого числа по 3(900 макс)
  Array.from({ length: 900 }, (_, index) => Math.floor(index / 3) * 100+100)
];

tests.forEach(test => {
  const original = JSON.stringify(test);
  const serialized = serialize(test);
  const compressionRatio = (serialized.length / original.length) * 100;

  console.log(`Original: ${original}`);
  console.log(`Serialized: ${serialized}`);
  console.log(`Compression Ratio: ${compressionRatio.toFixed(2)}%`);
  console.log('\n');
});
