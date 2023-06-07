
const data = "Artisan is the command-line interface included with Laravel. It provides a number of helpful commands that can assist you while you build your application. To view a list of all available Artisan commands, you may use the list command:";


function freq(str)
{
 const words = str.split(' ')
 const freqObj = {}
 for (let i = 0; i < words.length; i++) {
  freqObj[words[i]] = freqObj[words[i]] + 1 || 1
 }
 const sorted = Object.entries(freqObj).sort((a, b) => b[1] - a[1])
 return sorted[0][0]
}

console.log(freq(data));