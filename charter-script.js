if ( document.location.href.includes('graduated-pj')) {
    let display = document.querySelector('.pj-3d');
    display.classList.remove('hide');
} else if ( document.location.href.includes('digitalCv-pj')) {
    let display = document.querySelector('.web-cv');
    display.classList.remove('hide');
} else if ( document.location.href.includes('group-3d')) {
    let display = document.querySelector('.pj-group');
    display.classList.remove('hide');
}