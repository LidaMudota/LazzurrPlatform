function init(){
    // menu in mobile
    const toggleButton = document.querySelector('.header_wrapper_toggle');
    const headerNav = document.querySelector('.header_wrapper_nav');
    const headerLocation = document.querySelector('.header_wrapper_location');

    const toggleButtonIcon = document.querySelector('.header_wrapper_toggle_button');
    const toggleButtonIconX = document.querySelector('.header_wrapper_toggle_close');

    toggleButton.addEventListener('click', function(){
        headerNav.classList.toggle('active');
        headerLocation.classList.toggle('active');
        toggleButtonIcon.classList.toggle('active');
        toggleButtonIconX.classList.toggle('active');
    });

    // select city
    const selectCity = document.querySelector('.city');
    const openSelectCityMenu = document.querySelector('.header_wrapper_location');
    const closeSelectMenu = document.querySelector('.city_block_close');
    const openSelectCityMenu2 = document.querySelector('.contact_content_info_location');
    const openSelectCityMenu3 = document.querySelector('.footer_content_list_item_innerList_item_location');

    openSelectCityMenu.addEventListener('click', function(){
        selectCity.classList.add('active');
    });

    openSelectCityMenu2.addEventListener('click', function(){
        selectCity.classList.add('active');
    });

    openSelectCityMenu3.addEventListener('click', function(){
        selectCity.classList.add('active');
    });

    closeSelectMenu.addEventListener('click', function(){
        selectCity.classList.remove('active');
    })

    const dropdown = document.getElementById('city_block_select_dropdown_options');
    const cityText = document.querySelector('.city_block_text_city');
    const locationInfo = document.querySelector('.header_wrapper_location_info_underlined');
    const locationInfo2 = document.querySelector('.contact_content_info_location_info_underlined');
    const locationInfo3 = document.querySelector('.footer_content_list_item_innerList_item_location_info_underlined');

    dropdown.addEventListener('change', (event) => {
        const selectedCity = event.target.options[event.target.selectedIndex].text;

        cityText.textContent = selectedCity;
        locationInfo.textContent = selectedCity;
        locationInfo2.textContent = selectedCity;
        locationInfo3.textContent = selectedCity;
    });

    //select language
    const selectLanguage = document.querySelector('.language');
    const openSelectLanguageManu = document.querySelector('.header_wrapper_language');
    const closeSelectLanguageMenu = document.querySelector('.language_block_close');

    openSelectLanguageManu.addEventListener('click', function(){
        selectLanguage.classList.add('active');
    });

    closeSelectLanguageMenu.addEventListener('click', function(){
        selectLanguage.classList.remove('active');
    });

    //slider
    let currentSlideIndex = 0;
    const slides = document.querySelectorAll('.carousel_slide');
    const lines = document.querySelectorAll('.line');

    for(let i = 0; i < lines.length; i++){
        lines[i].addEventListener('click', () => showSlide(i));
    }

    function showSlide(index){
        if (index >= slides.length) {
            currentSlideIndex = 0;
        } else if (index < 0) {
            currentSlideIndex = slides.length - 1;
        } else {
            currentSlideIndex = index;
        }
    
        const newPosition = -currentSlideIndex * 100;
        document.querySelector('.carousel').style.transform = `translateX(${newPosition}%)`;
    
        updateLines();
    }
    
    function updateLines(){
        lines.forEach(line => line.classList.remove('active'));
        lines[currentSlideIndex].classList.add('active');
    }

    function currentSlide(index) {
        showSlide(index);
    }
    
    showSlide(currentSlideIndex);
    
    setInterval(() => {
        showSlide(currentSlideIndex + 1); 
    }, 5000);

    // options
    const categories = document.querySelectorAll('.options_block_categories_item');
    const details = document.querySelectorAll('.options_block_details');
        
    function activateCategory(index) {
        categories.forEach(category => category.classList.remove('active'));
        details.forEach(detail => detail.classList.remove('active'));

        categories[index].classList.add('active');
        details[index].classList.add('active');
    }

    categories.forEach((category, index) => {
        category.addEventListener('click', () => {
            activateCategory(index);
        });
    });

    const optionsMenu = document.querySelector('.options');
    const optionsOpenner = document.querySelectorAll('.optionsOpenner');
    const closeOptionsMenu = document.querySelector('.options_close');

    for(let i = 0; i < optionsOpenner.length; i++){
        optionsOpenner[i].addEventListener('click', () => {
            optionsMenu.classList.add('active');
        })
    }

    closeOptionsMenu.addEventListener('click', function(){
        optionsMenu.classList.remove('active');
    });

    //reviews
    const reviews = document.querySelector('.reviews_slider_content');
    const nextBtn = document.querySelector('.reviews_slider_nextBtn');
    const prevBtn = document.querySelector('.reviews_slider_prevBtn');

    const deviceWidth = window.innerWidth;
    let scrollSize = deviceWidth > 550 ? 25.6 : 100;
    let currentTranslateX = 0;
    let currentBullet = 0;
    const bullets = document.querySelectorAll('.reviews_controls_item');
    bulletsForReviews(bullets, currentBullet);

    const totalReviews = deviceWidth > 550 ? (reviews.children.length-3) : (reviews.children.length);
    const maxTranslateX = -((totalReviews - 1) * scrollSize);

    prevBtn.addEventListener('click', function () {
        currentTranslateX += scrollSize; 
        if (currentTranslateX > 0) {
            currentTranslateX = 0;
        }

        currentBullet = Math.abs(Math.trunc(currentTranslateX / scrollSize));
        bulletsForReviews(bullets, currentBullet);
        reviews.style.transform = `translateX(${currentTranslateX}%)`;    
    });

    nextBtn.addEventListener('click', function () {
        currentTranslateX -= scrollSize; 
        
        if (currentTranslateX < maxTranslateX) {
            currentTranslateX = maxTranslateX;
        }
        
        currentBullet = Math.abs(Math.trunc(currentTranslateX / scrollSize));
        console.log(currentBullet);
        bulletsForReviews(bullets, currentBullet);  
        reviews.style.transform = `translateX(${currentTranslateX}%)`;
    });    

    //description
    const showMoreBtn = document.getElementById("show-more");
    showMoreBtn.addEventListener('click', showMore);
}

function bulletsForReviews(bullets, i) {
    if (!bullets || bullets.length === 0) return;
    if (i < 0 || i >= bullets.length) return;

    for(let j = 0; j < bullets.length; j++) {
        bullets[j].classList.remove('active');
    }

    bullets[i].classList.add('active');
}

function showMore() {
    const moreText = document.getElementById("more-text");
    const btn = document.getElementById("show-more");
    
    const currentOpacity = window.getComputedStyle(moreText).opacity;

    if (currentOpacity === "1") {
        moreText.style.opacity = "0.1";
        btn.style.marginTop = "0";
        btn.textContent = "ЧИТАТЬ ПОЛНОСТЬЮ";
    } else {
        moreText.style.opacity = "1";
        btn.style.marginTop = "3%";
        btn.textContent = "СКРЫТЬ";
    }
}



window.onload = init;