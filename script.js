// ====================================
// Sardius Estate - Interactive JavaScript
// ====================================

// Mobile Menu Toggle
const mobileToggle = document.getElementById('mobileToggle');
const navMenu = document.getElementById('navMenu');

mobileToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    mobileToggle.classList.toggle('active');
});

// Close mobile menu when clicking on a link
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        mobileToggle.classList.remove('active');
    });
});

// Navbar Scroll Effect
const navbar = document.getElementById('navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    lastScroll = currentScroll;
});

// Active Navigation Link on Scroll
const sections = document.querySelectorAll('section[id]');

function highlightNavigation() {
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

        if (navLink && scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinks.forEach(link => link.classList.remove('active'));
            navLink.classList.add('active');
        }
    });
}

window.addEventListener('scroll', highlightNavigation);

// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');

        if (targetId === '#') return;

        const targetSection = document.querySelector(targetId);
        if (targetSection) {
            const offsetTop = targetSection.offsetTop - 80;

            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Intersection Observer for Scroll Animations
const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');

            // Add stagger effect to grid children
            if (entry.target.classList.contains('features-grid') ||
                entry.target.classList.contains('pricing-grid') ||
                entry.target.classList.contains('gallery-grid')) {
                const children = entry.target.children;
                Array.from(children).forEach((child, index) => {
                    setTimeout(() => {
                        child.style.opacity = '1';
                        child.style.transform = 'translateY(0)';
                    }, index * 100);
                });
            }
        }
    });
}, observerOptions);

// Observe all elements with animate-on-scroll class
const animateElements = document.querySelectorAll('.animate-on-scroll');
animateElements.forEach(element => observer.observe(element));

// Initialize grid children for stagger animation
document.querySelectorAll('.features-grid > *, .pricing-grid > *, .gallery-grid > *').forEach(child => {
    child.style.opacity = '0';
    child.style.transform = 'translateY(30px)';
    child.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
});

// Currency Converter (Naira to USD)
const exchangeRate = 1493; // Update this rate as needed

function convertCurrency(amount, toUSD = true) {
    if (toUSD) {
        return (amount / exchangeRate).toFixed(2);
    } else {
        return (amount * exchangeRate).toFixed(0);
    }
}

// WhatsApp Integration
function openWhatsApp(plotType = 'single') {
    let message = '';

    switch (plotType) {
        case 'single-outright':
            message = "Hi! I'm interested in purchasing a single plot at Sardius Estate with outright payment (₦51M).";
            break;
        case 'single-installment':
            message = "Hi! I'm interested in purchasing a single plot at Sardius Estate with the 3-month installment plan (₦56M).";
            break;
        case 'mini-outright':
            message = "Hi! I'm interested in purchasing a mini estate (6 plots) at Sardius Estate with outright payment (₦303M).";
            break;
        case 'mini-installment':
            message = "Hi! I'm interested in purchasing a mini estate (6 plots) at Sardius Estate with the 3-month installment plan (₦306M).";
            break;
        default:
            message = "Hi! I'm interested in Sardius Estate, Guzape 2. Can you provide more information?";
    }

    const whatsappNumber = '+2348000000000'; // Replace with actual number
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
}

// Add WhatsApp click handlers to pricing buttons (optional enhancement)
document.querySelectorAll('.pricing-card .btn').forEach((btn, index) => {
    const plotTypes = ['single-outright', 'single-installment', 'mini-outright', 'mini-installment'];

    btn.addEventListener('click', (e) => {
        if (btn.textContent.includes('WhatsApp')) {
            e.preventDefault();
            openWhatsApp(plotTypes[index]);
        }
    });
});

// Pricing Calculator Toggle (Optional Enhancement)
function createPricingCalculator() {
    const calculator = document.createElement('div');
    calculator.className = 'pricing-calculator';
    calculator.innerHTML = `
        <div style="background: white; padding: var(--spacing-lg); border-radius: var(--radius-lg); box-shadow: var(--shadow-md); margin: var(--spacing-xl) 0;">
            <h3 style="color: var(--color-primary); text-align: center; margin-bottom: var(--spacing-md);">Calculate Your Investment</h3>
            
            <div style="display: grid; gap: var(--spacing-md);">
                <div>
                    <label style="display: block; margin-bottom: var(--spacing-xs); font-weight: 600;">Number of Plots</label>
                    <input type="number" id="plotCount" min="1" max="20" value="1" class="form-control">
                </div>
                
                <div>
                    <label style="display: block; margin-bottom: var(--spacing-xs); font-weight: 600;">Payment Type</label>
                    <select id="paymentType" class="form-control">
                        <option value="outright">Outright Payment</option>
                        <option value="installment">3-Month Installment</option>
                    </select>
                </div>
                
                <div style="background: var(--color-surface); padding: var(--spacing-md); border-radius: var(--radius-sm); text-align: center;">
                    <p style="color: var(--color-text-secondary); margin-bottom: var(--spacing-xs);">Total Investment</p>
                    <h2 id="totalPrice" style="color: var(--color-primary); margin: 0;">₦51,000,000</h2>
                    <p id="usdPrice" style="color: var(--color-secondary); margin-top: var(--spacing-xs);">~$34,156</p>
                </div>
            </div>
        </div>
    `;

    return calculator;
}

