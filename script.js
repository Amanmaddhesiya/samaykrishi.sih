// ===========================
// SAMAY KRISHI - SCRIPT.JS
// Complete Portal Logic
// ===========================

// Language Translations
const translations = {
    en: {
        'welcomeTitle': 'Welcome to Samay Krishi',
        'welcomeText': 'Direct connection between farmers and buyers. Transparent pricing. Fair trade.',
        'selectRole': 'Select Your Role',
        'farmer': 'Farmer',
        'admin': 'Procurement Admin',
        'centre': 'Procurement Centre',
        'farmerDesc': 'Sell your produce directly',
        'adminDesc': 'Manage procurement activities',
        'centreDesc': 'Manage collection centers',
        'login': 'Login',
        'register': 'Register',
        'mobile': 'Mobile Number (10 digits)',
        'password': 'Password',
        'fullName': 'Full Name',
        'aadhaar': 'Aadhaar Number (12 digits)',
        'village': 'Village Name',
        'confirmPassword': 'Confirm Password',
        'passwordMin': 'Password (min 8 characters)',
        'dontHaveAccount': "Don't have an account?",
        'registerHere': 'Register here',
        'haveAccount': 'Already have an account?',
        'loginHere': 'Login here',
        'continue': 'Continue',
        'mobileError': 'Please enter a 10-digit mobile number',
        'aadhaarError': 'Please enter a 12-digit Aadhaar number',
        'passwordError': 'Password must be at least 8 characters',
        'passwordMismatch': 'Passwords do not match',
        'nameRequired': 'Please enter your full name',
        'villageRequired': 'Please enter your village name',
        'loginSuccess': 'Login Successful!',
        'registrationSuccess': 'Registration Successful!',
        'welcomeMessage': 'Welcome to Samay Krishi. Redirecting to dashboard...',
        'registrationComplete': 'Your account has been created. Please login with your credentials.',
        'invalidCredentials': 'Invalid mobile number or password',
        'fieldRequired': 'This field is required',
    },
    hi: {
        'welcomeTitle': 'Samay Krishi में आपका स्वागत है',
        'welcomeText': 'किसानों और खरीदारों के बीच सीधा संबंध। पारदर्शी मूल्य। न्यायसंगत व्यापार।',
        'selectRole': 'अपनी भूमिका चुनें',
        'farmer': 'किसान',
        'admin': 'खरीद प्रशासक',
        'centre': 'खरीद केंद्र',
        'farmerDesc': 'अपनी उपज सीधे बेचें',
        'adminDesc': 'खरीद गतिविधियों का प्रबंधन करें',
        'centreDesc': 'संग्रहण केंद्रों का प्रबंधन करें',
        'login': 'लॉगिन',
        'register': 'पंजीकरण',
        'mobile': 'मोबाइल नंबर (10 अंक)',
        'password': 'पासवर्ड',
        'fullName': 'पूरा नाम',
        'aadhaar': 'आधार नंबर (12 अंक)',
        'village': 'गांव का नाम',
        'confirmPassword': 'पासवर्ड की पुष्टि करें',
        'passwordMin': 'पासवर्ड (कम से कम 8 वर्ण)',
        'dontHaveAccount': 'खाता नहीं है?',
        'registerHere': 'यहां पंजीकरण करें',
        'haveAccount': 'पहले से खाता है?',
        'loginHere': 'यहां लॉगिन करें',
        'continue': 'जारी रखें',
        'mobileError': 'कृपया 10-अंकीय मोबाइल नंबर दर्ज करें',
        'aadhaarError': 'कृपया 12-अंकीय आधार नंबर दर्ज करें',
        'passwordError': 'पासवर्ड कम से कम 8 वर्ण होना चाहिए',
        'passwordMismatch': 'पासवर्ड मेल नहीं खाते',
        'nameRequired': 'कृपया अपना पूरा नाम दर्ज करें',
        'villageRequired': 'कृपया अपना गांव का नाम दर्ज करें',
        'loginSuccess': 'लॉगिन सफल!',
        'registrationSuccess': 'पंजीकरण सफल!',
        'welcomeMessage': 'Samay Krishi में आपका स्वागत है। डैशबोर्ड पर भेज रहे हैं...',
        'registrationComplete': 'आपका खाता बन गया है। कृपया अपने क्रेडेंशियल्स के साथ लॉगिन करें।',
        'invalidCredentials': 'अमान्य मोबाइल नंबर या पासवर्ड',
        'fieldRequired': 'यह क्षेत्र आवश्यक है',
    }
};
// Global State
let currentLanguage = 'en';
let selectedRole = null;
let users = JSON.parse(localStorage.getItem('samayKrishiUsers')) || [];

