/**
 * SCRIPT.JS - Main JavaScript Logic
 * Handles dynamic rendering, user interactions, theme management, and page-specific functionality
 */

// ============================================
// INTERNATIONALIZATION - Language Support
// ============================================

/**
 * Translations object for multiple languages
 */
const translations = {
    en: {
        'nav.home': 'Home',
        'nav.map': 'Map View',
        'nav.dashboard': 'Dashboard',
        'theme.dark': 'Dark',
        'theme.light': 'Light',
        'hero.title': 'Delhi Water-Logging Hotspot Mapping System',
        'hero.subtitle': 'Real-time monitoring and predictive analytics for flood-prone areas across Delhi NCT',
        'problem.title': 'The Challenge',
        'problem.description': 'During monsoon season, Delhi faces severe water-logging issues that disrupt traffic, damage infrastructure, and pose risks to public safety. This system helps authorities identify high-risk zones, predict flooding events, and take preventive action through data-driven insights and AI-powered recommendations.',
        'stats.title': 'Current Impact Overview',
        'features.title': 'System Capabilities',
        'cta.title': 'View Real-Time Flood Risk Map',
        'cta.description': 'Access comprehensive ward-level water-logging data and predictive analytics',
        'cta.button': 'Open Flood Risk Map'
    },
    hi: {
        'nav.home': 'होम',
        'nav.map': 'मानचित्र दृश्य',
        'nav.dashboard': 'डैशबोर्ड',
        'theme.dark': 'डार्क',
        'theme.light': 'लाइट',
        'hero.title': 'दिल्ली जल-जमाव हॉटस्पॉट मैपिंग सिस्टम',
        'hero.subtitle': 'दिल्ली एनसीटी में बाढ़-प्रवण क्षेत्रों के लिए वास्तविक समय निगरानी और भविष्य कहनेवाला विश्लेषण',
        'problem.title': 'चुनौती',
        'problem.description': 'मानसून के मौसम में, दिल्ली को गंभीर जल-जमाव की समस्याओं का सामना करना पड़ता है जो यातायात को बाधित करती है, बुनियादी ढांचे को नुकसान पहुंचाती है और सार्वजनिक सुरक्षा के लिए जोखिम पैदा करती है। यह प्रणाली अधिकारियों को उच्च जोखिम वाले क्षेत्रों की पहचान करने, बाढ़ की घटनाओं की भविष्यवाणी करने और डेटा-संचालित अंतर्दृष्टि और एआई-संचालित सिफारिशों के माध्यम से निवारक कार्रवाई करने में मदद करती है।',
        'stats.title': 'वर्तमान प्रभाव अवलोकन',
        'features.title': 'सिस्टम क्षमताएं',
        'cta.title': 'वास्तविक समय बाढ़ जोखिम मानचित्र देखें',
        'cta.description': 'व्यापक वार्ड-स्तरीय जल-जमाव डेटा और भविष्य कहनेवाला विश्लेषण तक पहुंचें',
        'cta.button': 'बाढ़ जोखिम मानचित्र खोलें'
    },
    pa: {
        'nav.home': 'ਘਰ',
        'nav.map': 'ਨਕਸ਼ਾ ਦ੍ਰਿਸ਼',
        'nav.dashboard': 'ਡੈਸ਼ਬੋਰਡ',
        'theme.dark': 'ਡਾਰਕ',
        'theme.light': 'ਲਾਈਟ',
        'hero.title': 'ਦਿੱਲੀ ਪਾਣੀ-ਜਮ੍ਹਾਂ ਹੌਟਸਪੌਟ ਮੈਪਿੰਗ ਸਿਸਟਮ',
        'hero.subtitle': 'ਦਿੱਲੀ ਐਨਸੀਟੀ ਵਿੱਚ ਹੜ੍ਹ-ਪ੍ਰਵਾਨ ਖੇਤਰਾਂ ਲਈ ਰੀਅਲ-ਟਾਈਮ ਨਿਗਰਾਨੀ ਅਤੇ ਭਵਿੱਖਬਾਣੀ ਵਿਸ਼ਲੇਸ਼ਣ',
        'problem.title': 'ਚੁਣੌਤੀ',
        'problem.description': 'ਮਾਨਸੂਨ ਦੇ ਮੌਸਮ ਦੌਰਾਨ, ਦਿੱਲੀ ਨੂੰ ਗੰਭੀਰ ਪਾਣੀ-ਜਮ੍ਹਾਂ ਦੀਆਂ ਸਮੱਸਿਆਵਾਂ ਦਾ ਸਾਹਮਣਾ ਕਰਨਾ ਪੈਂਦਾ ਹੈ ਜੋ ਟ੍ਰੈਫਿਕ ਵਿੱਚ ਰੁਕਾਵਟ ਪਾਉਂਦੀਆਂ ਹਨ, ਬੁਨਿਆਦੀ ਢਾਂਚੇ ਨੂੰ ਨੁਕਸਾਨ ਪਹੁੰਚਾਉਂਦੀਆਂ ਹਨ ਅਤੇ ਜਨਤਕ ਸੁਰੱਖਿਆ ਲਈ ਖਤਰੇ ਪੈਦਾ ਕਰਦੀਆਂ ਹਨ। ਇਹ ਪ੍ਰਣਾਲੀ ਅਧਿਕਾਰੀਆਂ ਨੂੰ ਉੱਚ ਜੋਖਮ ਵਾਲੇ ਖੇਤਰਾਂ ਦੀ ਪਛਾਣ ਕਰਨ, ਹੜ੍ਹਾਂ ਦੀਆਂ ਘਟਨਾਵਾਂ ਦੀ ਭਵਿੱਖਬਾਣੀ ਕਰਨ ਅਤੇ ਡੇਟਾ-ਸੰਚਾਲਿਤ ਸੂਝ ਅਤੇ ਏਆਈ-ਸੰਚਾਲਿਤ ਸਿਫਾਰਸ਼ਾਂ ਰਾਹੀਂ ਰੋਕਥਾਮ ਕਾਰਵਾਈ ਕਰਨ ਵਿੱਚ ਮਦਦ ਕਰਦੀ ਹੈ।',
        'stats.title': 'ਮੌਜੂਦਾ ਪ੍ਰਭਾਵ ਸੰਖੇਪ',
        'features.title': 'ਸਿਸਟਮ ਸਮਰੱਥਾਵਾਂ',
        'cta.title': 'ਰੀਅਲ-ਟਾਈਮ ਹੜ੍ਹ ਜੋਖਮ ਨਕਸ਼ਾ ਦੇਖੋ',
        'cta.description': 'ਵਿਆਪਕ ਵਾਰਡ-ਪੱਧਰ ਪਾਣੀ-ਜਮ੍ਹਾਂ ਡੇਟਾ ਅਤੇ ਭਵਿੱਖਬਾਣੀ ਵਿਸ਼ਲੇਸ਼ਣ ਤੱਕ ਪਹੁੰਚ ਕਰੋ',
        'cta.button': 'ਹੜ੍ਹ ਜੋਖਮ ਨਕਸ਼ਾ ਖੋਲ੍ਹੋ'
    },
    ur: {
        'nav.home': 'ہوم',
        'nav.map': 'نقشہ منظر',
        'nav.dashboard': 'ڈیش بورڈ',
        'theme.dark': 'ڈارک',
        'theme.light': 'لائٹ',
        'hero.title': 'دہلی واٹر لاگنگ ہاٹ سپاٹ میپنگ سسٹم',
        'hero.subtitle': 'دہلی این سی ٹی میں سیلاب کے خطرے والے علاقوں کے لیے حقیقی وقت کی نگرانی اور پیشین گوئی کا تجزیہ',
        'problem.title': 'چیلنج',
        'problem.description': 'مانسون کے موسم میں، دہلی کو پانی جمع ہونے کے شدید مسائل کا سامنا کرنا پڑتا ہے جو ٹریفک میں خلل ڈالتے ہیں، انفراسٹرکچر کو نقصان پہنچاتے ہیں اور عوامی حفاظت کے لیے خطرات پیدا کرتے ہیں۔ یہ نظام حکام کو زیادہ خطرے والے علاقوں کی شناخت کرنے، سیلاب کے واقعات کی پیشین گوئی کرنے اور ڈیٹا پر مبنی بصیرت اور اے آئی سے چلنے والی سفارشات کے ذریعے احتیاطی اقدامات کرنے میں مدد کرتا ہے۔',
        'stats.title': 'موجودہ اثرات کا جائزہ',
        'features.title': 'نظام کی صلاحیتیں',
        'cta.title': 'حقیقی وقت سیلاب کے خطرے کا نقشہ دیکھیں',
        'cta.description': 'جامع وارڈ کی سطح پر پانی جمع ہونے کے ڈیٹا اور پیشین گوئی کے تجزیہ تک رسائی حاصل کریں',
        'cta.button': 'سیلاب کے خطرے کا نقشہ کھولیں'
    }
};

