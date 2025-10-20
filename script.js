// Language management and form handling
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle functionality
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            const isExpanded = hamburger.getAttribute('aria-expanded') === 'true';
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
            hamburger.setAttribute('aria-expanded', !isExpanded);
        });
    }
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (navMenu?.classList.contains('active') && 
            !e.target.closest('.nav-menu') && 
            !e.target.closest('.hamburger') &&
            !e.target.closest('.language-selector')) {
            closeMobileMenu();
        }
    });
    
    // Close mobile menu on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && navMenu?.classList.contains('active')) {
            closeMobileMenu();
            hamburger?.focus();
        }
    });
    
    function closeMobileMenu() {
        hamburger?.classList.remove('active');
        navMenu?.classList.remove('active');
        hamburger?.setAttribute('aria-expanded', 'false');
        document.activeElement?.blur();
    }
    
    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-link').forEach(element => {
        element.addEventListener('click', () => {
            closeMobileMenu();
        });
    });

    // Language management
    const languageSelector = document.getElementById('language-selector');
    let currentLanguage = 'en';
    let translations = {};

    // Load translations
    async function loadTranslations(lang) {
        if (translations[lang]) {
            return translations[lang];
        }

        try {
            const response = await fetch('i18n.json');
            if (!response.ok) throw new Error('Network response was not ok');
            
            const allTranslations = await response.json();
            translations = allTranslations;
            
            return translations[lang] || {};
        } catch (error) {
            console.error('Error loading translations:', error);
            return {};
        }
    }

    // Update page content with translations
    function updateContent(translations) {
        if (!translations.meta) return;

        // Update meta tags
        document.title = translations.meta.title;
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.setAttribute('content', translations.meta.description);
        }

        // Update Open Graph tags
        const ogTitle = document.querySelector('meta[property="og:title"]');
        const ogDescription = document.querySelector('meta[property="og:description"]');
        if (ogTitle) ogTitle.setAttribute('content', translations.meta.title);
        if (ogDescription) ogDescription.setAttribute('content', translations.meta.description);
        
        // Update all elements with data-i18n attribute
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            const value = getNestedValue(translations, key);
            
            if (value !== undefined && value !== null) {
                if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                    element.setAttribute('placeholder', value);
                } else if (element.tagName === 'IMG' && element.hasAttribute('alt')) {
                    element.setAttribute('alt', value);
                } else if (element.hasAttribute('aria-label')) {
                    element.setAttribute('aria-label', value);
                } else {
                    element.textContent = value;
                }
            }
        });

        // Update elements with data-i18n-placeholder attribute
        document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
            const key = element.getAttribute('data-i18n-placeholder');
            const value = getNestedValue(translations, key);
            
            if (value !== undefined && value !== null) {
                element.setAttribute('placeholder', value);
            }
        });

        // Update HTML lang attribute
        document.documentElement.setAttribute('lang', currentLanguage);
        
        // Update language selector
        if (languageSelector) {
            languageSelector.value = currentLanguage;
        }
    }

    // Helper function to get nested object values
    function getNestedValue(obj, path) {
        return path.split('.').reduce((current, key) => {
            return current && current[key] !== undefined ? current[key] : undefined;
        }, obj);
    }

    // Initialize language
    async function initLanguage() {
        const browserLang = navigator.language || navigator.userLanguage;
        const userLang = browserLang.startsWith('fr') ? 'fr' : 'en';
        
        currentLanguage = localStorage.getItem('preferredLanguage') || userLang;
        
        const loadedTranslations = await loadTranslations(currentLanguage);
        updateContent(loadedTranslations);
    }

    // Language selector change event
    if (languageSelector) {
        languageSelector.addEventListener('change', async function(e) {
            currentLanguage = e.target.value;
            localStorage.setItem('preferredLanguage', currentLanguage);
            
            const loadedTranslations = await loadTranslations(currentLanguage);
            updateContent(loadedTranslations);
            
            // Update hreflang tags dynamically
            updateHreflangTags(currentLanguage);
            
            // Close mobile menu after language change on mobile
            if (window.innerWidth <= 768 && navMenu?.classList.contains('active')) {
                closeMobileMenu();
            }
        });
    }

    // Update hreflang tags dynamically
    function updateHreflangTags(lang) {
        const baseUrl = window.location.origin + window.location.pathname;
        const alternateLinks = document.querySelectorAll('link[rel="alternate"][hreflang]');
        
        alternateLinks.forEach(link => {
            const hreflang = link.getAttribute('hreflang');
            if (hreflang === lang || hreflang === 'x-default') {
                link.setAttribute('href', `${baseUrl}?lang=${lang}`);
            }
        });
    }

    // Lazy load images
    function initLazyLoading() {
        const lazyImages = [].slice.call(document.querySelectorAll('img[loading="lazy"]'));
        
        if ('IntersectionObserver' in window) {
            const lazyImageObserver = new IntersectionObserver(function(entries, observer) {
                entries.forEach(function(entry) {
                    if (entry.isIntersecting) {
                        const lazyImage = entry.target;
                        lazyImage.src = lazyImage.dataset.src || lazyImage.src;
                        lazyImage.classList.add('loaded');
                        lazyImageObserver.unobserve(lazyImage);
                    }
                });
            });

            lazyImages.forEach(function(lazyImage) {
                lazyImageObserver.observe(lazyImage);
            });
        } else {
            // Fallback for browsers without IntersectionObserver
            lazyImages.forEach(function(lazyImage) {
                lazyImage.src = lazyImage.dataset.src || lazyImage.src;
                lazyImage.classList.add('loaded');
            });
        }
    }

    // Mobile contact section interactions
    function initContactSection() {
        const showFormBtn = document.querySelector('.show-form-btn');
        const backToOptions = document.querySelector('.back-to-options');
        const contactFormAndTrust = document.querySelector('.contact-form-and-trust');
        const contactOptions = document.querySelector('.contact-options');
        
        if (showFormBtn && contactFormAndTrust && contactOptions) {
            showFormBtn.addEventListener('click', function() {
                if (window.innerWidth <= 768) {
                    contactOptions.style.display = 'none';
                    contactFormAndTrust.classList.add('active');
                    // Update ARIA attributes
                    showFormBtn.setAttribute('aria-expanded', 'true');
                    // Smooth scroll to form
                    contactFormAndTrust.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                }
            });
        }
        
        if (backToOptions && contactFormAndTrust && contactOptions) {
            backToOptions.addEventListener('click', function() {
                if (window.innerWidth <= 768) {
                    contactFormAndTrust.classList.remove('active');
                    contactOptions.style.display = 'grid';
                    // Update ARIA attributes
                    const showFormBtn = document.querySelector('.show-form-btn');
                    if (showFormBtn) showFormBtn.setAttribute('aria-expanded', 'false');
                    // Smooth scroll back to options
                    contactOptions.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                }
            });
        }
    }

    // Enhanced form submission
    function initContactForm() {
        const contactForm = document.getElementById('lead-form');
        if (contactForm) {
            contactForm.addEventListener('submit', async function(e) {
                e.preventDefault();
                
                // Basic validation
                const name = document.getElementById('name');
                const email = document.getElementById('email');
                const message = document.getElementById('message');
                let isValid = true;

                // Reset previous errors
                contactForm.querySelectorAll('.error-message').forEach(msg => msg.remove());
                contactForm.querySelectorAll('.error').forEach(field => field.classList.remove('error'));

                // Validate required fields
                if (!name?.value.trim()) {
                    showError(name, 'Name is required');
                    isValid = false;
                }

                if (!email?.value.trim()) {
                    showError(email, 'Email is required');
                    isValid = false;
                } else if (!isValidEmail(email.value)) {
                    showError(email, 'Please enter a valid email address');
                    isValid = false;
                }

                if (!message?.value.trim()) {
                    showError(message, 'Please tell us about your project');
                    isValid = false;
                }

                if (isValid) {
                    // Show loading state
                    const submitBtn = contactForm.querySelector('button[type="submit"]');
                    const form = contactForm;
                    form.classList.add('form-loading');
                    submitBtn.disabled = true;

                    try {
                        const formData = new FormData(form);
                        
                        const response = await fetch(form.action, {
                            method: 'POST',
                            body: formData,
                            headers: {
                                'Accept': 'application/json'
                            }
                        });

                        if (response.ok) {
                            // Show success message
                            showSuccessMessage();
                        } else {
                            throw new Error('Form submission failed');
                        }
                        
                    } catch (error) {
                        console.error('Form submission error:', error);
                        alert('Sorry, there was an error sending your message. Please try again or email us directly.');
                    } finally {
                        form.classList.remove('form-loading');
                        submitBtn.disabled = false;
                    }
                }
            });
        }
    }

    function showSuccessMessage() {
        const form = document.getElementById('lead-form');
        const successMessage = document.getElementById('form-success');
        
        if (form && successMessage) {
            // Hide form, show success message
            form.style.display = 'none';
            successMessage.style.display = 'block';
            
            // Smooth scroll to success message
            successMessage.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            
            // Update ARIA live region for screen readers
            const successTitle = successMessage.querySelector('h3');
            if (successTitle) {
                const liveRegion = document.createElement('div');
                liveRegion.setAttribute('aria-live', 'polite');
                liveRegion.setAttribute('aria-atomic', 'true');
                liveRegion.style.cssText = 'position: absolute; left: -10000px; width: 1px; height: 1px; overflow: hidden;';
                liveRegion.textContent = successTitle.textContent + ' ' + successMessage.querySelector('p').textContent;
                document.body.appendChild(liveRegion);
                
                // Clean up after a delay
                setTimeout(() => {
                    document.body.removeChild(liveRegion);
                }, 5000);
            }
        }
    }

    function showError(field, message) {
        if (!field) return;
        
        field.classList.add('error');
        const errorElement = document.createElement('div');
        errorElement.className = 'error-message';
        errorElement.style.cssText = 'color: #E74C3C; font-size: 0.875rem; margin-top: 0.25rem;';
        errorElement.textContent = message;
        field.parentNode.appendChild(errorElement);
        
        // Focus the first error field
        if (!document.querySelector('.error:focus')) {
            field.focus();
        }
    }

    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = target.offsetTop - headerHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Initialize the page
    initLanguage();
    initLazyLoading();
    initContactSection();
    initContactForm();

    // Preload other language for better performance
    const browserLang = navigator.language || navigator.userLanguage;
    const otherLang = browserLang.startsWith('fr') ? 'en' : 'fr';
    loadTranslations(otherLang);
});

// Make resetForm globally available for the success message button
window.resetForm = function() {
    const form = document.getElementById('lead-form');
    const successMessage = document.getElementById('form-success');
    
    if (form && successMessage) {
        // Show form, hide success message
        form.style.display = 'block';
        successMessage.style.display = 'none';
        
        // Reset form fields
        form.reset();
        
        // Clear any error messages
        form.querySelectorAll('.error-message').forEach(msg => msg.remove());
        form.querySelectorAll('.error').forEach(field => field.classList.remove('error'));
        
        // Scroll to form
        form.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
};
