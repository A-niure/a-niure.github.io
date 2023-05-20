function changeDisplaytoblock() {
    document.getElementById('hiddenResources').style.display="block";
    document.getElementById('see-more').style.display="none";
}


function changeDisplaytohidden() {
    document.getElementById('hiddenResources').style.display="none";
    document.getElementById('see-more').style.display="inline";
}

function taketomyresume() {
    window.location.href="#view-my-resume";
    document.getElementById('my-resume').style['-webkit-box-shadow'] = "10px 5px lightblue";
}


function viewdocument(loc) {
    window.open(loc, '_blank');
}
