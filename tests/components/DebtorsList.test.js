import React from 'react';
import { render, screen } from '@testing-library/react';
import DebtorsList from '../../src/components/DebtorsList';

describe('DebtorsList Component', () => {
    const debtors = [
        { id: 1, name: 'عميل 1', status: 'paid' },
        { id: 2, name: 'عميل 2', status: 'unpaid' },
        { id: 3, name: 'عميل 3', status: 'half-paid' },
    ];

    test('renders debtor names', () => {
        render(<DebtorsList debtors={debtors} />);
        
        debtors.forEach(debtor => {
            expect(screen.getByText(debtor.name)).toBeInTheDocument();
        });
    });

    test('renders correct payment status', () => {
        render(<DebtorsList debtors={debtors} />);
        
        expect(screen.getByText('مدفوع')).toBeInTheDocument();
        expect(screen.getByText('غير مدفوع')).toBeInTheDocument();
        expect(screen.getByText('مدفوع نصف')).toBeInTheDocument();
    });

    test('displays no debtors message when list is empty', () => {
        render(<DebtorsList debtors={[]} />);
        
        expect(screen.getByText('لا يوجد عملاء')).toBeInTheDocument();
    });
});