// Add calculator to pricing section if desired
// Uncomment to enable:
// const pricingSection = document.querySelector('#pricing .container');
// if (pricingSection) {
//     const titleElement = pricingSection.querySelector('.section-title');
//     titleElement.insertAdjacentElement('afterend', createPricingCalculator());

//     // Calculator logic
//     const plotCountInput = document.getElementById('plotCount');
//     const paymentTypeSelect = document.getElementById('paymentType');
//     const totalPriceElement = document.getElementById('totalPrice');
//     const usdPriceElement = document.getElementById('usdPrice');

//     function calculateTotal() {
//         const plotCount = parseInt(plotCountInput.value) || 1;
//         const paymentType = paymentTypeSelect.value;

//         let pricePerPlot = 51000000; // Outright default

//         if (plotCount >= 6) {
//             pricePerPlot = paymentType === 'outright' ? 50500000 : 51000000;
//         } else {
//             pricePerPlot = paymentType === 'outright' ? 51000000 : 56000000;
//         }

//         const total = pricePerPlot * plotCount;
//         const usdTotal = convertCurrency(total, true);

//         totalPriceElement.textContent = `₦${total.toLocaleString()}`;
//         usdPriceElement.textContent = `~$${parseFloat(usdTotal).toLocaleString()}`;
//     }

//     plotCountInput.addEventListener('input', calculateTotal);
//     paymentTypeSelect.addEventListener('change', calculateTotal);
// }

// Form Validation (for custom forms if used instead of Google Form)
function validateForm(formElement) {
    const inputs = formElement.querySelectorAll('input[required], textarea[required]');
    let isValid = true;

    inputs.forEach(input => {
        if (!input.value.trim()) {
            isValid = false;
            input.style.borderColor = 'var(--color-danger)';
        } else {
            input.style.borderColor = '#E0E0E0';
        }

        // Email validation
        if (input.type === 'email' && input.value) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(input.value)) {
                isValid = false;
                input.style.borderColor = 'var(--color-danger)';
            }
        }

        // Phone validation
        if (input.type === 'tel' && input.value) {
            const phoneRegex = /^[\d\s\+\-\(\)]+$/;
            if (!phoneRegex.test(input.value)) {
                isValid = false;
                input.style.borderColor = 'var(--color-danger)';
            }
        }
    });

    return isValid;
}

// Gallery Lightbox (Optional Enhancement)
const galleryItems = document.querySelectorAll('.gallery-item');

galleryItems.forEach((item, index) => {
    item.addEventListener('click', () => {
        const imgSrc = item.querySelector('img').src;
        createLightbox(imgSrc);
    });
});

function createLightbox(imageSrc) {
    const lightbox = document.createElement('div');
    lightbox.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.9);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10000;
        cursor: pointer;
        animation: fadeIn 0.3s ease;
    `;

    const img = document.createElement('img');
    img.src = imageSrc;
    img.style.cssText = `
        max-width: 90%;
        max-height: 90%;
        border-radius: var(--radius-lg);
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
    `;

    lightbox.appendChild(img);
    document.body.appendChild(lightbox);

    lightbox.addEventListener('click', () => {
        lightbox.remove();
    });
}

// Lazy Loading for Images
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    imageObserver.unobserve(img);
                }
            }
        });
    });

    // Observe images with data-src attribute
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// Scroll to Top Button (Optional)
function createScrollTopButton() {
    const button = document.createElement('button');
    button.innerHTML = '↑';
    button.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: var(--gradient-gold);
        color: var(--color-primary);
        border: none;
        font-size: 24px;
        cursor: pointer;
        box-shadow: var(--shadow-lg);
        opacity: 0;
        visibility: hidden;
        transition: var(--transition-base);
        z-index: 999;
    `;

    document.body.appendChild(button);

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 500) {
            button.style.opacity = '1';
            button.style.visibility = 'visible';
        } else {
            button.style.opacity = '0';
            button.style.visibility = 'hidden';
        }
    });

    button.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Initialize scroll to top button
createScrollTopButton();

// Console welcome message
console.log('%c🏡 Welcome to Sardius Estate!', 'font-size: 20px; color: #D4AF37; font-weight: bold;');
console.log('%cDeveloped with ❤️ for premium real estate', 'font-size: 12px; color: #6C757D;');

// Page Load Animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';

    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// ====================================
// 7-SECOND CONVERSION OPTIMIZATION
// ====================================

// Urgency Timer Countdown
function startUrgencyTimer() {
    let hours = 23;
    let minutes = 45;
    let seconds = 12;

    const timerElement = document.querySelector('#urgencyTimer strong');

    setInterval(() => {
        seconds--;

        if (seconds < 0) {
            seconds = 59;
            minutes--;
        }

        if (minutes < 0) {
            minutes = 59;
            hours--;
        }

        if (hours < 0) {
            hours = 23;
            minutes = 59;
            seconds = 59;
        }

        const formattedTime = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
        if (timerElement) {
            timerElement.textContent = formattedTime;
        }
    }, 1000);
}

