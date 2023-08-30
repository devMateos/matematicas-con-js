const calculateButton = document.querySelector("#calculate-button");
let message = document.querySelector("#message");
const price = document.querySelector("#price");
const discount = document.querySelector("#discount");

calculateButton.addEventListener("click", calculateDiscount);

function calculateDiscount() {
    const p = Number(price.value);
    const d = Number(discount.value);

    if (p === 0 || d === 0) {
        alert("Introduce todos los datos");
    } else if (d > 100) {
        alert("El porcentaje de descuento no es válido");
    } else {
        let finalPrice = ((p * (100 - d)) / 100);
        message.innerText = `El precio final es ${finalPrice}€`;
    }
}