import { debtService } from '../services/debtService.js';

function initializeApp() {
    updateTotalDebts();
    setupDebtListener();
    updateDateTime();
    setInterval(updateDateTime, 1000);
}

function updateTotalDebts() {
    const data = debtService.getAllDebts();
    if (data && data.debts) {
        // حساب المجموع الكلي للديون
        const total = data.debts.reduce((sum, debt) => sum + parseFloat(debt.amount), 0);
        // تحديث العرض
        document.querySelector('.status-item:first-child strong').textContent = 
            total.toLocaleString() + ' ريال';
    }
}

// مراقبة التغييرات في البيانات
function setupDebtListener() {
    window.addEventListener('storage', (e) => {
        if (e.key === 'debtsData') {
            updateTotalDebts();
        }
    });
}

// تحميل وعرض الديون المحفوظة
function loadSavedDebts() {
    const data = debtService.getAllDebts();
    const ledgerList = document.getElementById('ledger-list');
    
    if (!data || !data.debts) return;

    ledgerList.innerHTML = '';
    data.debts.forEach(debt => {
        const debtHtml = `
            <li class="fade-in">
                <div class="list-item-content">
                    <span>${debt.name}</span>
                    <div class="debt-details">
                        <span class="list-item-amount">${debt.amount} ريال</span>
                        <span class="debt-date">${debt.date}</span>
                    </div>
                </div>
            </li>
        `;
        ledgerList.insertAdjacentHTML('beforeend', debtHtml);
    });
}

// تحديث التاريخ والوقت
function updateDateTime() {
    const now = new Date();
    document.getElementById('current-date').textContent = now.toLocaleDateString('ar-SA');
    document.getElementById('current-time').textContent = now.toLocaleTimeString('ar-SA');
}

// بدء التطبيق عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', () => {
    initializeApp();
    loadSavedDebts();
});

// تحديث عند إضافة دين جديد
if (window.location.search.includes('added=true')) {
    loadSavedDebts();
    updateTotalDebts();
    window.history.replaceState({}, document.title, window.location.pathname);
}
