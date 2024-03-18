let searchForm, shoppingCart, loginForm, navbar;

document.addEventListener('DOMContentLoaded', function() {
    searchForm = document.querySelector('.search-form');
    shoppingCart = document.querySelector('.shopping-cart');
    loginForm = document.querySelector('.login-form');
    navbar = document.querySelector('.navbar');

    document.querySelector('#search-btn').onclick = () => {
        searchForm.classList.toggle('active'); 
        shoppingCart.classList.remove('active');
        loginForm.classList.remove('active');   
        navbar.classList.remove('active'); 
    }

    document.querySelector('#cart-btn').onclick = () => {
        shoppingCart.classList.toggle('active');
        searchForm.classList.remove('active'); 
        loginForm.classList.remove('active');   
        navbar.classList.remove('active'); 
    }

    document.querySelector('#login-btn').onclick = () => {
        loginForm.classList.toggle('active');
        shoppingCart.classList.remove('active');
        searchForm.classList.remove('active'); 
        navbar.classList.remove('active'); 
    }

    document.querySelector('#menu-btn').onclick = () => {
        navbar.classList.toggle('active');  
        loginForm.classList.remove('active');
        shoppingCart.classList.remove('active');
        searchForm.classList.remove('active');  
    }

    window.onscrollend = () => {
        searchForm.classList.remove('active'); 
        shoppingCart.classList.remove('active');
        loginForm.classList.remove('active');   
        navbar.classList.remove('active'); 
    }
});
