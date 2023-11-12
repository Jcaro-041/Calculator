// (0°C × 9/5) + 32 = 32°F
window.onload = init();

function init(){
    const C = document.getElementById("C");
    Btn.onclick = onBtnClick;
}

function onBtnClick(){
    F.value = parseFloat((C.value * (9/5)) + 32);
}