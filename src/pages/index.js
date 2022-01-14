import React from 'react';
import AuthPages from './auth-pages';
import UnAuthPages from './unauth-pages';

function Pages() {
    const passportToken = localStorage.getItem('userToken');

    return (
        <>
            {((passportToken === '' || passportToken === null || passportToken === undefined) && (passportToken === undefined || passportToken === '' || passportToken === null)) ?
                <UnAuthPages /> : <AuthPages />}
        </>
    );
}

export default Pages;
