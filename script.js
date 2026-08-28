// ============================================================
// SAMAY KRISHI - FINAL SCRIPT
// Login → Farmer Details → Crop Details → Slot → Status
// ============================================================

const translations = {
    en: {
        loginSuccess: "Login Successful!",
        welcome: "Welcome to Samay Krishi",
        invalidCredentials: "Invalid mobile number or password.",
        fieldRequired: "This field is required.",
        mobileError: "Please enter a valid 10-digit mobile number.",
        aadhaarError: "Please enter a valid 12-digit Aadhaar/Farmer ID.",
        passwordError: "Password must be at least 8 characters.",
        passwordMismatch: "Passwords do not match.",
        registrationSuccess: "Registration Successful!",
        registrationComplete: "Your account has been created successfully.",
        farmer: "Farmer",
        admin: "Procurement Admin",
        centre: "Procurement Centre"
    },

    hi: {
        loginSuccess: "लॉगिन सफल!",
        welcome: "Samay Krishi में आपका स्वागत है",
        invalidCredentials: "मोबाइल नंबर या पासवर्ड गलत है।",
        fieldRequired: "यह जानकारी आवश्यक है।",
        mobileError: "कृपया सही 10 अंकों का मोबाइल नंबर दर्ज करें।",
        aadhaarError: "कृपया सही 12 अंकों का आधार/किसान ID दर्ज करें।",
        passwordError: "पासवर्ड कम से कम 8 अक्षरों का होना चाहिए।",
        passwordMismatch: "पासवर्ड मेल नहीं खाते।",
        registrationSuccess: "पंजीकरण सफल!",
        registrationComplete: "आपका खाता सफलतापूर्वक बन गया है।",
        farmer: "किसान",
        admin: "खरीद प्रशासक",
        centre: "खरीद केंद्र"
    }
};


// ============================================================
// GLOBAL STATE
// ============================================================

let currentLanguage =
    localStorage.getItem("samayKrishiLanguage") || "en";

let selectedRole = null;

let users =
    JSON.parse(localStorage.getItem("samayKrishiUsers")) || [];

let currentUser =
    JSON.parse(localStorage.getItem("samayKrishiLoggedInUser")) || null;


// ============================================================
// TRANSLATION
// ============================================================

function t(key) {
    return (
        translations[currentLanguage]?.[key] ||
        translations.en[key] ||
        key
    );
}


// ============================================================
// PAGE INITIALIZATION
// ============================================================

document.addEventListener("DOMContentLoaded", () => {

    setupLanguage();

    setupRoleCards();

    setupAuthentication();

    setupInputValidation();

    loadStoredLanguage();

    console.log("🌾 Samay Krishi Portal Ready");
});


// ============================================================
// LANGUAGE
// ============================================================

function setupLanguage() {

    document.querySelectorAll(".lang-btn").forEach(button => {

        button.addEventListener("click", () => {

            const lang = button.dataset.lang;

            changeLanguage(lang);
        });
    });
}


function changeLanguage(lang) {

    currentLanguage = lang;

    localStorage.setItem(
        "samayKrishiLanguage",
        lang
    );

    document.querySelectorAll(".lang-btn").forEach(btn => {

        btn.classList.toggle(
            "active",
            btn.dataset.lang === lang
        );
    });

    document.querySelectorAll(
        "[data-en][data-hi]"
    ).forEach(element => {

        const text =
            element.getAttribute(`data-${lang}`);

        if (text) {
            element.textContent = text;
        }
    });

    updateRoleLabels();
}


function loadStoredLanguage() {

    changeLanguage(currentLanguage);
}


// ============================================================
// ROLE SELECTION
// ============================================================

function setupRoleCards() {

    document.querySelectorAll(".role-card").forEach(card => {

        card.addEventListener("click", () => {

            selectedRole =
                card.dataset.role;

            openAuthModal(selectedRole);
        });
    });
}


