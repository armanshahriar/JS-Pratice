const lyrics = "Hamne akhon se dekha nahi ha magar . Unki taswir sine me moujod hay . Oo jo lakar kalam-e elahi diya . O mohammad (sa.) madine me moujud hay "
console.log(lyrics);
const parts = lyrics.split(" ")
console.log(parts);
const sentence = lyrics.split(".")
console.log(sentence) ;
const char = lyrics.split("")
console.log(char)

const partial = lyrics.slice(9,15)
console.log(partial)
const partial2 = lyrics.substring(9,15)
console.log(partial2)

const lyrics2 =  [
    'Hamne akhon se dekha nahi ha magar ',
    ' Unki taswir sine me moujod hay ',
    ' Oo jo lakar kalam-e elahi diya ',
    ' O mohammad (sa',
    ') madine me moujud hay '
  ]
const partial3 = lyrics2.join(". ")
console.log(partial3)