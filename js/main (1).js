function center (inner) {

    inner.style.marginTop = (screen.availHeight/2 - inner.clientHeight/2) + 'px';
}

function main() {
    
    if (screen.availHeight > document.getElementsByTagName('body')[0].clientHeight) {
        
        center(document.getElementById('container'));
    }
};

window.onload = main;
window.onresize = main;
