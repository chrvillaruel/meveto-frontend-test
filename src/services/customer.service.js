
import {api} from '../boot/axios';

export const CustomerService = (function () {
    const getCustomers = async (payload) => {
        return api.get('api/customers', {'headers':  {'Authorization': `Bearer ${localStorage.getItem('userToken')}`}});
    }

    const getCustomerById = async (payload) => {
        return api.get(`api/customers/${payload.customer_id}`, {'headers':  {'Authorization': `Bearer ${localStorage.getItem('userToken')}`}});
    }

    return {
        getCustomers,
        getCustomerById,
    };
})();