function updateRoleLabels() {

    if (!selectedRole) return;

    const roleNames = {

        farmer: t("farmer"),

        admin: t("admin"),

        centre: t("centre")
    };

    const loginLabel =
        document.getElementById("roleLabel");

    const registerLabel =
        document.getElementById("registerRoleLabel");

    if (loginLabel) {

        loginLabel.textContent =
            `${t("login") || "Login"} as ${roleNames[selectedRole]}`;
    }

    if (registerLabel) {

        registerLabel.textContent =
            `${t("register") || "Register"} as ${roleNames[selectedRole]}`;
    }
}


// ============================================================
// AUTHENTICATION SETUP
// ============================================================

function setupAuthentication() {

    const closeModal =
        document.getElementById("closeModal");

    const closeSuccess =
        document.getElementById("closeSuccess");

    const loginForm =
        document.getElementById("loginForm");

    const registerForm =
        document.getElementById("registerForm");

    const toRegister =
        document.getElementById("toRegister");

    const toLogin =
        document.getElementById("toLogin");


    if (closeModal) {

        closeModal.addEventListener(
            "click",
            closeAuthModal
        );
    }


    if (closeSuccess) {

        closeSuccess.addEventListener(
            "click",
            closeSuccessModal
        );
    }


    if (loginForm) {

        loginForm.addEventListener(
            "submit",
            handleLogin
        );
    }


    if (registerForm) {

        registerForm.addEventListener(
            "submit",
            handleRegister
        );
    }


    if (toRegister) {

        toRegister.addEventListener("click", e => {

            e.preventDefault();

            switchAuthTab("register");
        });
    }


    if (toLogin) {

        toLogin.addEventListener("click", e => {

            e.preventDefault();

            switchAuthTab("login");
        });
    }


    const authModal =
        document.getElementById("authModal");

    if (authModal) {

        authModal.addEventListener("click", e => {

            if (e.target === authModal) {

                closeAuthModal();
            }
        });
    }


    const successModal =
        document.getElementById("successModal");

    if (successModal) {

        successModal.addEventListener("click", e => {

            if (e.target === successModal) {

                closeSuccessModal();
            }
        });
    }
}


// ============================================================
// OPEN AUTH MODAL
// ============================================================

function openAuthModal(role) {

    selectedRole = role;

    const modal =
        document.getElementById("authModal");

    if (!modal) return;

    modal.classList.remove("hidden");

    switchAuthTab("login");

    updateRoleLabels();

    document.getElementById("loginForm")?.reset();

    document.getElementById("registerForm")?.reset();

    clearAllErrors();
}


// ============================================================
// CLOSE AUTH MODAL
// ============================================================

function closeAuthModal() {

    const modal =
        document.getElementById("authModal");

    if (modal) {

        modal.classList.add("hidden");
    }
}


// ============================================================
// AUTH TABS
// ============================================================

function switchAuthTab(tab) {

    document.querySelectorAll(".auth-tab")
        .forEach(tabElement => {

            tabElement.classList.remove("active");
        });


    if (tab === "login") {

        document
            .getElementById("loginTab")
            ?.classList.add("active");

    } else {

        document
            .getElementById("registerTab")
            ?.classList.add("active");
    }
}


// ============================================================
// INPUT VALIDATION
// ============================================================

function setupInputValidation() {

    const mobileInputs = [
        "loginMobile",
        "regMobile"
    ];

    mobileInputs.forEach(id => {

        const input =
            document.getElementById(id);

        if (!input) return;

        input.addEventListener("input", () => {

            input.value =
                input.value
                    .replace(/\D/g, "")
                    .slice(0, 10);
        });
    });


    const aadhaar =
        document.getElementById("regAadhaar");

    if (aadhaar) {

        aadhaar.addEventListener("input", () => {

            aadhaar.value =
                aadhaar.value
                    .replace(/\D/g, "")
                    .slice(0, 12);
        });
    }
}


function validateMobileNumber(number) {

    return /^[0-9]{10}$/.test(number);
}


function validateAadhaarNumber(number) {

    return /^[0-9]{12}$/.test(number);
}


function validatePassword(password) {

    return password &&
        password.length >= 8;
}


// ============================================================
// ERROR HANDLING
// ============================================================

