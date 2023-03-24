function FarenhightToCelcias(farenhight) {
    const cels = farenhight -32;
    const cel = cels * 5/9;
    return cel;
}
const far = 12;
const faren = FarenhightToCelcias(far)
console.log(faren)