/**
 * Initialize language from localStorage or default to English
 */
function initializeLanguage() {
    const savedLanguage = localStorage.getItem('language') || 'en';
    const selector = document.getElementById('language-selector');
    if (selector) {
        selector.value = savedLanguage;
    }
    applyTranslations(savedLanguage);
}

/**
 * Change language
 */
function changeLanguage(lang) {
    localStorage.setItem('language', lang);
    applyTranslations(lang);
}

/**
 * Apply translations to all elements with data-i18n attribute
 */
function applyTranslations(lang) {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
    
    // Update HTML lang attribute
    document.documentElement.setAttribute('lang', lang);
    
    // Apply RTL for Urdu
    if (lang === 'ur') {
        document.documentElement.setAttribute('dir', 'rtl');
    } else {
        document.documentElement.setAttribute('dir', 'ltr');
    }
}

// ============================================
// THEME MANAGEMENT - Light/Dark Mode
// ============================================

/**
 * Initialize theme from localStorage or default to light mode
 */
function initializeTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeButton(savedTheme);
}

/**
 * Toggle between light and dark themes
 */
function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeButton(newTheme);
}

/**
 * Update theme toggle button UI
 */
function updateThemeButton(theme) {
    const themeIcon = document.getElementById('theme-icon');
    const themeText = document.getElementById('theme-text');
    
    if (themeIcon && themeText) {
        if (theme === 'dark') {
            themeIcon.textContent = '☀️';
            themeText.textContent = 'Light';
        } else {
            themeIcon.textContent = '🌙';
            themeText.textContent = 'Dark';
        }
    }
}

