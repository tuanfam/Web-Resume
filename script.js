// Validated email check
const button = document.getElementById('btn-email');
button.addEventListener('click',function() {
    const emailValue = document.getElementById('email').value.toLocaleLowerCase();
    const emailError = document.getElementById('error');
    const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    const content = document.querySelector('.content');
    const submit = document.querySelector('.email-submit');
    const check = regex.test(emailValue);
if (check) {
    content.style.display = 'block';
    submit.style.display = 'none';
    emailError.innerHTML = '';
    console.log(typeof check,check);
} else {
    emailError.innerHTML = '正しいメールアドレス再入力してください！';
    console.log(typeof check,check);
}
});

// Button hover in-out
function mouseHoverIn (element) {
    if ( element.querySelector('.job-content').classList.value.includes('hide'))
    {const viewMore = element.querySelector('.view-more');
    viewMore.classList.remove('hide');}
};
function mouseHoverOut (element) {
    if ( element.querySelector('.job-content').classList.value.includes('hide'))
    {const viewMore = element.querySelector('.view-more');
    viewMore.classList.add('hide');}
};
// Show info by clicking view more
function showInfo (element) {
    const parentElement = element.closest('.job-ctn');
    const showInfo = parentElement.querySelector('.job-content');
    showInfo.classList.remove('hide');
    parentElement.querySelector('.view-more').classList.add('hide');
    parentElement.querySelector('.view-less').classList.remove('hide');
};
// Hide info by clicking view less
function hideInfo (element) {
    const parentElement = element.closest('.job-ctn');
    const showInfo = parentElement.querySelector('.job-content');
    showInfo.classList.add('hide');
    parentElement.querySelector('.view-more').classList.remove('hide');
    parentElement.querySelector('.view-less').classList.add('hide');
};


