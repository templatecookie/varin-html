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


//======================= xxxxxxxxxxxxxxx =========================
var toggleIcon = document.getElementById('mode-changer');

toggleIcon.onclick= () =>{
    console.log("clicked");
    let local_storage_mode = localStorage.getItem('mode')
    console.log(local_storage_mode)
    if(local_storage_mode === 'dark'){
        localStorage.setItem('mode', 'light');
        document.body.classList.toggle("dark-theme");
    }else{
        localStorage.setItem('mode', 'dark');
        document.body.classList.toggle("dark-theme");
        console.log('else')
    }
    
    // document.body.classList.toggle("dark-theme");
    if (document.body.classList.contains("dark-theme")) {
        document.getElementById('moon-svg').style.display = "none"
        document.getElementById('sun-svg').style.display = "block"
        document.getElementById('mode-changer').style.background = "#434343"
    }else{
        document.getElementById('sun-svg').style.display = "none"
        document.getElementById('moon-svg').style.display = "block"
        document.getElementById('mode-changer').style.background = "#EDEDED"
    }
};

