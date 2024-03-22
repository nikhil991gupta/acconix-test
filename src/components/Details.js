// // import React, { useEffect, useState } from 'react'
// // import Modal from 'react-bootstrap/Modal'
// // import Button from 'react-bootstrap/Button'
// // import { useNavigate } from 'react-router-dom'

// // const Details = () => {

// //     const [logindata, setLoginData] = useState([]);

// //     const navigate =  useNavigate();

// //     const Birthday = () => {
// //         const getuser = localStorage.getItem("user_login");
// //         if (getuser && getuser.length) {
// //             const user = JSON.parse(getuser);
         
// //             setLoginData(user);


// //             const userbirth = logindata.map((el, k) => {
// //                 return el.date === todayDate
// //             });

// //             if (userbirth) {
// //                 setTimeout(() => {
// //                     console.log("ok");
// //                     handleShow();
// //                 }, 3000)
// //             }
// //         }
// //     }
    
// //     // useEffect(()=>{
// //     //     Birthday();
// //     //   const userData = localStorage.getItem("useryoutube");
// //     //   console.log("Working!")
// //     //   console.log(userData.length);
      
// //     // },[]);

// //     const history = useNavigate();

// //     const [show, setShow] = useState(false);

// //     var todayDate = new Date().toISOString().slice(0, 10);
  

// //     const handleClose = () => setShow(false);
// //     const handleShow = () => setShow(true);

    

// //     const userlogout = ()=>{
// //         localStorage.clear();
// //         navigate("/")
// //     }

// //     return (
// //         <>
// //             {
// //                 logindata.length === 0 ? "errror" :
// //                     <>
// //                         <h1>detials page</h1>
// //                         <h1>{logindata[0].name}</h1>
// //                         <Button onClick={userlogout}>LogOut</Button>

// //                 {
// //                     logindata[0].date === todayDate ? 
// //                     <Modal show={show} onHide={handleClose}>
// //                             <Modal.Header closeButton>
// //                                 <Modal.Title>{logindata[0].name} 😄</Modal.Title>
// //                             </Modal.Header>
// //                             <Modal.Body>Wish you many many happy returns of the day ! 🍰</Modal.Body>
// //                             <Modal.Footer>
// //                                 <Button variant="secondary" onClick={handleClose}>
// //                                     Close
// //                                 </Button>
// //                                 <Button variant="primary" onClick={handleClose}>
// //                                     Save Changes
// //                                 </Button>
// //                             </Modal.Footer>
// //                         </Modal>:""
// //                 }   
                     
// //                     </>
// //             }
// //         </>
// //     )
// // }

// // export default Details














// import React, { useEffect, useState } from 'react';
// import Modal from 'react-bootstrap/Modal';
// import Button from 'react-bootstrap/Button';
// import { useNavigate } from 'react-router-dom';

// const Details = () => {
//     const [logindata, setLoginData] = useState([]);
//     const [show, setShow] = useState(false);
//     const navigate = useNavigate();
//     const todayDate = new Date().toISOString().slice(0, 10);

//     useEffect(() => {
//         const getuser = localStorage.getItem("user_login");
//         if (getuser) {
//             const user = JSON.parse(getuser);
//             setLoginData([user]);
//         } else {
//             // Redirect user to login page if no user data found
//             navigate("/");
//         }
//     }, [navigate]);

//     useEffect(() => {
//         const userBirthdays = logindata.filter(user => user.date === todayDate);
//         if (userBirthdays.length > 0) {
//             const timeoutId = setTimeout(() => {
//                 setShow(true);
//             }, 3000);
//             return () => clearTimeout(timeoutId); // Cleanup timeout on component unmount
//         }
//     }, [logindata, todayDate]);

//     const handleClose = () => setShow(false);

//     const userLogout = () => {
//         localStorage.removeItem("user_login");
//         navigate("/");
//     }

//     return (
//         <>
//             {logindata.length === 0 ? (
//                 "Error: No user data found"
//             ) : (
//                 <>
//                     <h1>Details Page</h1>
//                     <h1>{logindata[0].name}</h1>
//                     <Button onClick={userLogout}>Log Out</Button>
//                     <Modal show={show} onHide={handleClose}>
//                         <Modal.Header closeButton>
//                             <Modal.Title>{logindata[0].name} 😄</Modal.Title>
//                         </Modal.Header>
//                         <Modal.Body>Wish you many many happy returns of the day! 🍰</Modal.Body>
//                         <Modal.Footer>
//                             <Button variant="secondary" onClick={handleClose}>
//                                 Close
//                             </Button>
//                         </Modal.Footer>
//                     </Modal>
//                 </>
//             )}
//         </>
//     );
// }

// export default Details;




import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Details = () => {
    const [userData, setUserData] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        // Fetch user data from localStorage on component mount
        const storedUserData = localStorage.getItem("user_login");
        if (storedUserData) {
            const parsedUserData = JSON.parse(storedUserData);
            setUserData(parsedUserData);
        } else {
            // Redirect user to login page if no user data found
            navigate("/");
        }
    }, [navigate]);

    const handleLogout = () => {
        // Clear user data from localStorage and redirect to login page
        localStorage.removeItem("user_login");
        navigate("/");
    }

    return (
        <div className="container mt-3">
            <h1>User Details</h1>
            {userData ? (
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
            ) : (
                <p>Loading...</p>
            )}
            <button className="btn btn-primary" onClick={handleLogout}>Logout</button>
        </div>
    );
}

export default Details;




