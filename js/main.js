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

// Chart configuration and initialization
const ctx = document.getElementById('myChart').getContext('2d');
const data = {
    labels: Array.from({ length: 12 }, (_, i) => i), 
    datasets: [
        {
            label: "Stat 1",
            data: [-50, -30, 10, 30, 0, 5, 20, 40, 35, 60, 100, 150],
            borderColor: "#FD0606",
            backgroundColor: "rgba(253, 6, 6, 0.3)",
            tension: 0.2,
            pointRadius: 3
        },
        {
            label: "Stat 2",
            data: [-20, 50, 20, 5, -10, -30, 0, 25, -5, 55, 120, 200],
            borderColor: "#495EAE",
            backgroundColor: "rgba(73, 94, 174, 0.3)",
            tension: 0.2,
            pointRadius: 3
        },
        {
            label: "Stat 3",
            data: [30, -50, 10, 170, 130, 90, 140, 145, 150, 180, 220, 260],
            borderColor: "#2E9E59",
            backgroundColor: "rgba(46, 158, 89, 0.3)",
            tension: 0.2,
            pointRadius: 3
        }
    ]
};

// Create and render the line chart
new Chart(ctx, {
    type: "line",
    data: data,
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                labels: {
                    color: "rgba(255, 255, 255, 0.5)",
                    font: {
                        family: "Gilroy-Light",
                        size: 14
                    }
                },
                position: "bottom"
            }
        },
        scales: {
            x: {
                ticks: { 
                    color: "rgba(255, 255, 255, 0.5)", 
                    font: { family: "Gilroy-Light" }
                },
                grid: { color: "rgba(255, 255, 255, 0.3)" }
            },
            y: {
                ticks: { 
                    color: "rgba(255, 255, 255, 0.5)", 
                    font: { family: "Gilroy-Light" }
                },
                grid: { color: "rgba(255, 255, 255, 0.3)" }
            }
        }
    }
});


// modal
const modal = document.getElementById("myModal");
        const openModal = document.getElementById("openModal");
        const closeModal = document.querySelector(".close");

        openModal.addEventListener("click", (e) => {
            e.preventDefault();
            modal.classList.add("show");
        });

        closeModal.addEventListener("click", () => {
            modal.classList.remove("show");
        });

        modal.addEventListener("click", (e) => {
            if (e.target === modal) {
                modal.classList.remove("show");
            }
        });


// input content 
document.getElementById("togglePassword").addEventListener("click", function() {
    const passwordInput = document.getElementById("password");
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
    } else {
        passwordInput.type = "password";
    }
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