function clearAllErrors() {

    document
        .querySelectorAll(".error-message")
        .forEach(error => {

            error.textContent = "";
        });


    document
        .querySelectorAll(".form-input")
        .forEach(input => {

            input.classList.remove("error");
        });
}


function showError(elementId, message) {

    const input =
        document.getElementById(elementId);

    const error =
        document.getElementById(
            elementId + "Error"
        );

    if (input) {

        input.classList.add("error");
    }

    if (error) {

        error.textContent = message;
    }
}


// ============================================================
// LOGIN
// ============================================================

function handleLogin(e) {

    e.preventDefault();

    clearAllErrors();


    const mobile =
        document
            .getElementById("loginMobile")
            .value
            .trim();


    const password =
        document
            .getElementById("loginPassword")
            .value;


    let valid = true;


    if (!validateMobileNumber(mobile)) {

        showError(
            "loginMobile",
            t("mobileError")
        );

        valid = false;
    }


    if (!password) {

        showError(
            "loginPassword",
            t("fieldRequired")
        );

        valid = false;
    }


    if (!valid) return;


    const user =
        users.find(u =>

            u.mobile === mobile &&
            u.password === password &&
            u.role === selectedRole
        );


    if (!user) {

        showNotification(
            t("invalidCredentials")
        );

        return;
    }


    // Store logged-in user

    currentUser = {

        id: user.id,

        role: user.role,

        name: user.name,

        mobile: user.mobile,

        aadhaar: user.aadhaar,

        village: user.village
    };


    localStorage.setItem(
        "samayKrishiLoggedInUser",
        JSON.stringify(currentUser)
    );


    // Close login modal

    closeAuthModal();


    // Open dashboard

    setTimeout(() => {

        if (user.role === "farmer") {

            startFarmerJourney(user);

        } else {

            showRoleDashboard(user);
        }

    }, 400);
}


// ============================================================
// REGISTRATION
// ============================================================

function handleRegister(e) {

    e.preventDefault();

    clearAllErrors();


    const name =
        document.getElementById("regName").value.trim();


    const mobile =
        document.getElementById("regMobile").value.trim();


    const aadhaar =
        document.getElementById("regAadhaar").value.trim();


    const village =
        document.getElementById("regVillage").value.trim();


    const password =
        document.getElementById("regPassword").value;


    const confirmPassword =
        document.getElementById("regConfirmPassword").value;


    let valid = true;


    if (!name) {

        showError(
            "regName",
            t("fieldRequired")
        );

        valid = false;
    }


    if (!validateMobileNumber(mobile)) {

        showError(
            "regMobile",
            t("mobileError")
        );

        valid = false;
    }


    if (users.some(u => u.mobile === mobile)) {

        showError(
            "regMobile",
            "Mobile number already registered."
        );

        valid = false;
    }


    if (!validateAadhaarNumber(aadhaar)) {

        showError(
            "regAadhaar",
            t("aadhaarError")
        );

        valid = false;
    }


    if (!village) {

        showError(
            "regVillage",
            t("fieldRequired")
        );

        valid = false;
    }


    if (!validatePassword(password)) {

        showError(
            "regPassword",
            t("passwordError")
        );

        valid = false;
    }


    if (password !== confirmPassword) {

        showError(
            "regConfirmPassword",
            t("passwordMismatch")
        );

        valid = false;
    }


    if (!valid) return;


    const newUser = {

        id: Date.now(),

        role: selectedRole,

        name,

        mobile,

        aadhaar,

        village,

        password,

        createdAt:
            new Date().toISOString(),

        procurement: null
    };


    users.push(newUser);


    localStorage.setItem(
        "samayKrishiUsers",
        JSON.stringify(users)
    );


    showSuccessModal(
        t("registrationSuccess"),
        t("registrationComplete")
    );


    setTimeout(() => {

        closeSuccessModal();

        switchAuthTab("login");

    }, 1800);
}


// ============================================================
// SUCCESS MODAL
// ============================================================

function showSuccessModal(title, message) {

    const modal =
        document.getElementById("successModal");

    if (!modal) return;


    document.getElementById(
        "successTitle"
    ).textContent = title;


    document.getElementById(
        "successMessage"
    ).textContent = message;


    modal.classList.remove("hidden");
}


