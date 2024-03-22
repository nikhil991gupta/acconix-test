

// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const Details = () => {
//     const [userData, setUserData] = useState(null);
//     const navigate = useNavigate();

//     useEffect(() => {
//         // Fetch user data from localStorage on component mount
//         const storedUserData = localStorage.getItem("user_login");
//         if (storedUserData) {
//             const parsedUserData = JSON.parse(storedUserData);
//             setUserData(parsedUserData);
//         } else {
//             // Redirect user to login page if no user data found
//             navigate("/");
//         }
//     }, [navigate]);

//     const handleLogout = () => {
//         // Clear user data from localStorage and redirect to login page
//         localStorage.removeItem("user_login");
//         navigate("/");
//     }

//     return (
//         <div className="container mt-3">
//             <h1>User Details</h1>
//             {userData ? (
//                 <table className="table">
//                     <thead>
//                         <tr>
//                             <th>Name</th>
//                             <th>Email</th>
//                             <th>Date</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         <tr>
//                             <td>{userData.name}</td>
//                             <td>{userData.email}</td>
//                             <td>{userData.date}</td>
//                         </tr>
//                     </tbody>
//                 </table>
//             ) : (
//                 <p>Loading...</p>
//             )}
//             <button className="btn btn-primary" onClick={handleLogout}>Logout</button>
//         </div>
//     );
// }

// export default Details;

import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Details = () => {
    const [userData, setUserData] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        // Fetch user data from localStorage on component mount
        const storedUserData = localStorage.getItem("user_login");
        if (storedUserData) {
            const parsedUserData = JSON.parse(storedUserData);
            setUserData(parsedUserData);
            toast.success(`Welcome, ${parsedUserData.name}!`);
        } else {
            // Redirect user to login page if no user data found
            navigate("/");
        }
    }, [navigate]);

    const handleLogout = () => {
        // Clear user data from localStorage and redirect to login page
        localStorage.removeItem("user_login");
        toast.info("Logged out successfully");
        navigate("/");
    }

    return (
        <div className="container mt-3">
            <h1>User Details</h1>
            {userData ? (
                <div>
                    <p>Welcome, {userData.name}!</p>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{userData.name}</td>
                                <td>{userData.email}</td>
                                <td>{userData.date}</td>
                            </tr>
                        </tbody>
                    </table>
                    <button className="btn btn-primary" onClick={handleLogout}>Logout</button>
                </div>
            ) : (
                <p>Loading...</p>
            )}
            <ToastContainer />
        </div>
    );
}

export default Details;



