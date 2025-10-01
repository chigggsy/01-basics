const el_clothingColor = document.querySelector("#clothing-color");
const el_food = document.querySelector("#food");
const el_submit = document.querySelector("#submit-button");
const el_bandName = document.querySelector("#band-name-text");

function generateBandName(clothingColor, lastFoodEaten) {
    let bandName = "";

    function capitalizeWord(word) {
        if (typeof word === "number") {
            return word.toString();
        }
        if (typeof word !== "string" || word === null) {
            return "";
        }

        return word.charAt(0).toUpperCase() + word.slice(1).toLocaleLowerCase();
    }

    bandName =
        "The " +
        capitalizeWord(clothingColor) +
        " " +
        capitalizeWord(lastFoodEaten);

    return bandName;
}

el_submit.addEventListener("click", function (e) {
    e.preventDefault();
    e.stopPropagation();

    el_bandName.textContent = generateBandName(
        el_clothingColor.value,
        el_food.value
    );
});
