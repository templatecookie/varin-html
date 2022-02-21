var slideImgIndex = 1;
var slideTextIndex = 1;
showSlides(slideImgIndex, slideTextIndex);

function plusSlides(n) {
    showSlides((slideImgIndex += n));
    showSlides((slideTextIndex += n));
}

function currentSlide(n) {
    showSlides((slideImgIndex = n));
    showSlides((slideTextIndex = n));
}

function showSlides(n) {
    var i;
    var slidesImage = document.getElementsByClassName("mySlide");
    var slidesText = document.getElementsByClassName("mySlideText");
    console.log(slidesImage, slidesText);
    if (n > slidesImage.length) {
        slideImgIndex = 1;
    }
    if (n > slidesText.length) {
        slideTextIndex = 1;
    }
    if (n < 1) {
        slideImgIndex = slidesImage.length;
        slideTextIndex = slidesText.length;
    }
    for (i = 0; i < slidesImage.length; i++) {
        slidesImage[i].style.display = "none";
    }
    for (i = 0; i < slidesImage.length; i++) {
        slidesText[i].style.display = "none";
    }
    slidesImage[slideImgIndex - 1].style.display = "block";
    slidesText[slideTextIndex - 1].style.display = "block";
}
