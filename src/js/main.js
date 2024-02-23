const homeBtn = () => {
    const btn = document.querySelectorAll('.home__item-svg');
    const btnMob = document.querySelectorAll('.home__mob-svg');

    const sectionHome = document.querySelector('.home');
    const sectionloading = document.querySelector('.loading');
    const loadingBlock = document.querySelector('.loading__inner');
    const loadingTitle = document.querySelector('.loading__title');
    const loadingText = document.querySelectorAll('.loading__text');
    const victoryBtn = document.querySelector('.victory__btn ')
    const categorySection = document.querySelector('.category');
    const modalSection = document.querySelector('.modal');
    const victorySection = document.querySelector('.victory');
    const modelBtn = document.querySelector('.modal__btn')
    const categoryModal = document.querySelector('.category__model');
    const categoryBtn = document.querySelector('.category__btn')
    const categoryItems = document.querySelectorAll('.category__item');
    const header = document.querySelector('.header');


    btnMob.forEach((item) => {
        item.addEventListener('click', () => {
            sectionHome.classList.add('remove');
            sectionloading.classList.add('active');

            setTimeout(() => {
                loadingTitle.classList.add('active');
                setTimeout(() => {
                    loadingText.forEach(loadingTextItem => {
                        loadingTextItem.classList.add('active');

                        setTimeout(() => {
                            loadingBlock.classList.add('active')
                            setTimeout(() => {
                                sectionloading.classList.remove('active');
                                modalSection.classList.add('active')
                                header.classList.add('active')
                                sectionloading.classList.remove('active');
                                modalSection.classList.add('active')
                              

                                
                                modalSection.addEventListener('transitionend', () => {
                                    if (!modalSection.classList.contains('active')) {
                                        header.classList.remove('active');
                                    }
                                });
                            }, 1000);
                        }, 500);
                    });
                }, 500);
            }, 500);
        });
    });



    victoryBtn.addEventListener('click', () => {
        victorySection.classList.remove('active')
        categorySection.classList.add('active')
    })


    let count = 0;
    categoryItems.forEach(item => {
        item.addEventListener('click', () => {
            const image = item.querySelector('.category__image');
            image.src = 'img/category/box2.png';

            if (count === 0) {
                setTimeout(() => {
                    categoryModal.classList.add('active');
                }, 500);
            } else {
                categorySection.classList.remove('active')
                victorySection.classList.add('active')
            }
            count++
            if (count === 2) {
                count = 0;
            }


        });
    });


    btn.forEach((item) => {
        item.addEventListener('click', () => {
            sectionHome.classList.add('remove');
            sectionloading.classList.add('active');

            setTimeout(() => {
                loadingTitle.classList.add('active');
                setTimeout(() => {
                    loadingText.forEach(loadingTextItem => {
                        loadingTextItem.classList.add('active');
                        setTimeout(() => {
                            loadingBlock.classList.add('active')
                            setTimeout(() => {
                                sectionloading.classList.remove('active');
                                modalSection.classList.add('active')
                                header.classList.add('active')
                                sectionloading.classList.remove('active');
                                modalSection.classList.add('active')
                              

                                modalSection.addEventListener('transitionend', () => {
                                    if (!modalSection.classList.contains('active')) {
                                        header.classList.remove('active');
                                    }
                                });
                            }, 1000);
                        }, 500);
                    });
                }, 500);
            }, 500);
        });
    });

    modelBtn.addEventListener('click', () => {
        modalSection.classList.remove('active');
        categorySection.classList.add('active')
    })

    categoryBtn.addEventListener('click', () => {
        categoryModal.classList.remove('active');

        categoryItems.forEach(item => {
            const defaultImage = item.querySelector('.category__image');
            defaultImage.src = 'img/category/box.png';
        });
    })

};

homeBtn();


/*slider */
const sliderThumbs = new Swiper('.slider__thumbs .swiper-container', {
    direction: 'vertical',
    slidesPerView: 3,
    spaceBetween: 40,
    loop: true,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false
    },
   /*  allowTouchMove: false, */
    initialSlide: 1,
    breakpoints: {
        0: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        767: {
            slidesPerView: 3,
            spaceBetween: 50,
        },
    },
});

const sliderImages = new Swiper('.slider__images .swiper-container', {
    direction: 'vertical',
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    autoplay: {
        delay: 4000,
    },
    allowTouchMove: false,
    freeMode: true,

});