// ===========================
// INITIALIZATION
// ===========================
document.addEventListener('DOMContentLoaded', function() {
    initializeLanguage();
    setupEventListeners();
    loadStoredData();
});

// ===========================
// LANGUAGE MANAGEMENT
// ===========================
function initializeLanguage() {
    const langBtns = document.querySelectorAll('.lang-btn');
    
    langBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const newLang = this.getAttribute('data-lang');
            changeLanguage(newLang);
        });
    });
}

function changeLanguage(lang) {
    currentLanguage = lang;
    
    // Update active language button
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.add('active');
        }
    });

    // Update all data attributes
    document.querySelectorAll('[data-en][data-hi]').forEach(element => {
        const text = element.getAttribute(`data-${lang}`);
        if (text) {
            element.textContent = text;
        }
    });

    // Update form labels
    document.querySelectorAll('label[data-en][data-hi]').forEach(label => {
        label.textContent = label.getAttribute(`data-${lang}`);
    });

    // Update form inputs placeholders
    updateInputPlaceholders();

    // Save language preference
    localStorage.setItem('samayKrishiLanguage', lang);
}

function updateInputPlaceholders() {
    const placeholders = {
        'en': {
            'loginMobile': '98XXXXXXXXX',
            'loginPassword': '••••••••',
            'regName': 'नाम',
            'regMobile': '98XXXXXXXXX',
            'regAadhaar': 'XXXX XXXX XXXX',
            'regVillage': 'गांव',
            'regPassword': '••••••••',
            'regConfirmPassword': '••••••••'
        },
        'hi': {
            'loginMobile': '98XXXXXXXXX',
            'loginPassword': '••••••••',
            'regName': 'नाम',
            'regMobile': '98XXXXXXXXX',
            'regAadhaar': 'XXXX XXXX XXXX',
            'regVillage': 'गांव',
            'regPassword': '••••••••',
            'regConfirmPassword': '••••••••'
        }
    };

    Object.keys(placeholders[currentLanguage]).forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            element.placeholder = placeholders[currentLanguage][id];
        }
    });
}

function t(key) {
    return translations[currentLanguage][key] || translations['en'][key];
}

// ===========================
// EVENT LISTENERS
// ===========================
function setupEventListeners() {
    // Role Card Selection
    document.querySelectorAll('.role-card').forEach(card => {
        card.addEventListener('click', function() {
            openAuthModal(this.getAttribute('data-role'));
        });
    });

    // Modal Controls
    document.getElementById('closeModal').addEventListener('click', closeAuthModal);
    document.getElementById('closeSuccess').addEventListener('click', closeSuccessModal);

    // Tab Switching
    document.getElementById('toRegister').addEventListener('click', function(e) {
        e.preventDefault();
        switchAuthTab('register');
    });

    document.getElementById('toLogin').addEventListener('click', function(e) {
        e.preventDefault();
        switchAuthTab('login');
    });

    // Form Submissions
    document.getElementById('loginForm').addEventListener('submit', handleLogin);
    document.getElementById('registerForm').addEventListener('submit', handleRegister);

    // Close modal when clicking outside
    document.getElementById('authModal').addEventListener('click', function(e) {
        if (e.target === this) {
            closeAuthModal();
        }
    });

    document.getElementById('successModal').addEventListener('click', function(e) {
        if (e.target === this) {
            closeSuccessModal();
        }
    });

    // Input validation on change
    document.getElementById('regMobile').addEventListener('input', function() {
        this.value = this.value.replace(/[^0-9]/g, '').substring(0, 10);
    });

    document.getElementById('loginMobile').addEventListener('input', function() {
        this.value = this.value.replace(/[^0-9]/g, '').substring(0, 10);
    });

    document.getElementById('regAadhaar').addEventListener('input', function() {
        this.value = this.value.replace(/[^0-9]/g, '').substring(0, 12);
    });

    // Real-time validation feedback
    document.getElementById('regPassword').addEventListener('input', validatePasswordStrength);
    document.getElementById('regConfirmPassword').addEventListener('input', validatePasswordMatch);
}

