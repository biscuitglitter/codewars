function even_or_odd(number) {
    if (number % 2 === 0) {
      return "Even"
    } 
      if (number % 2 !== 0) {
      return "Odd"
    }
}
  
function positiveSum(arr) {
    return arr.filter(num => num > 0).reduce((prev, curr) => prev + curr, 0)
}
   
const opposite = (number) => (number < 0) ? -number : -number

const makeNegative = (num) => (num < 0) ? num : -num

const filter_list = (l) => l.filter(item => Number.isInteger(item))

const sumTwoSmallestNumbers = (numbers) => numbers.sort((prev, curr) => prev - curr).slice(0,2).reduce((prev, curr) => prev + curr, 0)

const repeatStr = (n, s) => (n < 0) ? s.repeat(-n) : s.repeat(n)
