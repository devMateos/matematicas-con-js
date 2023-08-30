const coupon = document.querySelector("#coupon");
const price = document.querySelector("#price");
const calculateButton = document.querySelector("#calculate-button");

const couponCodes = [
    {
        code: "descuentaso",
        discount: 25
    },
    {
        code: "15disc",
        discount: 15
    },
    {
        code: "hola",
        discount: 5
    }
];

calculateButton.addEventListener("click", calculateDiscount);


function calculateDiscount() {

    let validCoupon = couponCodes.find((element) => {
        return element.code === coupon.value;
    });
    if(validCoupon) {
        let finalPrice = ((100 * (100 - validCoupon.discount)) / 100);
        price.innerText = `${finalPrice}`;
        console.log(validCoupon);
    } else {
        alert("Cupón no válido");
    }
}