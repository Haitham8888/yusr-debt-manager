class DebtService {
    constructor() {
        const savedData = localStorage.getItem('debtsData');
        if (!savedData) {
            this.resetData();
        }
    }

    resetData() {
        const initialData = {
            debts: [],
            totalDebt: 0
        };
        localStorage.setItem('debtsData', JSON.stringify(initialData));
    }

    getAllDebts() {
        return JSON.parse(localStorage.getItem('debtsData'));
    }

    saveDebt(newDebt) {
        try {
            const data = this.getAllDebts();
            data.debts.unshift(newDebt);
            data.totalDebt = (data.totalDebt || 0) + parseInt(newDebt.amount);
            
            localStorage.setItem('debtsData', JSON.stringify(data));
            return true;
        } catch (error) {
            console.error('خطأ في حفظ الدين:', error);
            return false;
        }
    }
}

export const debtService = new DebtService();
