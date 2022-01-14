import React from 'react';
import { Route, Navigate, Routes } from 'react-router-dom';
import CustomersPage from './customers-page'
import SingleCustomersPage from "./customer-single-page";
const AuthPages = () => {
    return (
        <React.Fragment>
            <div className='flex'>
                <Routes>
                    <Route exact path="/customers" element={<CustomersPage />} />
                    <Route exact path="/customers/:id" element={<SingleCustomersPage />} />
                    <Route path="*" element={<Navigate replace to="/customers" />} />
                </Routes>

            </div>
        </React.Fragment>
    );
};

export default AuthPages;