// Initialize theme and language on page load
document.addEventListener('DOMContentLoaded', function() {
    initializeTheme();
    initializeLanguage();
    initializeAnimations();
});

// ============================================
// ANIMATION UTILITIES
// ============================================

/**
 * Animate number counter from 0 to target value
 */
function animateCounter(element, target, duration = 1500, suffix = '') {
    const start = 0;
    const increment = target / (duration / 16); // 60fps
    let current = start;
    
    const updateCounter = () => {
        current += increment;
        if (current < target) {
            element.textContent = Math.floor(current) + suffix;
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target + suffix;
        }
    };
    
    updateCounter();
}

/**
 * Initialize scroll-based animations
 */
function initializeAnimations() {
    // Animate stat numbers on homepage
    const statNumbers = document.querySelectorAll('.stat-number');
    if (statNumbers.length > 0) {
        setTimeout(() => {
            statNumbers.forEach((stat, index) => {
                setTimeout(() => {
                    const text = stat.textContent;
                    const number = parseFloat(text.replace(/[^0-9.]/g, ''));
                    const suffix = text.replace(/[0-9.]/g, '');
                    
                    if (!isNaN(number)) {
                        animateCounter(stat, number, 1500, suffix);
                    }
                }, index * 100);
            });
        }, 300);
    }
    
    // Add stagger animation to hotspot items
    const hotspotItems = document.querySelectorAll('.hotspot-item');
    hotspotItems.forEach((item, index) => {
        item.style.animationDelay = `${index * 0.05}s`;
    });
    
    // Add stagger animation to table rows
    const tableRows = document.querySelectorAll('.wards-table tbody tr');
    tableRows.forEach((row, index) => {
        row.style.animationDelay = `${index * 0.03}s`;
    });
    
    // Add stagger to recommendation cards
    const recCards = document.querySelectorAll('.recommendation-card');
    recCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
    });
    
    // Add entrance animation to incident items
    const incidentItems = document.querySelectorAll('.incident-item');
    incidentItems.forEach((item, index) => {
        item.style.animation = 'fadeInUp 0.5s ease-out backwards';
        item.style.animationDelay = `${index * 0.1}s`;
    });
}

