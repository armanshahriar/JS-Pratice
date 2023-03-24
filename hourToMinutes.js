function hourTominutes(hour) {
    const minutes = hour * 60 ;
    return minutes;
}
const rat = 12;
const ratHour = hourTominutes(rat)
console.log(ratHour)