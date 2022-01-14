import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import validator from 'validator';
import {AuthService} from '../../../services/auth.service';

export default function LoginPage() {
    const navigate = useNavigate();
    const [processing, setProcessing] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [authError, setAuthError] = useState('');
    const {login} = AuthService;
    const isFormValid = () => {
        return email.length > 0 && password.length > 0 && validator.isEmail(email) && !processing;
    }

    const onChangeEmail = (e) => {
        setEmail(e.target.value);
        if (!validator.isEmail(e.target.value) && e.target.value.length)
            setAuthError('Input valid email address!');
        else
            setAuthError('');
    }

    const handleLogin = async () => {
        setProcessing(true);
        const result = await login({ email: email, password: password });
        if (result.data) {
            localStorage.setItem('userToken', result.data.data.token)
            navigate('/customers');
            return;
        }

        setProcessing(false);
    }

    const keyPress = (e) => {
        if (!isFormValid())
            return;

        if (e.keyCode === 13) {
            handleLogin();
        }
    }

    return (
        <>
            <div className="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-md">
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign in to your account</h2>

                </div>

                <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                    <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                        <p>
                            username: <b>test@test.com</b>
                        </p>
                        <p className={"mb-10"}>
                            password: <b>password</b>
                        </p>

                        <form className="space-y-6" action="#" method="POST">
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                    Email address
                                </label>
                                <div className="mt-1">
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        onKeyDown={keyPress}
                                        onChange={e => onChangeEmail(e)}
                                        className={'appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm '
                                            + (authError !== '' ? 'error' : '')}
                                        value={email}
                                    />
                                    <p className='text-center text-red text-8 mt-4'>{authError}</p>
                                </div>
                            </div>

                            <div>
                                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                    Password
                                </label>
                                <div className="mt-1">
                                    <input
                                        value={password}
                                        onChange={e => setPassword(e.target.value)}
                                        id="password"
                                        onKeyDown={keyPress}
                                        name="password"
                                        type="password"
                                        autoComplete="current-password"
                                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    />
                                </div>
                            </div>

                            <div>
                                <button
                                    type="submit"
                                    onClick={e => handleLogin()} disabled={!isFormValid()}
                                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                    Sign in
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