/**
 * Add pulse animation to high-risk markers
 */
function addMarkerPulse() {
    const markers = document.querySelectorAll('.hotspot-marker');
    markers.forEach(marker => {
        const fill = marker.getAttribute('fill');
        if (fill === '#dc2626') { // High risk red
            marker.style.animation = 'pulse 1.5s ease-in-out infinite';
        }
    });
}

// ============================================
// MAP PAGE FUNCTIONS
// ============================================

/**
 * Render hotspot markers on the SVG map
 */
function renderHotspotsOnMap() {
    const container = document.getElementById('hotspots-container');
    if (!container) return;

    // Clear existing hotspots
    container.innerHTML = '';

    // Add each ward as a clickable circle marker with stagger animation
    enhancedWardsData.forEach((ward, index) => {
        // Add delay for stagger effect
        setTimeout(() => {
            // Create simple, performant circle marker
            const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
            circle.setAttribute('cx', ward.x);
            circle.setAttribute('cy', ward.y);
            circle.setAttribute('r', '10');
            circle.setAttribute('fill', ward.riskColor);
            circle.setAttribute('stroke', '#fff');
            circle.setAttribute('stroke-width', '2.5');
            circle.setAttribute('cursor', 'pointer');
            circle.setAttribute('class', 'hotspot-marker');
            circle.style.transition = 'all 0.2s ease';
            
            // Simple hover effect - just scale
            circle.addEventListener('mouseenter', function() {
                this.setAttribute('r', '13');
                this.style.filter = 'brightness(1.2) drop-shadow(0 2px 6px rgba(0,0,0,0.3))';
            });
            
            circle.addEventListener('mouseleave', function() {
                this.setAttribute('r', '10');
                this.style.filter = 'drop-shadow(0 1px 3px rgba(0,0,0,0.2))';
            });

            // Add click handler
            circle.addEventListener('click', function() {
                navigateToWard(ward.id);
            });

            // Create label with better visibility
            const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
            text.setAttribute('x', ward.x);
            text.setAttribute('y', ward.y + 28);
            text.setAttribute('text-anchor', 'middle');
            text.setAttribute('font-size', '10');
            text.setAttribute('font-weight', '600');
            text.setAttribute('font-family', 'Inter');
            text.setAttribute('fill', 'var(--text-primary)');
            text.setAttribute('style', 'paint-order: stroke; stroke: var(--bg-elevated); stroke-width: 3px; stroke-linecap: round; stroke-linejoin: round;');
            text.textContent = ward.name;

            container.appendChild(circle);
            container.appendChild(text);
            
        }, index * 30); // Reduced stagger for faster load
    });
}

/**
 * Render list of hotspots in sidebar
 */
function renderHotspotsList() {
    const listContainer = document.getElementById('hotspots-list');
    if (!listContainer) return;

    listContainer.innerHTML = '';

    sortedWards.forEach((ward, index) => {
        // Add stagger animation delay
        const animationDelay = index * 0.05;
        const item = document.createElement('div');
        item.className = 'hotspot-item';
        item.innerHTML = `
            <div class="hotspot-rank">${index + 1}</div>
            <div class="hotspot-info">
                <div class="hotspot-name">${ward.name}</div>
                <div class="hotspot-district">${ward.district}</div>
            </div>
            <div class="hotspot-risk" style="background-color: ${ward.riskColor}">
                ${ward.riskLevel}
            </div>
        `;
        item.style.cursor = 'pointer';
        item.style.animationDelay = `${animationDelay}s`;
        item.addEventListener('click', () => navigateToWard(ward.id));
        listContainer.appendChild(item);
    });
}

/**
 * Navigate to ward detail page
 */
function navigateToWard(wardId) {
    window.location.href = `ward.html?id=${wardId}`;
}

// ============================================
// WARD DETAIL PAGE FUNCTIONS
// ============================================

/**
 * Load and display ward details
 */
