document.addEventListener('DOMContentLoaded', () => {
    function burgerMenu () {
        const burgerButton = document.querySelector('.burger');
        const menu = document.querySelector('.navigation__background');
        const closeButton = document.querySelector('.navigation__close');
        
        burgerButton.addEventListener('click', function(){
            menu.classList.remove('active-menu');
        })
        
        closeButton.addEventListener('click', function(){
            menu.classList.add('active-menu');
        })
    };
    
    
    function searcher () {
        const sButton = document.querySelector('.searcher__icon');
        const sInput = document.querySelector('.searcher__input');
        const siteBody = document.querySelector('body');
        const sWindow = document.querySelector('.searcher');
    
        sButton.addEventListener('click', function(){
            sInput.classList.remove('width');
        })
        siteBody.addEventListener('click', function(){
            sInput.classList.add('width');
        });
        sWindow.addEventListener('click', function(e){
            e.stopPropagation();
        });
    }
    
    
    function cart () {
        const cartButton = document.querySelector('.cart__icon');
        const cartBody = document.querySelector('.cart__wrapper');
        const siteBody = document.querySelector('body');
        const cartWindow = document.querySelector('.cart')
    
        cartButton.addEventListener('click', function(){
            if (cartBody.classList.contains('display-none')){
                cartBody.classList.remove('display-none');
                setTimeout(() => {
                    cartBody.classList.remove('opacity');
                }, 100); 
            } else {
                cartBody.classList.add('opacity');
                setTimeout(() => {
                    cartBody.classList.add('display-none');
                }, 500); 
            };
        });
    
        siteBody.addEventListener('click', function(){
            cartBody.classList.add('opacity');
            setTimeout(() => {
                cartBody.classList.add('display-none');
            }, 500); 
        });
    
        cartWindow.addEventListener('click', function(e){
            e.stopPropagation();
        });
    }
    

    function tabs () {
        const tabController = document.querySelectorAll('[data-open-tab]');
        const tabWidow = document.querySelectorAll('[data-tab]');

        tabController.forEach(function(item){
            item.addEventListener('click', function(){
                tabController.forEach(function(item){
                    item.classList.remove('active-tab');
                });

                item.classList.add('active-tab');

                tabWidow.forEach(function(item){
                    item.classList.add('display-none')
                });

                const window = document.querySelector('#'+this.dataset.openTab);
                window.classList.remove('display-none');
            })
        })
    }

    function openArticle () {
        const article = document.querySelectorAll('.news__item')
        console.log(article)
        article.forEach(function(item) {
            item.addEventListener('click', function() {
                if (item.classList.contains('active-article')) {
                    item.classList.remove('active-article')
                } else {
                    article.forEach(function(item) {
                        item.classList.remove('active-article')
                    })
                    item.classList.add('active-article')
                }
            })
        })
    }

    function addToCart () {
        const button = document.querySelectorAll('.item__plus')

        button.forEach((item)=>{
            item.addEventListener('click', ()=>{
                item.classList.toggle('avctive-add_cart')
            })
        })
    }
    

    
    burgerMenu();
    searcher();
    cart();
    tabs ();
    openArticle();
    addToCart()
});

