document.onreadystatechange = function () {
    var url=window.location.href;
    var button_logo = document.getElementById('button-logo');
    var button_delivery = document.getElementById("button-delivery");
    var button_contact = document.getElementById('button-contact');
    var header = document.getElementById('masthead');
    var body = document.body;
    
    if (document.readyState === "interactive") {
      document.addEventListener("DOMContentLoaded", load, false);
      if (url == 'https://rozellasflower.com/'){
        button_logo.addEventListener("click", function(){
            scrollNavigation('section-home');
        });

        window.addEventListener('scroll', function(){
            var total_height = document.body.offsetHeight;
            var height = document.getElementById('section-home').offsetHeight;
            var scrollPoint  = window.scrollY + window.innerHeight;
            var header = document.getElementById('masthead');
            
            if (scrollPoint == height){
            // Top of window
                header.style.padding = "3% 8% 0 8%";
                header.style.transition = "all 0.5s";
            }else  if(scrollPoint >= total_height){
            // Bottom of window
                header.style.padding = "0% 8% 0 8%";
                header.style.transition = "all 0.5s";
            } else {
            // Middle of window
                // header.style.backgroundColor = '#FAF3E2';
                header.style.padding = "0% 8% 0 8%";
                header.style.transition = "all 0.5s";
            }
        });

      }else{
        body.style.padding = "10% 0 0 0";
        button_delivery.style.display = "none";
        button_contact.style.display = "none";
        header.style.padding = "0 8% 0 8%";
        button_logo.addEventListener("click", function(){
            LocationWindow('https://rozellasflower.com/')
        });
      }
    };
};

function load(){
    document.getElementById('username').placeholder = "Your username or email";
    document.getElementById('password').placeholder = "Password";
}


function onModalUser(button_value,value){
    var modal = document.getElementById("modal-user");
    var body = document.body;
    var register = document.querySelector('#modal-user > .woocommerce > #customer_login > .col-2');
    var head_login = document.querySelector('#modal-user > .woocommerce > #customer_login > .col-1 > h2');
    var head_register = document.querySelector('#modal-user > .woocommerce > #customer_login > .col-2 > h2');

    var login = document.querySelector('#modal-user > .woocommerce > #customer_login > .col-1');
    
    if (button_value == 'button_login'){
        register.style.display = "none";
        login.style.display = "block";
        head_login.innerHTML = '<svg width="79" height="90" viewBox="0 0 79 90" fill="none" xmlns="http://www.w3.org/2000/svg">'+
                                '<path d="M41.4305 0C43.2227 0.387476 45.0641 0.629354 46.7999 1.18826C57.1142 4.50176 63.9943 14.6677 63.1615 25.2352C62.2772 36.4626 54.2008 45.3652 43.2931 47.1405C29.8261 49.3315 17.3186 39.7198 15.9276 26.1088C14.6069 13.193 24.0298 1.52642 36.8892 0.15499C37.1167 0.131507 37.3395 0.0540117 37.5647 0.00234834C38.8549 0 40.1427 0 41.4305 0ZM39.5352 5.27436C29.3804 5.25793 21.0882 13.5194 21.0648 23.6712C21.0413 33.8395 29.2796 42.1503 39.4202 42.1879C49.6125 42.2254 57.9305 33.9382 57.9375 23.744C57.9422 13.5804 49.6829 5.2908 39.5352 5.27436Z" fill="#C66D80"/>'+
                                '<path d="M39.4413 90C27.3889 90 15.3364 90 3.284 90C0.926528 90 -0.0328816 89.0372 -4.11338e-05 86.7076C0.229842 70.2411 12.3034 56.0806 28.5782 53.2415C30.2132 52.9573 31.8857 52.7953 33.5465 52.7648C37.4076 52.6943 41.2733 52.6239 45.1298 52.7601C58.7398 53.2344 68.6881 59.6971 75.1741 71.5632C77.7872 76.3444 78.9226 81.5577 79 86.9988C79.0281 88.9198 77.9608 89.9953 76.035 89.9976C63.8371 90.0023 51.6392 90 39.4413 90ZM73.6751 84.6904C73.4452 83.3425 73.274 82.0978 73.0183 80.872C70.3254 67.9491 58.5122 58.1918 45.3362 58.025C41.4164 57.9757 37.4944 57.9546 33.577 58.0485C31.8059 58.0908 29.9974 58.2646 28.2779 58.6779C17.0887 61.3597 9.85209 68.3295 6.40619 79.2634C5.86198 80.9941 5.64851 82.8282 5.26381 84.6951C28.1677 84.6904 50.8299 84.6904 73.6751 84.6904Z" fill="#C66D80"/>'+
                               '</svg></br> Login';
    }else if(button_value == 'button_register'){
        login.style.display = "none";
        register.style.display = "block";
        head_register.innerHTML = 'Create an account </br> <span>Welcome!</span>';
    };

    if (value == true){
        modal.classList.add("open-modal");
        modal.classList.remove("close-modal");

        body.classList.add("hide-overflow");
        body.classList.remove("show-overflow");
    } else{
        modal.classList.add("close-modal");
        modal.classList.remove("open-modal");

        body.classList.add("show-overflow");
        body.classList.remove("hide-overflow");
    };
}


function LocationWindow(url){
    location.replace(url);
}

function scrollNavigation(section){
    var element = document.getElementById(section);
    element.scrollIntoView({block: "start", behavior: "smooth"});
}