function loadWardDetails() {
    // Get ward ID from URL
    const urlParams = new URLSearchParams(window.location.search);
    const wardId = parseInt(urlParams.get('id'));

    if (!wardId) {
        alert('Invalid ward ID');
        window.location.href = 'map.html';
        return;
    }

    // Find ward data
    const ward = enhancedWardsData.find(w => w.id === wardId);
    if (!ward) {
        alert('Ward not found');
        window.location.href = 'map.html';
        return;
    }

    // Populate ward information
    document.getElementById('ward-name').textContent = `${ward.name} - ${ward.district}`;
    
    // Risk badge
    const riskBadge = document.getElementById('risk-badge');
    riskBadge.textContent = `${ward.riskLevel} Risk`;
    riskBadge.style.backgroundColor = ward.riskColor;

    // Risk score with counter animation
    const riskScoreElement = document.getElementById('risk-score');
    animateCounter(riskScoreElement, ward.riskScore, 1500);
    
    const progressBar = document.getElementById('risk-progress');
    progressBar.style.setProperty('--progress-width', `${ward.riskScore}%`);
    progressBar.style.backgroundColor = ward.riskColor;
    
    // Trigger progress animation
    setTimeout(() => {
        progressBar.style.width = `${ward.riskScore}%`;
    }, 100);

    // Rainfall
    document.getElementById('rainfall').textContent = `${ward.rainfall} mm`;
    document.getElementById('rainfall-level').textContent = ward.rainfallLevel;

    // Drainage
    document.getElementById('drainage-score').textContent = `${ward.drainageScore}/100`;
    document.getElementById('drainage-status').textContent = ward.drainageStatus;

    // Past incidents
    document.getElementById('incidents').textContent = ward.pastIncidents;

    // Render incident history
    renderIncidentHistory(ward);

    // Render prediction logic
    renderPredictionLogic(ward);

    // Render recommendations
    renderRecommendations(ward);
}

/**
 * Render historical incidents
 */
function renderIncidentHistory(ward) {
    const list = document.getElementById('incidents-list');
    if (!list) return;

    if (ward.incidentHistory.length === 0) {
        list.innerHTML = '<p class="no-incidents">No water-logging incidents recorded in 2024</p>';
        return;
    }

    list.innerHTML = '';
    ward.incidentHistory.forEach(incident => {
        const item = document.createElement('div');
        item.className = 'incident-item';
        item.innerHTML = `
            <div class="incident-date">${incident.date}</div>
            <div class="incident-severity ${incident.severity.toLowerCase()}">${incident.severity}</div>
            <div class="incident-details">
                <strong>Duration:</strong> ${incident.duration}<br>
                ${incident.description}
            </div>
        `;
        list.appendChild(item);
    });
}

/**
 * Render prediction logic explanation
 */
function renderPredictionLogic(ward) {
    const container = document.getElementById('prediction-logic');
    if (!container) return;

    let prediction = '';
    let reasoning = '';

    if (ward.rainfall >= 70 && ward.drainageScore < 40) {
        prediction = '🔴 High Flood Risk Predicted';
        reasoning = `Heavy rainfall (${ward.rainfall}mm) combined with poor drainage capacity (${ward.drainageScore}/100) 
                     indicates high probability of severe water-logging.`;
    } else if (ward.rainfall >= 40 && ward.drainageScore < 60) {
        prediction = '🟠 Medium Flood Risk Predicted';
        reasoning = `Moderate rainfall (${ward.rainfall}mm) with average drainage (${ward.drainageScore}/100) 
                     suggests potential for localized water-logging.`;
    } else {
        prediction = '🟢 Low Flood Risk';
        reasoning = `Current rainfall levels (${ward.rainfall}mm) and drainage capacity (${ward.drainageScore}/100) 
                     indicate minimal risk of water-logging.`;
    }

    container.innerHTML = `
        <div class="prediction-result">${prediction}</div>
        <p class="prediction-reasoning">${reasoning}</p>
    `;

    // Render timeline actions
    renderTimelineActions(ward);
}

/**
 * Render timeline-based actions
 */
