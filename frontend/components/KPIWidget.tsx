import React from 'react';

const KPIWidget: React.FC<{ title: string; value: number; icon: React.ReactNode }> = ({ title, value, icon }) => {
    return (
        <div className="kpi-widget">
            <div className="kpi-icon">{icon}</div>
            <div className="kpi-content">
                <h3 className="kpi-title">{title}</h3>
                <p className="kpi-value">{value}</p>
            </div>
        </div>
    );
};

export default KPIWidget;

// TODO: Add styles for KPIWidget in components.module.css
// TODO: Implement dynamic data fetching for KPI values
// TODO: Add prop types validation if not using TypeScript