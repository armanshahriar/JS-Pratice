const lyrics = "Hamne akhon se dekha nahi ha magar unki taswir sine me moujod hay"

const doseExist = lyrics.includes("Hamne")
console.log(doseExist)

const ham = "Hamne"
const lowerCase = lyrics.toLocaleLowerCase()
const DoseExist = lowerCase.includes(ham)
console.log(DoseExist)

console.log(lyrics.indexOf("akhon"))
if (lyrics.indexOf("akhon") !== -1) {
    console.log("Exist")
}
else{
    console.log("Not Exist")
}

console.log(lyrics.startsWith("Hamne"))