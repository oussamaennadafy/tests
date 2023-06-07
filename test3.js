const data = "radar"

const palindrom1 = (str) =>
{
 const firstHalf = str.slice(0, Math.floor(str.length / 2))
 const secondeHalf = str.slice(Math.ceil(str.length / 2))
 return firstHalf === secondeHalf.split('').reverse().join('')
}

const palindrom2 = (str) =>
{
 const mid = Math.floor(str.length / 2)
 for (let i = 0; i < mid; i++) {
  if (str[i] !== str[str.length - i - 1]) return false
 }
 return true
}

console.log(palindrom2(data));