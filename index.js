function showHxContent(a) {
    let elem = document.getElementById('title' + a);
    
    if (elem.style.display === 'none') {
        elem.style.display = 'block';
    } else {
        elem.style.display = 'none';
    }
}

function hideAllDivs() {
    document.getElementById('title1').style.display = 'none';
    document.getElementById('title2').style.display = 'none';
}

function alertTitle() {
    let elem = document.getElementById('title');
    alert(elem.value);
}
function saveCookie() {
    let selectElem = document.getElementById('selectColor');
    let valueSelect = selectElem.value;
    let date = new Date();
    date.setTime(date.getTime() + (7 * 24 * 60 * 60 * 1000));
    document.cookie = "color=" + valueSelect + ";expires=" + date.toUTCString();
    alert("Couleur enregistrée : " + valueSelect);
}
function applySaveColor(){
    let cookies = document.cookie;
    let color = null ;
    if (cookies) {
        let cookieArray = cookies.split(';');
        for (let i = 0; i < cookieArray.length; i++) {
            let cookie = cookieArray[i].trim();
            if (cookie.startsWith('color=')) {
                color = cookie.substring('color='.length);
                break;
            }
        }
    }
    if (color) {
        document.body.style.backgroundColor = color;
    }
}