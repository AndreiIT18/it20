let a;

let b;

b = 1

function obshak() {
    a = document.getElementById('spis').value
    if (a == 1) {
        document.getElementById('perviy_otpravka').classList.toggle('hidden')
        document.getElementById('obshiy').classList.toggle('hidden')
    }
    else if (a == 2) {
        document.getElementById('vtoroy_otpravka').classList.toggle('hidden')
        document.getElementById('obshiy').classList.toggle('hidden')

        // document.getElementById('vtoroy_otpravka').style.display = 'block';
    }
}
function perviy() {
    g = document.getElementById('Name_One').value
    document.getElementById('result').insertAdjacentHTML('beforeend', `|id:${b}| Name: ${g}|`);
    b += 1
    document.getElementById('ID_1').value = b;
    document.getElementById('perviy_otpravka').classList.toggle('hidden');
    document.getElementById('obshiy').classList.toggle('hidden');
}
function vtoroy() {
    g = document.getElementById('Name_Two').value
    document.getElementById('result').insertAdjacentHTML('beforeend', `|id:${b}| Name: ${g}|`);
    b += 1
    document.getElementById('ID_2').value = b;
    document.getElementById('vtoroy_otpravka').classList.toggle('hidden');
    document.getElementById('obshiy').classList.toggle('hidden');
}
