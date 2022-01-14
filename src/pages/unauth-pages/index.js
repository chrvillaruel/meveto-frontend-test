import React from 'react';
import { Routes, Navigate, Route } from 'react-router-dom';
import LoginPage from './register/login';

const UnAuthPages = () => {
    return (
        <React.Fragment>
            <Routes>
                <Route exact path="/login" element={<LoginPage />} />
                <Route path="*" element={<Navigate replace to="/login" />} />
            </Routes>
        </React.Fragment>
    );
};

export default UnAuthPages;
