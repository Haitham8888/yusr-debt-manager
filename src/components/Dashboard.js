import React from 'react';
import StatCard from './StatCard';
import DebtorsList from './DebtorsList';
import SearchBar from './SearchBar';

const Dashboard = () => {
    return (
        <div className="dashboard">
            <h2>نظام إدارة الديون</h2>
            <SearchBar />
            <div className="stats-container">
                <StatCard title="إجمالي الديون" value="15,000 ريال" />
                <StatCard title="المدفوع" value="8,000 ريال" />
                <StatCard title="المتبقي" value="7,000 ريال" />
            </div>
            <DebtorsList />
        </div>
    );
};

export default Dashboard;