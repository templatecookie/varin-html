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
    if (n > slidesImage.length) {
        slideImgIndex = 1;
        slideTextIndex = 1;
    }
    
    if (n < 1) {
        slideImgIndex = slidesImage.length;
        slideTextIndex = slidesText.length;
    }
    for (i = 0; i < slidesImage.length; i++) {
        slidesImage[i].style.display = "none";
    }
    for (i = 0; i < slidesText.length; i++) {
        slidesText[i].style.display = "none";
    }
    slidesImage[slideImgIndex - 1].style.display = "block";
    slidesText[slideTextIndex - 1].style.display = "block";
}

//============================ xxxxxxxxxx===========================
let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8,
  });
}