function renderTimelineActions(ward) {
    const beforeRain = document.getElementById('before-rain-actions');
    const duringRain = document.getElementById('during-rain-actions');
    const afterRain = document.getElementById('after-rain-actions');

    if (!beforeRain || !duringRain || !afterRain) return;

    // Before rain actions
    if (ward.riskScore >= 71) {
        beforeRain.innerHTML = `
            <li>Inspect and clear all drainage systems</li>
            <li>Deploy water pumps to critical locations</li>
            <li>Issue advance warning to residents</li>
            <li>Pre-position emergency response teams</li>
        `;
    } else {
        beforeRain.innerHTML = `
            <li>Monitor weather forecasts</li>
            <li>Routine drainage maintenance</li>
            <li>Check pump availability</li>
        `;
    }

    // During rain actions
    if (ward.riskScore >= 71) {
        duringRain.innerHTML = `
            <li>Activate water pumps immediately</li>
            <li>Implement traffic diversions</li>
            <li>Monitor water levels in real-time</li>
            <li>Deploy emergency response teams</li>
        `;
    } else {
        duringRain.innerHTML = `
            <li>Monitor situation continuously</li>
            <li>Be ready to deploy resources if needed</li>
            <li>Keep communication channels open</li>
        `;
    }

    // After rain actions
    afterRain.innerHTML = `
        <li>Assess damage and document incidents</li>
        <li>Clear remaining water and debris</li>
        <li>Repair damaged infrastructure</li>
        <li>Update risk assessment data</li>
    `;
}

/**
 * Render action recommendations
 */
function renderRecommendations(ward) {
    const container = document.getElementById('recommendations');
    if (!container) return;

    const recommendations = [];

    // Generate recommendations based on risk score
    if (ward.riskScore >= 71) {
        recommendations.push({
            icon: '🚰',
            title: 'Deploy Water Pumps',
            description: 'Immediate deployment of high-capacity pumps required',
            priority: 'Critical'
        });
        recommendations.push({
            icon: '🚦',
            title: 'Traffic Diversion',
            description: 'Activate alternate traffic routes and warning signage',
            priority: 'Critical'
        });
        recommendations.push({
            icon: '📱',
            title: 'Emergency Alerts',
            description: 'Send SMS alerts to residents and commuters',
            priority: 'Critical'
        });
        recommendations.push({
            icon: '👷',
            title: 'Deploy Response Teams',
            description: 'Position emergency response personnel in the area',
            priority: 'High'
        });
    } else if (ward.riskScore >= 41) {
        recommendations.push({
            icon: '🔍',
            title: 'Drain Inspection',
            description: 'Schedule comprehensive drainage system inspection',
            priority: 'High'
        });
        recommendations.push({
            icon: '🧹',
            title: 'Clear Blockages',
            description: 'Remove debris and blockages from drainage channels',
            priority: 'Medium'
        });
        recommendations.push({
            icon: '📊',
            title: 'Monitor Conditions',
            description: 'Increase monitoring frequency for this ward',
            priority: 'Medium'
        });
    } else {
        recommendations.push({
            icon: '✅',
            title: 'Routine Maintenance',
            description: 'Continue regular maintenance schedule',
            priority: 'Low'
        });
        recommendations.push({
            icon: '📈',
            title: 'Data Collection',
            description: 'Maintain data collection and monitoring',
            priority: 'Low'
        });
    }

    container.innerHTML = recommendations.map(rec => `
        <div class="recommendation-card">
            <div class="rec-icon">${rec.icon}</div>
            <h3>${rec.title}</h3>
            <p>${rec.description}</p>
            <span class="priority-badge ${rec.priority.toLowerCase()}">${rec.priority} Priority</span>
        </div>
    `).join('');
}

// ============================================
// AUTHORITY DASHBOARD FUNCTIONS
// ============================================

/**
 * Initialize authority dashboard
 */
function initializeDashboard() {
    // Update timestamp
    const timeElement = document.getElementById('current-time');
    if (timeElement) {
        const now = new Date();
        timeElement.textContent = now.toLocaleString('en-IN', { 
            dateStyle: 'medium', 
            timeStyle: 'short' 
        });
    }

    // Calculate summary statistics
    const critical = sortedWards.filter(w => w.riskScore > 80).length;
    const highPriority = sortedWards.filter(w => w.riskScore >= 50 && w.riskScore <= 80).length;
    const monitoring = sortedWards.filter(w => w.riskScore < 50).length;

    // Update summary cards with counter animation
    setTimeout(() => {
        animateCounter(document.getElementById('critical-count'), critical, 1000);
        animateCounter(document.getElementById('high-priority-count'), highPriority, 1000);
        animateCounter(document.getElementById('monitoring-count'), monitoring, 1000);
        animateCounter(document.getElementById('total-wards'), sortedWards.length, 1000);
    }, 300);

    // Render wards table
    renderWardsTable();

    // Render action checklist
    renderActionChecklist();
    
    // Initialize animations
    initializeAnimations();
}

