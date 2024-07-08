const input = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const output = document.getElementById("output");

convertBtn.onclick = updateOutput;
output.style.display = "none";

input.addEventListener('keypress', (e) => {
    if (e.key == "Enter") updateOutput();
})

function updateOutput() {
    let num = input.value;
    output.style.display = "block";
    if (isNaN(num) || num === '') {
        output.innerText = "Please enter a valid number";
        return;
    }
    output.innerText = toRoman(num);
}

// int -> string
function toRoman(num) {

   
    if (num == 0) {
        return '';
    }

    else {
    if (num < 0) return "Please enter a number greater than or equal to 1";
    else if (num >= 4000) return "Please enter a number less than or equal to 3999";

    else if (num >= 1000) {
        return 'M'.repeat(Math.floor(num / 1000)) + toRoman(num % 1000);
    }
    else if (num >= 900) {
        return 'CM'.repeat(Math.floor(num / 900)) + toRoman(num % 900);
    }
    else if (num >= 500) {
        return 'D'.repeat(Math.floor(num / 500)) + toRoman(num % 500);
    }
    else if (num >= 400) {
        return 'CD'.repeat(Math.floor(num / 400)) + toRoman(num % 400);
    }
    else if (num >= 100) {
        return 'C'.repeat(Math.floor(num / 100)) + toRoman(num % 100);
    }
    else if (num >= 90) {
        return 'XC'.repeat(Math.floor(num / 90)) + toRoman(num % 90);
    }
    else if (num >= 50) {
        return 'L'.repeat(Math.floor(num / 50)) + toRoman(num % 50);
    }
    else if (num >= 40) {
        return 'XL'.repeat(Math.floor(num / 40)) + toRoman(num % 40);
    }
    else if (num >= 10) {
        return 'X'.repeat(Math.floor(num / 10)) + toRoman(num % 10);
    }
    else if (num >= 9) {
        return 'IX'.repeat(Math.floor(num / 9)) + toRoman(num % 9);
    }
    else if (num >= 5) {
        return 'V'.repeat(Math.floor(num / 5)) + toRoman(num % 5);
    }
    else if (num >= 4) {
        return 'IV'.repeat(Math.floor(num / 4)) + toRoman(num % 4);
    }
    else if (num >= 1) {
        return 'I'.repeat(num);
    }
}
}