function closeSuccessModal() {

    document
        .getElementById("successModal")
        ?.classList.add("hidden");
}


// ============================================================
// NOTIFICATION
// ============================================================

function showNotification(message) {

    const notification =
        document.getElementById(
            "errorNotification"
        );

    if (!notification) {

        alert(message);

        return;
    }


    notification.textContent = message;

    notification.classList.remove("hidden");


    setTimeout(() => {

        notification.classList.add("hidden");

    }, 4000);
}


// ============================================================
// FARMER JOURNEY
// ============================================================

function startFarmerJourney(user) {

    createFarmerDetailsModal(user);
}


// ============================================================
// FARMER DETAILS POPUP
// ============================================================

function createFarmerDetailsModal(user) {

    removeExistingJourneyModal();


    const modal =
        document.createElement("div");

    modal.id =
        "farmerDetailsModal";

    modal.className =
        "journey-modal";


    modal.innerHTML = `

        <div class="journey-card">

            <div class="journey-icon">🌾</div>

            <div class="journey-progress">
                <span class="active"></span>
                <span></span>
                <span></span>
                <span></span>
            </div>

            <h2>Welcome, ${escapeHTML(user.name)}!</h2>

            <p>
                Let's collect a few details
                to find the best procurement slot for you.
            </p>

            <div class="user-summary">

                <div>
                    <strong>👤 Farmer</strong>
                    <span>${escapeHTML(user.name)}</span>
                </div>

                <div>
                    <strong>📱 Mobile</strong>
                    <span>${escapeHTML(user.mobile)}</span>
                </div>

                <div>
                    <strong>🏡 Village</strong>
                    <span>${escapeHTML(user.village)}</span>
                </div>

            </div>

            <button
                class="journey-btn"
                id="startProcurementBtn">

                Continue →

            </button>

        </div>
    `;


    document.body.appendChild(modal);


    requestAnimationFrame(() => {

        modal.classList.add("show");
    });


    document
        .getElementById("startProcurementBtn")
        .addEventListener(
            "click",
            () => openCropDetailsModal(user)
        );
}


// ============================================================
// CROP DETAILS
// ============================================================

function openCropDetailsModal(user) {

    const modal =
        document.getElementById(
            "farmerDetailsModal"
        );

    if (modal) {

        modal.remove();
    }


    const cropModal =
        document.createElement("div");

    cropModal.id =
        "cropDetailsModal";

    cropModal.className =
        "journey-modal";


    cropModal.innerHTML = `

        <div class="journey-card">

            <div class="journey-icon">🌱</div>

            <div class="journey-progress">
                <span class="active"></span>
                <span class="active"></span>
                <span></span>
                <span></span>
            </div>

            <h2>Procurement Details</h2>

            <p>
                Tell us about the produce you want to sell.
            </p>

            <div class="journey-form">

                <label>Crop Type</label>

                <select id="cropType">

                    <option value="">
                        Select crop
                    </option>

                    <option>Wheat</option>

                    <option>Rice</option>

                    <option>Paddy</option>

                    <option>Maize</option>

                    <option>Potato</option>

                    <option>Mustard</option>

                    <option>Sugarcane</option>

                    <option>Other</option>

                </select>


                <label>Expected Selling Date</label>

                <input
                    type="date"
                    id="sellingDate"
                >


                <label>Approximate Weight (kg)</label>

                <input
                    type="number"
                    id="cropWeight"
                    min="1"
                    placeholder="e.g. 500"
                >


                <label>Preferred Selling Location</label>

                <select id="sellingLocation">

                    <option value="">
                        Select location
                    </option>

                    <option>
                        Nearest Procurement Centre
                    </option>

                    <option>
                        Village Procurement Centre
                    </option>

                    <option>
                        District Procurement Centre
                    </option>

                </select>

            </div>


            <div
                id="journeyError"
                class="journey-error">
            </div>


            <button
                class="journey-btn"
                id="findSlotBtn">

                Find Best Slot →

            </button>

        </div>
    `;


    document.body.appendChild(cropModal);


    requestAnimationFrame(() => {

        cropModal.classList.add("show");
    });


    document
        .getElementById("findSlotBtn")
        .addEventListener(
            "click",
            () => recommendSlot(user)
        );
}


