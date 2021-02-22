// ------------------------ハンバーガーメニュー-------------------------------
document.getElementById("menuButton").addEventListener("click", function() {
        this.classList.toggle("active");
        document.getElementById("nav").classList.toggle("active");
        document.getElementById("mask").classList.toggle("active");
    })
    // -------------------------------------------------------------------------

window.addEventListener('load', function() {
    viewSlide('.slide img');
});

function viewSlide(className, slideNo = -1) {
    let imgArray = document.querySelectorAll(className);
    if (slideNo >= 0) {
        //初回以外は現在のスライドを消す
        imgArray[slideNo].style.opacity = 0;
    }
    slideNo++;
    if (slideNo >= imgArray.length) {
        slideNo = 0; //次のスライドがなければ最初のスライドへ戻る
    }
    imgArray[slideNo].style.opacity = 1;
    let msec = document.getElementById('slide_speed').value;
    setTimeout(function() {
        viewSlide(className, slideNo);
    }, msec);
}