// ===========================
// MODAL MANAGEMENT
// ===========================
function openAuthModal(role) {
    selectedRole = role;
    document.getElementById('authModal').classList.remove('hidden');
    
    // Update role label
    const roleNames = {
        'farmer': t('farmer'),
        'admin': t('admin'),
        'centre': t('centre')
    };
    
    document.getElementById('roleLabel').textContent = `${t('login')} as ${roleNames[role]}`;
    document.getElementById('registerRoleLabel').textContent = `${t('register')} as ${roleNames[role]}`;
    
    // Show login tab by default
    switchAuthTab('login');
    
    // Reset form
    document.getElementById('loginForm').reset();
    document.getElementById('registerForm').reset();
    clearAllErrors();
}

function closeAuthModal() {
    document.getElementById('authModal').classList.add('hidden');
    selectedRole = null;
}

function closeSuccessModal() {
    document.getElementById('successModal').classList.add('hidden');
}

function switchAuthTab(tab) {
    document.querySelectorAll('.auth-tab').forEach(t => t.classList.remove('active'));
    
    if (tab === 'login') {
        document.getElementById('loginTab').classList.add('active');
    } else {
        document.getElementById('registerTab').classList.add('active');
    }
}

// ===========================
// VALIDATION FUNCTIONS
// ===========================
function validateMobileNumber(mobile) {
    return /^[0-9]{10}$/.test(mobile);
}

function validateAadhaarNumber(aadhaar) {
    return /^[0-9]{12}$/.test(aadhaar);
}

function validatePassword(password) {
    return password && password.length >= 8;
}

function validatePasswordStrength() {
    const password = document.getElementById('regPassword').value;
    const error = document.getElementById('regPasswordError');
    
    if (!password) {
        error.textContent = '';
        return false;
    }
    
    if (password.length < 8) {
        error.textContent = t('passwordError');
        return false;
    }
    
    error.textContent = '';
    return true;
}

function validatePasswordMatch() {
    const password = document.getElementById('regPassword').value;
    const confirmPassword = document.getElementById('regConfirmPassword').value;
    const error = document.getElementById('regConfirmPasswordError');
    
    if (confirmPassword && password !== confirmPassword) {
        error.textContent = t('passwordMismatch');
        return false;
    }
    
    error.textContent = '';
    return true;
}

function clearAllErrors() {
    document.querySelectorAll('.error-message').forEach(el => {
        el.textContent = '';
    });
    
    document.querySelectorAll('.form-input').forEach(el => {
        el.classList.remove('error');
    });
}

function showError(elementId, message) {
    const input = document.getElementById(elementId);
    const errorElement = document.getElementById(elementId + 'Error');
    
    if (input) input.classList.add('error');
    if (errorElement) errorElement.textContent = message;
}

function clearError(elementId) {
    const input = document.getElementById(elementId);
    const errorElement = document.getElementById(elementId + 'Error');
    
    if (input) input.classList.remove('error');
    if (errorElement) errorElement.textContent = '';
}

// ===========================
// LOGIN HANDLER
// ===========================
function handleLogin(e) {
    e.preventDefault();
    clearAllErrors();
    
    const mobile = document.getElementById('loginMobile').value.trim();
    const password = document.getElementById('loginPassword').value;
    
    let isValid = true;
    
    // Validate mobile
    if (!mobile) {
        showError('loginMobile', t('fieldRequired'));
        isValid = false;
    } else if (!validateMobileNumber(mobile)) {
        showError('loginMobile', t('mobileError'));
        isValid = false;
    }
    
    // Validate password
    if (!password) {
        showError('loginPassword', t('fieldRequired'));
        isValid = false;
    }
    
    if (!isValid) return;
    
    // Check credentials
    const user = users.find(u => u.mobile === mobile && u.password === password && u.role === selectedRole);
    
    if (!user) {
        showNotification(t('invalidCredentials'), 'error');
        return;
    }
    
    // Success
    showSuccessModal(t('loginSuccess'), t('welcomeMessage'));
    
    // Store logged-in user
    localStorage.setItem('samayKrishiLoggedInUser', JSON.stringify({
        role: user.role,
        name: user.name,
        mobile: user.mobile
    }));
    
    setTimeout(() => {
        closeAuthModal();
        closeSuccessModal();
    }, 2000);
}

