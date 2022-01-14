import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router';
import {CustomerService} from "../../../services/customer.service";

function SingleCustomersPage() {
    let { id } = useParams();
    const navigate = useNavigate();
    const [customer, setCustomer] = useState([]);
    const {getCustomerById} = CustomerService;

    useEffect(() => {
        const init = async () => {
            const result = await getCustomerById({ customer_id: id });

            if (result) {
                setCustomer(result.data.data)
            }

            if (!result)
                navigate('/customers');
        }

        init();
    }, []);// eslint-disable-line react-hooks/exhaustive-deps


    return (
        <main className={'py-6 md:py-10 px-1 xs:px-2 sm:px-4 xl:px-10 flex justify-center xl:ml-224 ml-0 sm:ml-160'}>
            <div className='w-full h-full max-w-6xl px-2'>
                <div className={"text-blue-600 font-bold cursor-pointer "} onClick={()=> navigate('/customers')}>
                    Back
                </div>
                <div className='flex justify-between items-center mb-4 mt-2 md:mt-4'>
                    <p className='gray-1 text-3xl font-bold'>Customer</p>
                </div>
                <div className='flex justify-center p-4 md:p-6 bg-white rounded-lg w-full'>
                    {Object.keys(customer).length &&
                        <div className='w-full'>
                            <div className='flex items-center mb-3 w-full'>
                                <div>
                                    <p className='text-xl font-semibold'>{customer.first_name} {customer.last_name}</p>
                                </div>
                            </div>
                            <div>
                                <p className='text-xl'>Email: <span className={"font-bold"}>{customer.email}</span> </p>
                                <p className='text-xl'>Gender:  <span className={"font-bold"}>{customer.gender}</span> </p>
                                <p className='text-xl'>Company: <span className={"font-bold"}>{customer.company}</span></p>
                                <p className='text-xl'>City: <span className={"font-bold"}>{customer.city}</span></p>
                                <p className='text-xl'>Lat: <span className={"font-bold"}>{customer.latitude}</span></p>
                                <p className='text-xl'>Long: <span className={"font-bold"}>{customer.longitude}</span></p>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </main>
    );
}

export default SingleCustomersPage;
