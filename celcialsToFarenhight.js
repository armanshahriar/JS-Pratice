function celciasToFarenhight(celcias) {
    const cels = celcias * 9/5;
    const cel = cels + 32;
    return cel;
}
const far = 12;
const faren = celciasToFarenhight(far)
console.log(faren)