// ===========================
// REGISTRATION HANDLER
// ===========================
function handleRegister(e) {
    e.preventDefault();
    clearAllErrors();
    
    const name = document.getElementById('regName').value.trim();
    const mobile = document.getElementById('regMobile').value.trim();
    const aadhaar = document.getElementById('regAadhaar').value.trim();
    const village = document.getElementById('regVillage').value.trim();
    const password = document.getElementById('regPassword').value;
    const confirmPassword = document.getElementById('regConfirmPassword').value;
    
    let isValid = true;
    
    // Validate name
    if (!name) {
        showError('regName', t('nameRequired'));
        isValid = false;
    }
    
    // Validate mobile
    if (!mobile) {
        showError('regMobile', t('fieldRequired'));
        isValid = false;
    } else if (!validateMobileNumber(mobile)) {
        showError('regMobile', t('mobileError'));
        isValid = false;
    }
    
    // Check if mobile already exists
    if (mobile && users.some(u => u.mobile === mobile)) {
        showError('regMobile', 'Mobile number already registered');
        isValid = false;
    }
    
    // Validate Aadhaar
    if (!aadhaar) {
        showError('regAadhaar', t('fieldRequired'));
        isValid = false;
    } else if (!validateAadhaarNumber(aadhaar)) {
        showError('regAadhaar', t('aadhaarError'));
        isValid = false;
    }
    
    // Validate village
    if (!village) {
        showError('regVillage', t('villageRequired'));
        isValid = false;
    }
    
    // Validate password
    if (!password) {
        showError('regPassword', t('fieldRequired'));
        isValid = false;
    } else if (!validatePassword(password)) {
        showError('regPassword', t('passwordError'));
        isValid = false;
    }
    
    // Validate confirm password
    if (!confirmPassword) {
        showError('regConfirmPassword', t('fieldRequired'));
        isValid = false;
    } else if (password !== confirmPassword) {
        showError('regConfirmPassword', t('passwordMismatch'));
        isValid = false;
    }
    
    if (!isValid) return;
    
    // Create new user
    const newUser = {
        id: Date.now(),
        role: selectedRole,
        name: name,
        mobile: mobile,
        aadhaar: aadhaar,
        village: village,
        password: password,
        createdAt: new Date().toISOString()
    };
    
    users.push(newUser);
    localStorage.setItem('samayKrishiUsers', JSON.stringify(users));
    
    // Success
    showSuccessModal(t('registrationSuccess'), t('registrationComplete'));
    
    setTimeout(() => {
        closeAuthModal();
        closeSuccessModal();
        switchAuthTab('login');
    }, 2000);
}

// ===========================
// MODAL DISPLAY FUNCTIONS
// ===========================
function showSuccessModal(title, message) {
    document.getElementById('successTitle').textContent = title;
    document.getElementById('successMessage').textContent = message;
    document.getElementById('successModal').classList.remove('hidden');
}

function showNotification(message, type = 'error') {
    const notification = document.getElementById('errorNotification');
    notification.textContent = message;
    notification.classList.remove('hidden', 'error-notification');
    
    if (type === 'error') {
        notification.classList.add('error-notification');
    }
    
    setTimeout(() => {
        notification.classList.add('hidden');
    }, 4000);
}

// ===========================
// LOCAL STORAGE
// ===========================
function loadStoredData() {
    const savedLanguage = localStorage.getItem('samayKrishiLanguage');
    if (savedLanguage) {
        const langBtn = document.querySelector(`[data-lang="${savedLanguage}"]`);
        if (langBtn) {
            langBtn.click();
        }
    }
}

// ===========================
// DEMO DATA (Remove in production)
// ===========================
function initializeDemoData() {
    if (users.length === 0) {
        users = [
            {
                id: 1,
                role: 'farmer',
                name: 'राज कुमार',
                mobile: '9876543210',
                aadhaar: '123456789012',
                village: 'गांव 1',
                password: 'password123',
                createdAt: new Date().toISOString()
            }
        ];
        localStorage.setItem('samayKrishiUsers', JSON.stringify(users));
    }
}

// Initialize demo data
initializeDemoData();

// ===========================
// CONSOLE LOG FOR DEBUGGING
// ===========================
console.log('%c Samay Krishi Portal Loaded', 'color: #2ecc71; font-size: 16px; font-weight: bold');
console.log('Users registered:', users);
console.log('Demo Login - Mobile: 9876543210, Password: password123');