// ============================================================
// SLOT RECOMMENDATION
// ============================================================

function recommendSlot(user) {

    const crop =
        document.getElementById(
            "cropType"
        ).value;


    const date =
        document.getElementById(
            "sellingDate"
        ).value;


    const weight =
        document.getElementById(
            "cropWeight"
        ).value;


    const location =
        document.getElementById(
            "sellingLocation"
        ).value;


    const error =
        document.getElementById(
            "journeyError"
        );


    if (!crop || !date || !weight || !location) {

        error.textContent =
            "Please fill all the details.";

        return;
    }


    if (Number(weight) <= 0) {

        error.textContent =
            "Please enter a valid weight.";

        return;
    }


    const recommendedSlot =
        calculateSlot(Number(weight));


    const procurementData = {

        crop,

        sellingDate: date,

        weight: Number(weight),

        location,

        slot: recommendedSlot,

        status: "Slot Booked",

        bookingId:
            "SK" +
            Date.now().toString().slice(-6)
    };


    user.procurement =
        procurementData;


    saveUserProcurement(user);


    document
        .getElementById(
            "cropDetailsModal"
        )
        ?.remove();


    showSlotRecommendation(
        user,
        procurementData
    );
}


// ============================================================
// SLOT ALGORITHM
// ============================================================

function calculateSlot(weight) {

    if (weight <= 200) {

        return "09:00 AM – 10:00 AM";

    }

    if (weight <= 500) {

        return "10:00 AM – 11:00 AM";

    }

    if (weight <= 1000) {

        return "11:00 AM – 12:00 PM";

    }

    return "12:00 PM – 01:00 PM";
}


// ============================================================
// SLOT RESULT
// ============================================================

function showSlotRecommendation(
    user,
    data
) {

    const modal =
        document.createElement("div");

    modal.className =
        "journey-modal";


    modal.innerHTML = `

        <div class="journey-card slot-result">

            <div class="success-circle">
                ✓
            </div>

            <div class="journey-progress">
                <span class="active"></span>
                <span class="active"></span>
                <span class="active"></span>
                <span></span>
            </div>

            <h2>Best Slot Found!</h2>

            <p>
                We found a suitable procurement slot
                based on your details.
            </p>


            <div class="slot-box">

                <small>RECOMMENDED TIME</small>

                <strong>
                    ${data.slot}
                </strong>

                <span>
                    📅 ${formatDate(data.sellingDate)}
                </span>

            </div>


            <div class="booking-info">

                <div>
                    <span>🌾 Crop</span>
                    <strong>${escapeHTML(data.crop)}</strong>
                </div>

                <div>
                    <span>⚖️ Weight</span>
                    <strong>${data.weight} kg</strong>
                </div>

                <div>
                    <span>📍 Centre</span>
                    <strong>${escapeHTML(data.location)}</strong>
                </div>

            </div>


            <button
                class="journey-btn"
                id="confirmSlotBtn">

                Confirm & View Status

            </button>

        </div>
    `;


    document.body.appendChild(modal);


    requestAnimationFrame(() => {

        modal.classList.add("show");
    });


    document
        .getElementById("confirmSlotBtn")
        .addEventListener(
            "click",
            () => {

                modal.remove();

                showProcurementStatus(
                    user
                );
            }
        );
}


// ============================================================
// PROCUREMENT STATUS
// ============================================================

