
$(function(){

	// nav
	let nav = $("nav");
	let navToggle = $("#navToggle");

	navToggle.on("click", function(event){
		event.preventDefault();

		nav.toggleClass("show");
	})



	// scroll
	$("[data-scroll]").on("click", function(event){
		event.preventDefault();

		let elementId = $(this).data('scroll');
		let elementOffset = $(elementId).offset().top;

		nav.removeClass("show");

		$("html, body").animate({
			scrollTop: elementOffset
		}, 1000)

	});
});



// TAB
let tab = function () {
    let tabNav = document.querySelectorAll('.tabs-nav__item'),
        tabContent = document.querySelectorAll('.tab'),
        tabName;

    tabNav.forEach(item => {
        item.addEventListener('click', selectTabNav)
    });

    function selectTabNav() {
        tabNav.forEach(item => {
            item.classList.remove('is-active');
        });
        this.classList.add('is-active');
        tabName = this.getAttribute('data-tab-name');
        selectTabContent(tabName);
    }

    function selectTabContent(tabName) {
        tabContent.forEach(item => {
            item.classList.contains(tabName) ? item.classList.add('is-active') : item.classList.remove('is-active');
        })
    }

};

tab();




// SLIDER
new Swiper('.image-slider', {
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev'
	},
	scrollbar:{
		el:'.swiper-scrollbar',
		draggable : true
	},

	gradCursor: true,
	touchRatio: 3,

	keyboard:{
		enable: true,
		onlyInViewport: true,
		pageDown: true,
	},

	mousewheel:{
		sensitivity:1,
		eventsTarget:".image-slider"
	},
	slidesPerView:2.8,
	spaceBetween: 20,
	// loop:true,
	freeMode: true,
	breakpoints:{
		320:{
			slidesPerView: 1,
		},
		480:{
			slidesPerView: 2,
		},
		992:{
			slidesPerView: 3,
		},
	},
});




















