// import React from 'react'

// const SIgn_img = () => {
//     return (
//         <>
//             <div className="right_data mt-8" style={{ width: "100%" }}>
//                 <div className="sign_img mt-5">
//                     <img src="./sign1.svg" style={{ maxWidth: 400 }} alt="" />
//                 </div>
//             </div>
//         </>
//     )
// }

// export default SIgn_img

import React from 'react';

const SIgn_img = ({ isLoginPage }) => {
    // Determine the image source based on the prop
    const imageSrc = isLoginPage ? "./sign.svg" : "./sign1.svg";

    return (
        <>
            <div className="right_data mt-8" style={{ width: "100%" }}>
                <div className="sign_img mt-5">
                    <img 
                        src={imageSrc} 
                        style={{ maxWidth: 400 }} 
                        alt="" 
                    />
                </div>
            </div>
        </>
    );
};

export default SIgn_img;
