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

const sumTwoSmallestNumbers = (numbers) => numbers.sort((prev, curr) => prev - curr).slice(0, 2).reduce((prev, curr) => prev + curr, 0)

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

function getCount(str) {
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

const disemvowel = (str) => str.replace(/[aeiouAEIOU]/g, "")

const getMiddle = (s) => {
  let res = s.length % 2 === 0 ? "even" : "odd"
  let num = res === "even" ? (s.length) / 2 : (s.length + 1) / 2
  return res === "even" ? s.charAt(num - 1) + s.charAt(num) : s.charAt(num - 1)
}

// const accum = (s) => {
//   let res = ""
//   let word = ""
//   Array.from(s).forEach(function (letter, index) {
//     res += s.charAt(index).repeat(index + 1)
//     console.log(res)
//   })
//   for (let i = 0; i < Array.from(s).length; i++) {
//     word = $res.charAt(i).repeat(i + 1)
//   }
// }

const findShort = (s) => s.split(" ").sort((prev, curr) => prev.length - curr.length)[0].length
