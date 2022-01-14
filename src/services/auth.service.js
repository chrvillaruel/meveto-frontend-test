
import {api} from '../boot/axios';

export const AuthService = (function () {
    const login = async (payload) => {
        return api.post('api/login', payload);
    }

    return {
        login,
    };
})();
