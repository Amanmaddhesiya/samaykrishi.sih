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

function handleLogin(e) {
    e.preventDefault();
    clearAllErrors();

    const mobile = document.getElementById('loginMobile').value.trim();
    const password = document.getElementById('loginPassword').value;

    let isValid = true;

    if (!mobile) {
        showError('loginMobile', t('fieldRequired'));
        isValid = false;
    } else if (!validateMobileNumber(mobile)) {
        showError('loginMobile', t('mobileError'));
        isValid = false;
    }

    if (!password) {
        showError('loginPassword', t('fieldRequired'));
        isValid = false;
    }

    if (!isValid) return;

    const user = users.find(
        u => u.mobile === mobile &&
        u.password === password &&
        u.role === selectedRole
    );

    if (!user) {
        showNotification(t('invalidCredentials'), 'error');
        return;
    }

    // Save logged-in user
    localStorage.setItem(
        'samayKrishiLoggedInUser',
        JSON.stringify({
            role: user.role,
            name: user.name,
            mobile: user.mobile,
            aadhaar: user.aadhaar,
            village: user.village
        })
    );

    // Close login modal
    closeAuthModal();

    // Open dashboard
    setTimeout(() => {
        openDashboard(user);
    }, 350);
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

// ============================================================
// SAMAY KRISHI - MODERN POST LOGIN DASHBOARD
// ============================================================

function openDashboard(user) {

    // Remove old dashboard if it exists
    const oldDashboard = document.getElementById('samayDashboard');
    if (oldDashboard) {
        oldDashboard.remove();
    }

    // Hide landing page
    document.querySelector('.container').style.display = 'none';
    document.querySelector('.language-toggle').style.display = 'none';

    const dashboard = document.createElement('div');
    dashboard.id = 'samayDashboard';

    const farmerName = user.name || 'Farmer';
    const village = user.village || 'Your Village';
    const mobile = user.mobile || '';

    dashboard.innerHTML = `
        <div class="dashboard-bg">
            <div class="floating-leaf leaf-1">🌿</div>
            <div class="floating-leaf leaf-2">🌱</div>
            <div class="floating-leaf leaf-3">🍃</div>
            <div class="floating-cloud cloud-1">☁️</div>
            <div class="floating-cloud cloud-2">☁️</div>
        </div>

        <!-- DASHBOARD HEADER -->
        <header class="dashboard-header">

            <div class="dashboard-brand">
                <div class="dashboard-logo">🌾</div>

                <div>
                    <h1>Samay Krishi</h1>
                    <p data-dashboard-en="Hassle-free procurement for farmers."
                       data-dashboard-hi="किसानों के लिए परेशानी मुक्त खरीद।">
                       Hassle-free procurement for farmers.
                    </p>
                </div>
            </div>

            <div class="dashboard-actions">

                <button class="dashboard-lang active" onclick="dashboardLanguage('en')">
                    English
                </button>

                <button class="dashboard-lang" onclick="dashboardLanguage('hi')">
                    हिंदी
                </button>

                <button class="notification-btn" onclick="showDashboardNotification()">
                    🔔
                    <span class="notification-dot"></span>
                </button>

                <button class="logout-btn" onclick="logoutUser()">
                    ↪ Logout
                </button>

            </div>

        </header>


        <!-- MAIN DASHBOARD -->
        <main class="dashboard-main">

            <!-- WELCOME HERO -->
            <section class="dashboard-welcome">

                <div class="welcome-content">

                    <div class="welcome-badge">
                        <span>●</span>
                        <span data-dashboard-en="Portal Active"
                              data-dashboard-hi="पोर्टल सक्रिय">
                              Portal Active
                        </span>
                    </div>

                    <h2>
                        <span data-dashboard-en="Namaste,"
                              data-dashboard-hi="नमस्ते,">
                              Namaste,
                        </span>
                        <strong>${farmerName}</strong> 👋
                    </h2>

                    <p data-dashboard-en="Your procurement journey is now simpler, faster and transparent."
                       data-dashboard-hi="आपकी खरीद प्रक्रिया अब आसान, तेज और पारदर्शी है।">
                       Your procurement journey is now simpler, faster and transparent.
                    </p>

                    <div class="location-pill">
                        📍 ${village}
                    </div>

                </div>

                <div class="hero-farmer">
                    <div class="sun"></div>
                    <div class="field"></div>
                    <div class="farmer-character">👨‍🌾</div>
                    <div class="crop crop-1">🌾</div>
                    <div class="crop crop-2">🌾</div>
                    <div class="crop crop-3">🌾</div>
                </div>

            </section>


            <!-- QUICK STATS -->
            <section class="dashboard-stats">

                <div class="stat-card stat-green">
                    <div class="stat-icon">🎫</div>
                    <div>
                        <span data-dashboard-en="Queue Position"
                              data-dashboard-hi="कतार स्थिति">
                              Queue Position
                        </span>
                        <strong>12</strong>
                        <small data-dashboard-en="Farmers ahead"
                               data-dashboard-hi="आगे किसान">
                               Farmers ahead
                        </small>
                    </div>
                </div>


                <div class="stat-card stat-blue">
                    <div class="stat-icon">📅</div>
                    <div>
                        <span data-dashboard-en="Next Slot"
                              data-dashboard-hi="अगला स्लॉट">
                              Next Slot
                        </span>
                        <strong>10:30 AM</strong>
                        <small data-dashboard-en="Today"
                               data-dashboard-hi="आज">
                               Today
                        </small>
                    </div>
                </div>


                <div class="stat-card stat-orange">
                    <div class="stat-icon">📦</div>
                    <div>
                        <span data-dashboard-en="Procurement"
                              data-dashboard-hi="खरीद">
                              Procurement
                        </span>
                        <strong>Pending</strong>
                        <small data-dashboard-en="Verification in progress"
                               data-dashboard-hi="सत्यापन जारी है">
                               Verification in progress
                        </small>
                    </div>
                </div>


                <div class="stat-card stat-purple">
                    <div class="stat-icon">💰</div>
                    <div>
                        <span data-dashboard-en="Payment"
                              data-dashboard-hi="भुगतान">
                              Payment
                        </span>
                        <strong>₹0</strong>
                        <small data-dashboard-en="Awaiting procurement"
                               data-dashboard-hi="खरीद की प्रतीक्षा">
                               Awaiting procurement
                        </small>
                    </div>
                </div>

            </section>


            <!-- ACTION AREA -->
            <section class="dashboard-grid">

                <!-- BOOK SLOT -->
                <div class="dashboard-card booking-card">

                    <div class="card-heading">
                        <div class="heading-icon">📅</div>

                        <div>
                            <h3 data-dashboard-en="Book Procurement Slot"
                                data-dashboard-hi="खरीद स्लॉट बुक करें">
                                Book Procurement Slot
                            </h3>

                            <p data-dashboard-en="Choose a convenient date and time."
                               data-dashboard-hi="अपनी सुविधानुसार तारीख और समय चुनें।">
                               Choose a convenient date and time.
                            </p>
                        </div>
                    </div>

                    <div class="booking-form">

                        <div class="booking-input">
                            <label data-dashboard-en="Select Date"
                                   data-dashboard-hi="तारीख चुनें">
                                   Select Date
                            </label>

                            <select id="slotDate">
                                <option>Today - 28 Aug</option>
                                <option>29 Aug</option>
                                <option>30 Aug</option>
                                <option>31 Aug</option>
                            </select>
                        </div>


                        <div class="booking-input">
                            <label data-dashboard-en="Preferred Time"
                                   data-dashboard-hi="पसंदीदा समय">
                                   Preferred Time
                            </label>

                            <select id="slotTime">
                                <option>09:00 AM - 10:00 AM</option>
                                <option>10:00 AM - 11:00 AM</option>
                                <option>11:00 AM - 12:00 PM</option>
                                <option>02:00 PM - 03:00 PM</option>
                            </select>
                        </div>

                    </div>

                    <button class="primary-dashboard-btn"
                            onclick="bookProcurementSlot()">

                        <span>📅</span>

                        <span data-dashboard-en="Book My Slot"
                              data-dashboard-hi="मेरा स्लॉट बुक करें">
                              Book My Slot
                        </span>

                    </button>

                </div>


                <!-- QUEUE -->
                <div class="dashboard-card queue-card">

                    <div class="card-heading">
                        <div class="heading-icon">🎫</div>

                        <div>
                            <h3 data-dashboard-en="Live Queue"
                                data-dashboard-hi="लाइव कतार">
                                Live Queue
                            </h3>

                            <p data-dashboard-en="Real-time procurement queue"
                               data-dashboard-hi="वास्तविक समय खरीद कतार">
                               Real-time procurement queue
                            </p>
                        </div>
                    </div>


                    <div class="queue-number">
                        <span>#</span>
                        <strong id="queuePosition">12</strong>
                    </div>

                    <div class="queue-progress">
                        <div class="queue-progress-fill"></div>
                    </div>

                    <div class="queue-info">
                        <span>
                            🟢
                            <span data-dashboard-en="Centre is active"
                                  data-dashboard-hi="केंद्र सक्रिय है">
                                  Centre is active
                            </span>
                        </span>

                        <span>
                            ~35 min
                        </span>
                    </div>

                    <button class="secondary-dashboard-btn"
                            onclick="refreshQueue()">

                        🔄
                        <span data-dashboard-en="Refresh Queue"
                              data-dashboard-hi="कतार अपडेट करें">
                              Refresh Queue
                        </span>

                    </button>

                </div>


                <!-- PROCUREMENT STATUS -->
                <div class="dashboard-card status-card">

                    <div class="card-heading">
                        <div class="heading-icon">📦</div>

                        <div>
                            <h3 data-dashboard-en="Procurement Status"
                                data-dashboard-hi="खरीद स्थिति">
                                Procurement Status
                            </h3>

                            <p data-dashboard-en="Track your produce"
                               data-dashboard-hi="अपनी उपज की स्थिति देखें">
                               Track your produce
                            </p>
                        </div>
                    </div>


                    <div class="timeline">

                        <div class="timeline-item completed">
                            <div class="timeline-dot">✓</div>

                            <div>
                                <strong data-dashboard-en="Slot Booked"
                                        data-dashboard-hi="स्लॉट बुक">
                                        Slot Booked
                                </strong>

                                <small data-dashboard-en="Completed"
                                       data-dashboard-hi="पूरा हुआ">
                                       Completed
                                </small>
                            </div>
                        </div>


                        <div class="timeline-item active">
                            <div class="timeline-dot">2</div>

                            <div>
                                <strong data-dashboard-en="At Procurement Centre"
                                        data-dashboard-hi="खरीद केंद्र पर">
                                        At Procurement Centre
                                </strong>

                                <small data-dashboard-en="Waiting for verification"
                                       data-dashboard-hi="सत्यापन की प्रतीक्षा">
                                       Waiting for verification
                                </small>
                            </div>
                        </div>


                        <div class="timeline-item">
                            <div class="timeline-dot">3</div>

                            <div>
                                <strong data-dashboard-en="Quality Check"
                                        data-dashboard-hi="गुणवत्ता जांच">
                                        Quality Check
                                </strong>

                                <small data-dashboard-en="Pending"
                                       data-dashboard-hi="लंबित">
                                       Pending
                                </small>
                            </div>
                        </div>


                        <div class="timeline-item">
                            <div class="timeline-dot">4</div>

                            <div>
                                <strong data-dashboard-en="Payment Released"
                                        data-dashboard-hi="भुगतान जारी">
                                        Payment Released
                                </strong>

                                <small data-dashboard-en="Pending"
                                       data-dashboard-hi="लंबित">
                                       Pending
                                </small>
                            </div>
                        </div>

                    </div>

                </div>


                <!-- PROFILE -->
                <div class="dashboard-card profile-card">

                    <div class="card-heading">
                        <div class="heading-icon">👨‍🌾</div>

                        <div>
                            <h3 data-dashboard-en="Farmer Profile"
                                data-dashboard-hi="किसान प्रोफाइल">
                                Farmer Profile
                            </h3>

                            <p data-dashboard-en="Your registered details"
                               data-dashboard-hi="आपका पंजीकृत विवरण">
                               Your registered details
                            </p>
                        </div>
                    </div>


                    <div class="profile-info">

                        <div>
                            <span data-dashboard-en="Name"
                                  data-dashboard-hi="नाम">
                                  Name
                            </span>

                            <strong>${farmerName}</strong>
                        </div>


                        <div>
                            <span data-dashboard-en="Mobile"
                                  data-dashboard-hi="मोबाइल">
                                  Mobile
                            </span>

                            <strong>${mobile}</strong>
                        </div>


                        <div>
                            <span data-dashboard-en="Village"
                                  data-dashboard-hi="गांव">
                                  Village
                            </span>

                            <strong>${village}</strong>
                        </div>

                    </div>


                    <button class="secondary-dashboard-btn"
                            onclick="showProfileMessage()">

                        👤
                        <span data-dashboard-en="View Full Profile"
                              data-dashboard-hi="पूरी प्रोफाइल देखें">
                              View Full Profile
                        </span>

                    </button>

                </div>

            </section>


            <!-- NOTIFICATION STRIP -->
            <section class="notification-strip">

                <div class="notification-icon">
                    🔔
                </div>

                <div>
                    <strong data-dashboard-en="Important Update"
                            data-dashboard-hi="महत्वपूर्ण सूचना">
                            Important Update
                    </strong>

                    <p data-dashboard-en="Your procurement centre is currently accepting farmers. Please arrive according to your booked slot."
                       data-dashboard-hi="आपका खरीद केंद्र वर्तमान में किसानों की उपज स्वीकार कर रहा है। कृपया अपने बुक किए गए स्लॉट के अनुसार पहुंचें।">
                       Your procurement centre is currently accepting farmers. Please arrive according to your booked slot.
                    </p>
                </div>

            </section>


            <footer class="dashboard-footer">
                <span>🌾 Samay Krishi</span>
                <span data-dashboard-en="Smart procurement • Less waiting • Better transparency"
                      data-dashboard-hi="स्मार्ट खरीद • कम प्रतीक्षा • बेहतर पारदर्शिता">
                      Smart procurement • Less waiting • Better transparency
                </span>
            </footer>

        </main>
    `;

    document.body.appendChild(dashboard);

    // Small delay gives browser time to trigger animations
    requestAnimationFrame(() => {
        dashboard.classList.add('dashboard-visible');
    });
}


// ============================================================
// DASHBOARD LANGUAGE
// ============================================================

function dashboardLanguage(lang) {

    document.querySelectorAll('[data-dashboard-en][data-dashboard-hi]')
        .forEach(element => {

            element.textContent =
                element.getAttribute(`data-dashboard-${lang}`);

        });

    document.querySelectorAll('.dashboard-lang')
        .forEach(button => {

            button.classList.remove('active');

        });

    const buttons = document.querySelectorAll('.dashboard-lang');

    buttons.forEach(button => {

        if (
            (lang === 'en' && button.textContent.includes('English')) ||
            (lang === 'hi' && button.textContent.includes('हिंदी'))
        ) {
            button.classList.add('active');
        }

    });

    localStorage.setItem('samayKrishiDashboardLanguage', lang);
}


// ============================================================
// SLOT BOOKING
// ============================================================

function bookProcurementSlot() {

    const date = document.getElementById('slotDate').value;
    const time = document.getElementById('slotTime').value;

    showDashboardPopup(
        '🎉',
        'Slot Booked Successfully!',
        `Your procurement slot is confirmed for ${date}, ${time}.`
    );

    // Update queue
    const queue = document.getElementById('queuePosition');

    if (queue) {
        queue.textContent = '18';
    }
}


// ============================================================
// REFRESH QUEUE
// ============================================================

function refreshQueue() {

    const queue = document.getElementById('queuePosition');

    if (!queue) return;

    queue.style.transform = 'scale(0.5)';
    queue.style.opacity = '0';

    setTimeout(() => {

        const current = parseInt(queue.textContent) || 12;

        const newPosition =
            current > 3 ? current - 1 : 12;

        queue.textContent = newPosition;

        queue.style.transform = 'scale(1)';
        queue.style.opacity = '1';

    }, 500);

}


// ============================================================
// DASHBOARD NOTIFICATION
// ============================================================

function showDashboardNotification() {

    showDashboardPopup(
        '🔔',
        'New Notification',
        'Your procurement centre is active. Please follow your booked slot timing.'
    );

}


// ============================================================
// PROFILE
// ============================================================

function showProfileMessage() {

    const user =
        JSON.parse(
            localStorage.getItem('samayKrishiLoggedInUser')
        );

    if (!user) return;

    showDashboardPopup(
        '👨‍🌾',
        'Farmer Profile',
        `Name: ${user.name}<br>Village: ${user.village}<br>Mobile: ${user.mobile}`
    );

}


// ============================================================
// POPUP
// ============================================================

function showDashboardPopup(icon, title, message) {

    const old = document.getElementById('dashboardPopup');

    if (old) old.remove();

    const popup = document.createElement('div');

    popup.id = 'dashboardPopup';

    popup.innerHTML = `
        <div class="dashboard-popup-overlay">

            <div class="dashboard-popup">

                <button onclick="closeDashboardPopup()" class="popup-close">
                    ×
                </button>

                <div class="popup-icon">
                    ${icon}
                </div>

                <h2>${title}</h2>

                <p>${message}</p>

                <button
                    class="primary-dashboard-btn"
                    onclick="closeDashboardPopup()">
                    Continue
                </button>

            </div>

        </div>
    `;

    document.body.appendChild(popup);

    setTimeout(() => {
        popup.classList.add('popup-visible');
    }, 20);
}


function closeDashboardPopup() {

    const popup = document.getElementById('dashboardPopup');

    if (!popup) return;

    popup.classList.remove('popup-visible');

    setTimeout(() => {
        popup.remove();
    }, 300);
}


// ============================================================
// LOGOUT
// ============================================================

function logoutUser() {

    const dashboard =
        document.getElementById('samayDashboard');

    if (dashboard) {

        dashboard.classList.remove('dashboard-visible');

        setTimeout(() => {

            dashboard.remove();

            document.querySelector('.container').style.display = '';
            document.querySelector('.language-toggle').style.display = '';

            localStorage.removeItem('samayKrishiLoggedInUser');

        }, 400);

    }

}
