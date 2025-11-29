import React from 'react';

const MyContainer = ({className, children}) => {
    return (
        <div className={`${className} container mx-auto px-2 md:px-2 lg:px-0 `}>
            {children} 
        </div>
    );
};

export default MyContainer;