function showProcurementStatus(user) {

    const data =
        user.procurement;


    const modal =
        document.createElement("div");

    modal.className =
        "journey-modal";


    modal.innerHTML = `

        <div class="journey-card status-card">

            <div class="status-icon">
                📦
            </div>

            <div class="journey-progress">
                <span class="active"></span>
                <span class="active"></span>
                <span class="active"></span>
                <span class="active"></span>
            </div>

            <h2>Procurement Status</h2>

            <p>
                Your procurement request has been
                successfully scheduled.
            </p>


            <div class="status-main">

                <span class="status-badge">
                    ✓ ${data.status}
                </span>

                <h3>
                    ${data.slot}
                </h3>

                <p>
                    ${formatDate(data.sellingDate)}
                </p>

            </div>


            <div class="status-timeline">

                <div class="timeline-item completed">

                    <span>✓</span>

                    <div>
                        <strong>Request Submitted</strong>
                        <small>Completed</small>
                    </div>

                </div>


                <div class="timeline-item completed">

                    <span>✓</span>

                    <div>
                        <strong>Slot Assigned</strong>
                        <small>${data.slot}</small>
                    </div>

                </div>


                <div class="timeline-item current">

                    <span>●</span>

                    <div>
                        <strong>Procurement</strong>
                        <small>Waiting for visit</small>
                    </div>

                </div>


                <div class="timeline-item">

                    <span>○</span>

                    <div>
                        <strong>Payment</strong>
                        <small>Pending procurement</small>
                    </div>

                </div>

            </div>


            <div class="booking-id">

                Booking ID:
                <strong>${data.bookingId}</strong>

            </div>


            <button
                class="journey-btn"
                id="dashboardBtn">

                Open Farmer Dashboard

            </button>

        </div>
    `;


    document.body.appendChild(modal);


    requestAnimationFrame(() => {

        modal.classList.add("show");
    });


    document
        .getElementById("dashboardBtn")
        .addEventListener(
            "click",
            () => {

                modal.remove();

                showFarmerDashboard(user);
            }
        );
}


// ============================================================
// FARMER DASHBOARD
// ============================================================

function showFarmerDashboard(user) {

    document
        .querySelector(".container")
        ?.classList.add("dashboard-background");


    const existing =
        document.getElementById(
            "farmerDashboard"
        );


    if (existing) {

        existing.remove();
    }


    const dashboard =
        document.createElement("div");

    dashboard.id =
        "farmerDashboard";

    dashboard.className =
        "farmer-dashboard";


    const data =
        user.procurement;


    dashboard.innerHTML = `

        <div class="dashboard-header">

            <div>

                <span>🌾 Samay Krishi</span>

                <h1>
                    Namaste, ${escapeHTML(user.name)}!
                </h1>

                <p>
                    Here's your procurement overview.
                </p>

            </div>

            <button
                class="logout-btn"
                id="logoutBtn">

                Logout

            </button>

        </div>


        <div class="dashboard-grid">

            <div class="dashboard-card profile-card">

                <div class="card-icon">👨‍🌾</div>

                <h3>Farmer Profile</h3>

                <div class="profile-details">

                    <p>
                        <span>Name</span>
                        <strong>${escapeHTML(user.name)}</strong>
                    </p>

                    <p>
                        <span>Mobile</span>
                        <strong>${escapeHTML(user.mobile)}</strong>
                    </p>

                    <p>
                        <span>Village</span>
                        <strong>${escapeHTML(user.village)}</strong>
                    </p>

                </div>

            </div>


            <div class="dashboard-card slot-card">

                <div class="card-icon">📅</div>

                <h3>Your Procurement Slot</h3>

                <div class="big-slot">

                    ${data.slot}

                </div>

                <p>
                    ${formatDate(data.sellingDate)}
                </p>

                <span class="status-badge">
                    ✓ Slot Booked
                </span>

            </div>


            <div class="dashboard-card crop-card">

                <div class="card-icon">🌱</div>

                <h3>Produce Details</h3>

                <div class="profile-details">

                    <p>
                        <span>Crop</span>
                        <strong>${escapeHTML(data.crop)}</strong>
                    </p>

                    <p>
                        <span>Weight</span>
                        <strong>${data.weight} kg</strong>
                    </p>

                    <p>
                        <span>Location</span>
                        <strong>${escapeHTML(data.location)}</strong>
                    </p>

                </div>

            </div>


            <div class="dashboard-card status-dashboard-card">

                <div class="card-icon">📦</div>

                <h3>Procurement Status</h3>

                <div class="progress-line">

                    <div class="progress-fill"></div>

                </div>

                <div class="status-steps">

                    <span class="done">
                        Request
                    </span>

                    <span class="done">
                        Slot
                    </span>

                    <span class="current">
                        Procurement
                    </span>

                    <span>
                        Payment
                    </span>

                </div>

                <div class="status-badge">
                    ${data.status}
                </div>

            </div>

        </div>


        <div class="dashboard-footer">

            <p>
                Need help?
                Contact your nearest procurement centre.
            </p>

            <strong>
                Booking ID: ${data.bookingId}
            </strong>

        </div>
    `;


    document.body.appendChild(dashboard);


    requestAnimationFrame(() => {

        dashboard.classList.add("show");
    });


    document
        .getElementById("logoutBtn")
        .addEventListener(
            "click",
            logoutUser
        );
}