/**
 * Render wards table
 */
function renderWardsTable() {
    const tbody = document.getElementById('wards-table-body');
    if (!tbody) return;

    tbody.innerHTML = '';

    sortedWards.forEach((ward, index) => {
        const row = document.createElement('tr');
        row.className = ward.riskScore > 80 ? 'critical-row' : ward.riskScore >= 50 ? 'warning-row' : '';
        row.innerHTML = `
            <td><strong>#${index + 1}</strong></td>
            <td><strong>${ward.name}</strong><br><small>${ward.district}</small></td>
            <td><strong>${ward.riskScore}</strong></td>
            <td><span class="risk-badge" style="background-color: ${ward.riskColor}">${ward.riskLevel}</span></td>
            <td>${ward.rainfall} mm</td>
            <td>${ward.drainageStatus}</td>
            <td>${ward.pastIncidents}</td>
            <td><button class="view-btn" onclick="navigateToWard(${ward.id})">View Details</button></td>
        `;
        tbody.appendChild(row);
    });
}

/**
 * Filter table based on risk level
 */
function filterTable(filter) {
    // Update active button
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');

    // Filter wards
    let filtered = sortedWards;
    if (filter === 'critical') {
        filtered = sortedWards.filter(w => w.riskScore > 80);
    } else if (filter === 'high') {
        filtered = sortedWards.filter(w => w.riskScore >= 50 && w.riskScore <= 80);
    }

    // Re-render table
    const tbody = document.getElementById('wards-table-body');
    if (!tbody) return;

    tbody.innerHTML = '';
    filtered.forEach((ward, index) => {
        const row = document.createElement('tr');
        row.className = ward.riskScore > 80 ? 'critical-row' : ward.riskScore >= 50 ? 'warning-row' : '';
        row.innerHTML = `
            <td><strong>#${index + 1}</strong></td>
            <td><strong>${ward.name}</strong><br><small>${ward.district}</small></td>
            <td><strong>${ward.riskScore}</strong></td>
            <td><span class="risk-badge" style="background-color: ${ward.riskColor}">${ward.riskLevel}</span></td>
            <td>${ward.rainfall} mm</td>
            <td>${ward.drainageStatus}</td>
            <td>${ward.pastIncidents}</td>
            <td><button class="view-btn" onclick="navigateToWard(${ward.id})">View Details</button></td>
        `;
        tbody.appendChild(row);
    });
}

/**
 * Render action checklist
 */
function renderActionChecklist() {
    const container = document.getElementById('action-checklist');
    if (!container) return;

    const criticalWards = sortedWards.filter(w => w.riskScore > 80);
    const highPriorityWards = sortedWards.filter(w => w.riskScore >= 50 && w.riskScore <= 80);

    let html = '<div class="checklist-section-title">Immediate Actions Required</div>';
    
    if (criticalWards.length > 0) {
        html += '<div class="checklist-group">';
        html += '<h4>🚨 Critical Wards (Risk > 80)</h4>';
        criticalWards.forEach(ward => {
            html += `
                <div class="checklist-item">
                    <input type="checkbox" id="ward-${ward.id}">
                    <label for="ward-${ward.id}">
                        <strong>${ward.name}:</strong> Deploy pumps, issue traffic alerts, activate emergency response
                    </label>
                </div>
            `;
        });
        html += '</div>';
    }

    if (highPriorityWards.length > 0) {
        html += '<div class="checklist-group">';
        html += '<h4>⚠️ High Priority Wards (Risk 50-80)</h4>';
        highPriorityWards.slice(0, 5).forEach(ward => {
            html += `
                <div class="checklist-item">
                    <input type="checkbox" id="ward-${ward.id}-hp">
                    <label for="ward-${ward.id}-hp">
                        <strong>${ward.name}:</strong> Schedule drain inspection and clear blockages
                    </label>
                </div>
            `;
        });
        html += '</div>';
    }

    container.innerHTML = html;
}