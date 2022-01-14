import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import {CustomerService} from '../../../services/customer.service';


function CustomersPage() {
    const navigate = useNavigate();
    const {getCustomers} = CustomerService;
    const [customers , setCustomers] = useState([]);

    useEffect(() => {
        const init = async () => {
            const result = await getCustomers();
            setCustomers(result.data.data)
            if (!result)
                navigate('/customers');
        }

        init();
    }, []);


    return (
        <main className={'py-6 md:py-10 px-1 xs:px-2 sm:px-4 xl:px-10 flex justify-center xl:ml-224 ml-0 sm:ml-160'}>
            <div className='w-full h-full max-w-6xl px-2'>
                <div className=' justify-center sm:grid-cols-2 md:p-6 w-full'>
                    Customers

                        <table className="min-w-full leading-normal">
                            <thead>
                            <tr>
                                <th
                                    className="px-5 py-3 border-b-2  bg-white text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    ID
                                </th>
                                <th
                                    className="px-5 py-3 border-b-2  bg-white text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    Name
                                </th>
                                <th
                                    className="px-5 py-3 border-b-2  bg-white text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    Email
                                </th>
                                <th
                                    className="px-5 py-3 border-b-2  bg-white text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    Gender
                                </th>
                                <th
                                    className="px-5 py-3 border-b-2  bg-white text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    Company
                                </th>
                                <th
                                    className="px-5 py-3 border-b-2  bg-white text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    City
                                </th>
                                <th
                                    className="px-5 py-3 border-b-2  bg-white text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    Title
                                </th>
                                <th
                                    className="px-5 py-3 border-b-2  bg-white text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    Latitude
                                </th>
                                <th
                                    className="px-5 py-3 border-b-2  bg-white text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    Longitude
                                </th>
                                <th
                                    className="px-5 py-3 border-b-2  bg-white text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    Action
                                </th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                customers.length > 0 && customers.map((customer, index) => (
                                    <tr key={index}>
                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                            <p className="text-gray-900 whitespace-no-wrap">
                                                {customer.id}
                                            </p>
                                        </td>
                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                            {`${customer.first_name} ${customer.last_name}`}
                                        </td>
                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                            {customer.email}
                                        </td>
                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                            {customer.gender}
                                        </td>
                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                            {customer.company}
                                        </td>
                                        <td className="px-5 py-5 border-b text-md ">
                                            {customer.city}
                                        </td>
                                        <td className="px-5 py-5 border-b text-md ">
                                            {customer.title}
                                        </td>
                                        <td className="px-5 py-5 border-b text-md ">
                                            {customer.latitude}
                                        </td>
                                        <td className="px-5 py-5 border-b text-md ">
                                            {customer.longitude }
                                        </td>

                                        <td className="px-5 py-5 border-b text-md ">
                                            <div className={"p-4 md:p-3 w-full h-full bg-blue-500 text-white rounded-lg cursor-pointer"} onClick={() => navigate('/customers/' + customer.id)}>View</div>
                                        </td>
                                    </tr>
                                ))
                            }

                            </tbody>
                        </table>
                </div>

            </div>
        </main>
    );
}

export default CustomersPage;