// Dynamic Plot Counter (decreases over time to create urgency)
function animatePlotCounter() {
    const plotsLeft = document.getElementById('plotsLeft');
    if (!plotsLeft) return;

    let count = 12;
    const updateInterval = 180000; // Decrease every 3 minutes

    setInterval(() => {
        if (count > 7) {  // Don't go below 7
            count--;
            plotsLeft.textContent = `${count} plots`;
        }
    }, updateInterval);
}

// Sticky CTA Bar - Show after scrolling
function initStickyCTA() {
    const stickyCTA = document.getElementById('stickyCTA');
    let isShown = false;

    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const heroHeight = document.querySelector('.hero').offsetHeight;

        if (scrolled > heroHeight && !isShown) {
            stickyCTA.classList.add('show');
            isShown = true;
        } else if (scrolled <= heroHeight / 2 && isShown) {
            stickyCTA.classList.remove('show');
            isShown = false;
        }
    });
}

// Exit Intent Popup
function initExitIntent() {
    const exitPopup = document.getElementById('exitPopup');
    const exitClose = document.getElementById('exitPopupClose');
    let hasShown = false;
    let exitTimer;

    function showExitPopup() {
        if (!hasShown) {
            exitPopup.classList.add('show');
            hasShown = true;
            localStorage.setItem('exitPopupShown', 'true');
            startExitTimer();
        }
    }

    // Check if already shown in this session
    if (localStorage.getItem('exitPopupShown')) {
        hasShown = true;
    }

    // Desktop: Mouse leave detection
    document.addEventListener('mouseleave', (e) => {
        if (e.clientY <= 0 && !hasShown) {
            showExitPopup();
        }
    });

    // Mobile: Show after 15 seconds of inactivity
    let inactivityTimer;
    function resetInactivityTimer() {
        clearTimeout(inactivityTimer);
        if (!hasShown) {
            inactivityTimer = setTimeout(() => {
                showExitPopup();
            }, 15000);
        }
    }

    ['mousemove', 'keypress', 'scroll', 'touchstart'].forEach(event => {
        document.addEventListener(event, resetInactivityTimer, { passive: true });
    });

    // Close popup
    exitClose.addEventListener('click', () => {
        exitPopup.classList.remove('show');
    });

    exitPopup.addEventListener('click', (e) => {
        if (e.target === exitPopup) {
            exitPopup.classList.remove('show');
        }
    });

    // Exit Timer Countdown
    function startExitTimer() {
        let minutes = 14;
        let seconds = 59;

        const timerElement = document.getElementById('exitTimer');

        exitTimer = setInterval(() => {
            seconds--;

            if (seconds < 0) {
                seconds = 59;
                minutes--;
            }

            if (minutes < 0) {
                clearInterval(exitTimer);
                timerElement.textContent = '00:00';
                return;
            }

            timerElement.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
        }, 1000);
    }
}

// Enhanced WhatsApp Integration with Plot Type Tracking
function enhanceWhatsAppLinks() {
    // Track which pricing card button was clicked
    const pricingButtons = document.querySelectorAll('.pricing-card .btn');
    const plotTypes = ['single-outright', 'single-installment', 'mini-outright', 'mini-installment'];

    pricingButtons.forEach((btn, index) => {
        if (btn.getAttribute('href') === '#contact') {
            btn.addEventListener('click', () => {
                localStorage.setItem('selectedPlotType', plotTypes[index % 4]);
            });
        }
    });
}

// Performance Tracking (Time on Page)
function trackEngagement() {
    let startTime = Date.now();

    // Track time on page
    window.addEventListener('beforeunload', () => {
        const timeSpent = Math.floor((Date.now() - startTime) / 1000);
        console.log(`User spent ${timeSpent} seconds on page`);

        // You can send this to your analytics
        // Example: analytics.track('Time on Page', { duration: timeSpent });
    });

    // Track scroll depth
    let maxScroll = 0;
    window.addEventListener('scroll', () => {
        const scrollPercent = (window.pageYOffset / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
        if (scrollPercent > maxScroll) {
            maxScroll = Math.floor(scrollPercent);
        }
    });

    window.addEventListener('beforeunload', () => {
        console.log(`Max scroll depth: ${maxScroll}%`);
    });
}

// Initialize all conversion optimization features
function initConversionOptimization() {
    startUrgencyTimer();
    animatePlotCounter();
    initStickyCTA();
    initExitIntent();
    enhanceWhatsAppLinks();
    trackEngagement();
}

// Run on page load
window.addEventListener('load', initConversionOptimization);

// Clear exit popup flag on new session  (commented out - you can enable if needed)
// window.addEventListener('load', () => {
//     localStorage.removeItem('exitPopupShown');
// });
