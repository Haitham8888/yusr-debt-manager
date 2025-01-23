class DebtService {
    constructor() {
        if (!localStorage.getItem('debts')) {
            localStorage.setItem('debts', JSON.stringify([]));
        }
    }

    getAllDebts() {
        const debts = JSON.parse(localStorage.getItem('debts') || '[]');
        return {
            debts,
            totalDebt: debts.reduce((sum, debt) => sum + parseFloat(debt.amount), 0)
        };
    }

    saveDebt(newDebt) {
        try {
            const debts = JSON.parse(localStorage.getItem('debts') || '[]');
            debts.unshift(newDebt);
            localStorage.setItem('debts', JSON.stringify(debts));
            
            // إرسال حدث لتحديث جميع النوافذ المفتوحة
            window.dispatchEvent(new CustomEvent('debtsUpdated', { 
                detail: { action: 'add', debt: newDebt }
            }));
            
            return true;
        } catch (error) {
            console.error('خطأ في حفظ الدين:', error);
            return false;
        }
    }

    updateTotalDebt() {
        const data = this.getAllDebts();
        return data.totalDebt;
    }
}

export const debtService = new DebtService();
