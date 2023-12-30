import React from 'react';

interface IconProps {
    title: string;
    icon: React.JSX.Element;
    count: number;
    subtitle: string;
}

const Icon: React.FC<IconProps> = ({ title, icon, count, subtitle }) => {
    return (
        <div className="bg-white rounded-lg shadow-lg p-4 m-2 border-2">
            <div className="flex items-center">
                {icon}
                <h2 className="ml-2 text-xl">{title}</h2>
            </div>
            <p className="text-4xl">{count}</p>
            <p>{subtitle}</p>
        </div>
    );
};

export default Icon;
