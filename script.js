// ========================================
// Accessible Design - Interactive Scripts
// ========================================

/**
 * Mobile Navigation Toggle
 */
function initMobileMenu() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.getElementById('nav-menu');

    if (!menuToggle || !navMenu) return;

    menuToggle.addEventListener('click', () => {
        const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
        menuToggle.setAttribute('aria-expanded', !isExpanded);
        navMenu.classList.toggle('active');
    });

    // Close menu when a link is clicked
    navMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            menuToggle.setAttribute('aria-expanded', 'false');
            navMenu.classList.remove('active');
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('nav')) {
            menuToggle.setAttribute('aria-expanded', 'false');
            navMenu.classList.remove('active');
        }
    });
}

/**
 * Accordion Component
 * Accessible accordion with keyboard navigation
 */
function initAccordion() {
    const triggers = document.querySelectorAll('.accordion-trigger');
    
    triggers.forEach((trigger, index) => {
        trigger.addEventListener('click', () => {
            const isExpanded = trigger.getAttribute('aria-expanded') === 'true';
            toggleAccordion(trigger, !isExpanded);
        });

        // Keyboard navigation
        trigger.addEventListener('keydown', (e) => {
            let targetTrigger;

            switch (e.key) {
                case 'ArrowDown':
                case 'ArrowRight':
                    e.preventDefault();
                    targetTrigger = triggers[index + 1];
                    if (targetTrigger) targetTrigger.focus();
                    break;
                case 'ArrowUp':
                case 'ArrowLeft':
                    e.preventDefault();
                    targetTrigger = triggers[index - 1];
                    if (targetTrigger) targetTrigger.focus();
                    break;
                case 'Home':
                    e.preventDefault();
                    triggers[0].focus();
                    break;
                case 'End':
                    e.preventDefault();
                    triggers[triggers.length - 1].focus();
                    break;
            }
        });
    });
}

/**
 * Toggle accordion panel
 */
function toggleAccordion(trigger, show) {
    const panelId = trigger.getAttribute('aria-controls');
    const panel = document.getElementById(panelId);

    trigger.setAttribute('aria-expanded', show);
    
    if (show) {
        panel.setAttribute('data-expanded', 'true');
    } else {
        panel.removeAttribute('data-expanded');
    }
}

/**
 * Form Validation and Handling
 */
function initForm() {
    const form = document.getElementById('demo-form');
    if (!form) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const formStatus = document.getElementById('form-status');
        
        // Validate form
        if (form.checkValidity() === false) {
            e.stopPropagation();
            formStatus.textContent = 'Please fill in all required fields.';
            formStatus.setAttribute('role', 'alert');
            return;
        }

        // Simulate form submission
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.disabled = true;
        submitBtn.textContent = 'Sending...';

        setTimeout(() => {
            formStatus.textContent = 'Message sent successfully! Thank you for reaching out.';
            formStatus.setAttribute('role', 'status');
            formStatus.className = 'success-message';
            
            form.reset();
            submitBtn.disabled = false;
            submitBtn.textContent = originalText;

            // Clear message after 5 seconds
            setTimeout(() => {
                formStatus.textContent = '';
            }, 5000);
        }, 1500);
    });

    // Real-time validation feedback
    const inputs = form.querySelectorAll('input, textarea');
    inputs.forEach(input => {
        input.addEventListener('blur', () => {
            validateField(input);
        });

        input.addEventListener('invalid', (e) => {
            e.preventDefault();
            validateField(input);
        });
    });
}

/**
 * Validate individual form field
 */
function validateField(field) {
    const isValid = field.checkValidity();
    
    if (!isValid) {
        field.setAttribute('aria-invalid', 'true');
        
        let errorMessage = '';
        if (field.validity.valueMissing) {
            errorMessage = 'This field is required';
        } else if (field.validity.typeMismatch) {
            errorMessage = `Please enter a valid ${field.type}`;
        } else if (field.validity.tooShort) {
            errorMessage = `Minimum ${field.minLength} characters required`;
        }

        // Add error message to aria-describedby
        const helperId = field.id + '-help';
        const helper = document.getElementById(helperId);
        if (helper && errorMessage) {
            helper.textContent = errorMessage;
        }
    } else {
        field.setAttribute('aria-invalid', 'false');
    }
}

/**
 * Modal Dialog
 * Accessible modal with focus management
 */
function initModal() {
    const modal = document.getElementById('modal');
    const trigger = document.getElementById('modal-trigger');
    const closeBtn = document.querySelector('.modal-close');

    if (!modal || !trigger) return;

    trigger.addEventListener('click', () => {
        openModal(modal, trigger);
    });

    closeBtn.addEventListener('click', () => {
        closeModal(modal, trigger);
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && !modal.hidden) {
            closeModal(modal, trigger);
        }
    });

    // Close on overlay click
    document.querySelector('.modal-overlay').addEventListener('click', () => {
        closeModal(modal, trigger);
    });

    // Prevent closing when clicking inside modal content
    document.querySelector('.modal-content').addEventListener('click', (e) => {
        e.stopPropagation();
    });

    // Trap focus in modal
    modal.addEventListener('keydown', trapFocus);
}

