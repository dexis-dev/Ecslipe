// _________________________________________ //
// Developed by N3kket . All rights reserved //
// ----------------------------------------- //


// Click event for the menu icon
// Expands/collapses the right-side menu and toggles planet visuals
document.querySelector(".menu_center svg").addEventListener("click", function() {
    const menu = document.querySelector(".menu_right");
    const planet = document.querySelector(".planet");
    const planetBig = document.querySelector(".planet-big");
    const toggleButtonText = document.getElementById("toggleButton");

    menu.classList.toggle("expanded");

    if (menu.classList.contains("expanded")) {
        planet.style.display = "none"; 
        planetBig.style.display = "block"; 
        

        toggleButtonText.innerHTML = `<svg width="6" height="5" viewBox="0 0 6 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3 8.59151e-08L6 5H-3.9834e-06L3 8.59151e-08Z" fill="white"/>
                    </svg> Offers`;
        

        setTimeout(() => {
            planetBig.style.opacity = "1";
            planetBig.style.transform = "scale(1)";
        }, 10);
    } else {

        planet.style.display = "block"; 
        

        toggleButtonText.innerHTML = `<svg width="6" height="5" viewBox="0 0 6 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3 8.59151e-08L6 5H-3.9834e-06L3 8.59151e-08Z" fill="white"/>
                    </svg> Off...`;
        
        planetBig.style.opacity = "0";
        planetBig.style.transform = "scale(0.8)";
        
        setTimeout(() => {
            planetBig.style.display = "none";
        }, 300);
    }
});



// Click event for toggling the visibility of button container
document.getElementById("toggleButton").addEventListener("click", function() {
    const buttons = document.getElementById("buttonsContainer");
    buttons.classList.toggle("show");
});



// horizontal scroll

document.addEventListener("DOMContentLoaded", function () {
    const scrollContainers = document.querySelectorAll(".right_menu_wrapper");

    scrollContainers.forEach(scrollContainer => {
        let isDown = false;
        let startX;
        let scrollLeft;

        scrollContainer.addEventListener("mousedown", (e) => {
            isDown = true;
            startX = e.pageX - scrollContainer.offsetLeft;
            scrollLeft = scrollContainer.scrollLeft;
            scrollContainer.style.cursor = "grabbing";
        });

        scrollContainer.addEventListener("mouseleave", () => {
            isDown = false;
            scrollContainer.style.cursor = "grab";
        });

        scrollContainer.addEventListener("mouseup", () => {
            isDown = false;
            scrollContainer.style.cursor = "grab";
        });

        scrollContainer.addEventListener("mousemove", (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - scrollContainer.offsetLeft;
            const walk = (x - startX) * 2;
            scrollContainer.scrollLeft = scrollLeft - walk;
        });

        let touchStartX = 0;
        let touchScrollLeft = 0;

        scrollContainer.addEventListener("touchstart", (e) => {
            touchStartX = e.touches[0].clientX;
            touchScrollLeft = scrollContainer.scrollLeft;
        });

        scrollContainer.addEventListener("touchmove", (e) => {
            const touchX = e.touches[0].clientX;
            const moveX = touchX - touchStartX;
            scrollContainer.scrollLeft = touchScrollLeft - moveX;
        });
    });
});
