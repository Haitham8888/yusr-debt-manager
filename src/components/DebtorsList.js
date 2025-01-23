import React from 'react';

const DebtorsList = ({ debtors }) => {
    return (
        <div className="debtors-list">
            <h2>قائمة المدينين</h2>
            <ul>
                {debtors.map((debtor) => (
                    <li key={debtor.id} className={`debtor ${debtor.status}`}>
                        <span>{debtor.name}</span>
                        <span>{debtor.amount} ريال</span>
                        <span className="status">{debtor.status}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default DebtorsList;