// ============================================================
// ADMIN / CENTRE DASHBOARD
// ============================================================

function showRoleDashboard(user) {

    const roleName =
        user.role === "admin"
            ? "Procurement Admin"
            : "Procurement Centre";


    const modal =
        document.createElement("div");

    modal.className =
        "journey-modal";


    modal.innerHTML = `

        <div class="journey-card">

            <div class="journey-icon">
                ${user.role === "admin" ? "👔" : "🏢"}
            </div>

            <h2>
                ${roleName} Dashboard
            </h2>

            <p>
                Welcome ${escapeHTML(user.name)}.
            </p>

            <div class="admin-placeholder">

                <div>📊</div>

                <h3>Management Panel</h3>

                <p>
                    Procurement monitoring,
                    farmer queues and payment
                    management will appear here.
                </p>

            </div>

            <button
                class="journey-btn"
                id="adminCloseBtn">

                Continue

            </button>

        </div>
    `;


    document.body.appendChild(modal);


    requestAnimationFrame(() => {

        modal.classList.add("show");
    });


    document
        .getElementById("adminCloseBtn")
        .addEventListener(
            "click",
            () => {

                modal.remove();
            }
        );
}


// ============================================================
// SAVE PROCUREMENT
// ============================================================

function saveUserProcurement(user) {

    const index =
        users.findIndex(
            u => u.id === user.id
        );


    if (index !== -1) {

        users[index] =
            {
                ...users[index],
                procurement:
                    user.procurement
            };


        localStorage.setItem(
            "samayKrishiUsers",
            JSON.stringify(users)
        );
    }


    currentUser = user;


    localStorage.setItem(
        "samayKrishiLoggedInUser",
        JSON.stringify(user)
    );
}


// ============================================================
// LOGOUT
// ============================================================

function logoutUser() {

    localStorage.removeItem(
        "samayKrishiLoggedInUser"
    );

    currentUser = null;


    document
        .getElementById("farmerDashboard")
        ?.remove();


    document
        .querySelector(".dashboard-background")
        ?.classList.remove(
            "dashboard-background"
        );


    location.reload();
}


// ============================================================
// UTILITIES
// ============================================================

function formatDate(dateString) {

    if (!dateString) return "";

    const date =
        new Date(dateString);

    return date.toLocaleDateString(
        "en-IN",
        {
            day: "numeric",
            month: "long",
            year: "numeric"
        }
    );
}


function removeExistingJourneyModal() {

    document
        .querySelectorAll(
            ".journey-modal"
        )
        .forEach(modal => {

            modal.remove();
        });
}


function escapeHTML(value) {

    const div =
        document.createElement("div");

    div.textContent =
        value ?? "";

    return div.innerHTML;
}


// ============================================================
// AUTO LOGIN CHECK
// ============================================================

function checkExistingLogin() {

    const savedUser =
        JSON.parse(
            localStorage.getItem(
                "samayKrishiLoggedInUser"
            )
        );


    if (!savedUser) return;


    const user =
        users.find(
            u => u.id === savedUser.id
        );


    if (!user) return;


    currentUser = user;

    // We intentionally do NOT
    // automatically show personal data
    // on the homepage.

    console.log(
        "Existing Samay Krishi session found."
    );
}


// Run session check

checkExistingLogin();