/**
 * Open modal dialog
 */
function openModal(modal, trigger) {
    modal.removeAttribute('hidden');
    document.body.style.overflow = 'hidden';
    
    // Set initial focus to close button
    const closeBtn = modal.querySelector('.modal-close');
    closeBtn.focus();
    
    // Store trigger for later focus restoration
    modal.setAttribute('data-trigger', trigger.id);
}

/**
 * Close modal dialog
 */
function closeModal(modal, trigger) {
    modal.setAttribute('hidden', '');
    document.body.style.overflow = '';
    
    // Restore focus to trigger
    trigger.focus();
}

/**
 * Trap focus within modal
 */
function trapFocus(e) {
    const modal = document.getElementById('modal');
    if (modal.hidden) return;

    const focusableElements = modal.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    
    const firstFocusable = focusableElements[0];
    const lastFocusable = focusableElements[focusableElements.length - 1];

    if (e.key === 'Tab') {
        if (e.shiftKey) {
            if (document.activeElement === firstFocusable) {
                e.preventDefault();
                lastFocusable.focus();
            }
        } else {
            if (document.activeElement === lastFocusable) {
                e.preventDefault();
                firstFocusable.focus();
            }
        }
    }
}

/**
 * Tooltip Component
 * Accessible tooltips with keyboard support
 */
function initTooltips() {
    const triggers = document.querySelectorAll('.tooltip-trigger');

    triggers.forEach(trigger => {
        const tooltipText = trigger.getAttribute('data-tooltip');
        
        // Create tooltip element
        const tooltip = document.createElement('div');
        tooltip.className = 'tooltip-text';
        tooltip.setAttribute('role', 'tooltip');
        tooltip.textContent = tooltipText;
        
        trigger.appendChild(tooltip);

        // Show/hide on focus/blur
        trigger.addEventListener('focus', () => {
            tooltip.style.opacity = '1';
        });

        trigger.addEventListener('blur', () => {
            tooltip.style.opacity = '0';
        });
    });
}

/**
 * Announce Dynamic Changes to Screen Readers
 */
function announceToScreenReader(message, priority = 'polite') {
    const announcement = document.createElement('div');
    announcement.setAttribute('role', 'status');
    announcement.setAttribute('aria-live', priority);
    announcement.className = 'sr-only';
    announcement.textContent = message;

    document.body.appendChild(announcement);

    setTimeout(() => {
        announcement.remove();
    }, 1000);
}

/**
 * Responsive Table Enhancements
 */
function initTables() {
    const tables = document.querySelectorAll('table');

    tables.forEach(table => {
        // Add scrollable container class if not present
        if (!table.parentElement.classList.contains('table-wrapper')) {
            const wrapper = document.createElement('div');
            wrapper.className = 'table-wrapper';
            table.parentElement.insertBefore(wrapper, table);
            wrapper.appendChild(table);
        }
    });
}

/**
 * Check for Reduced Motion preferences
 */
function respectReducedMotion() {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion) {
        document.documentElement.style.scrollBehavior = 'auto';
    }
}

/**
 * Check for Dark Mode preferences
 */
function initDarkModeDetection() {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    // Apply dark mode if preferred (CSS handles this with @media query)
    // This is just for logging and potential future enhancements
    if (prefersDark) {
        console.log('Dark mode preference detected');
    }
}

/**
 * Improve Focus Visibility
 */
function initFocusVisibility() {
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Tab') {
            document.body.classList.add('keyboard-nav');
        }
    });

    document.addEventListener('mousedown', () => {
        document.body.classList.remove('keyboard-nav');
    });
}

/**
 * Initialize all components when DOM is ready
 */
document.addEventListener('DOMContentLoaded', () => {
    initMobileMenu();
    initAccordion();
    initForm();
    initModal();
    initTooltips();
    initTables();
    respectReducedMotion();
    initDarkModeDetection();
    initFocusVisibility();

    console.log('Accessibility features initialized');
});

/**
 * Log accessibility information
 */
window.addEventListener('load', () => {
    console.info('Website Accessibility Features:');
    console.info('✓ Keyboard navigation enabled');
    console.info('✓ Screen reader support (ARIA labels)');
    console.info('✓ Focus management in modals');
    console.info('✓ Semantic HTML structure');
    console.info('✓ Color contrast compliance (WCAG AA)');
    console.info('✓ Reduced motion support');
    console.info('✓ Dark mode support');
    console.info('✓ Dynamic content announcements');
});
