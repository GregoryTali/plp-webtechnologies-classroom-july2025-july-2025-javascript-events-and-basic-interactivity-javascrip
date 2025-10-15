// ========== Light/Dark Mode Toggle ==========
const toggleThemeBtn = document.getElementById('toggleTheme');
toggleThemeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// ========== Click Counter ==========
let count = 0;
const counterDisplay = document.getElementById('counter');
const clickCounterBtn = document.getElementById('clickCounter');
clickCounterBtn.addEventListener('click', () => {
    count++;
    counterDisplay.textContent = count;
});

// ========== Collapsible FAQ ==========
const faqQuestions = document.querySelectorAll('.faq-question');
faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
        const answer = question.nextElementSibling;
        answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
    });
});

// ========== Form Validation ==========
const form = document.getElementById('signupForm');
form.addEventListener('submit', (e) => {
    e.preventDefault(); // prevent form submission

    // Clear previous errors
    document.getElementById('nameError').textContent = '';
    document.getElementById('emailError').textContent = '';
    document.getElementById('passwordError').textContent = '';
    document.getElementById('formSuccess').textContent = '';

    // Get input values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    let valid = true;

    // Name validation
    if (name === '') {
        document.getElementById('nameError').textContent = 'Name is required.';
        valid = false;
    }

    // Email validation (simple regex)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        document.getElementById('emailError').textContent = 'Enter a valid email.';
        valid = false;
    }

    // Password validation
    if (password.length < 6) {
        document.getElementById('passwordError').textContent = 'Password must be at least 6 characters.';
        valid = false;
    }

    // If all fields are valid
    if (valid) {
        document.getElementById('formSuccess').textContent = 'Form submitted successfully!';
        form.reset();
    }
});
