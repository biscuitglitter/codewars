function even_or_odd(number) {
    if (number % 2 === 0) {
      return "Even"
    } 
      if (number % 2 !== 0) {
      return "Odd"
    }
}
  
function positiveSum(arr) {
    return arr.filter(num => num > 0).reduce((prev, curr) => prev + curr, 0)}
   
const opposite = (number) => (number < 0) ? -number : -number

const makeNegative = (num) => (num < 0) ? num : -num

const filter_list = (l) => l.filter(item => Number.isInteger(item))

const sumTwoSmallestNumbers = (numbers) => numbers.sort((prev, curr) => prev - curr).slice(0,2).reduce((prev, curr) => prev + curr, 0)

const repeatStr = (n, s) => (n < 0) ? s.repeat(-n) : s.repeat(n)

const twoSum = (numbers, target) => {
  for (let i = 0; i < numbers.length; i++) {
      for (let k = 0; k < numbers.length; k++) {
              if (numbers[i] + numbers[k] === target && k !== i) {
                return [i, k]
              }
    }
  }
}

function getCount (str) {
  let vowelsCount = 0;
  let array = Array.from(str)
  array.forEach(letter => {
      if (letter.includes("a")) {
          vowelsCount = vowelsCount + 1
      }
      if (letter.includes("e")) {
          vowelsCount = vowelsCount + 1
      }
      if (letter.includes("i")) {
          vowelsCount = vowelsCount + 1
      }
      if (letter.includes("o")) {
          vowelsCount = vowelsCount + 1
      }
      if (letter.includes("u")) {
          vowelsCount = vowelsCount + 1
      }
  })
    return vowelsCount;
}
  
const getCount = (str) => {
  let vowelsCount = 0
  for (i in str) {
  switch (str[i]) {
  case "a": 
  case "e":
  case "o":
  case "i": 
  case "u":
  vowelsCount++
  break;
  }
  }
  return vowelsCount
}

const getCount = (str) => {
  let vowelsCount = 0
  let res = str.match(/[aeiou]/g)
  if (res === null) return vowelsCount 
  res.forEach(x => vowelsCount++)
      return vowelsCount
  }