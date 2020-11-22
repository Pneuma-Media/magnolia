import React, { useEffect } from 'react';
import ApplyTemplate from '../templates/ApplyTemplate/ApplyTemplate';
import  useTimeout from '../UTILS/useTimeout';

const Apply = () => {

    useTimeout();

    return (
        <>
            <ApplyTemplate />
        </>
    );
};

export default Apply;