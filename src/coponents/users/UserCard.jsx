import React from 'react'
import { DEMO_USER_IMG } from '../../utlis/constant';
const BASE_URL = import.meta.env.VITE_BASE_URL;

const UserCard = ({user, imageUrl}) => {
    
    const{ userName, userEmail, userPhone, userAge, userGender, userAddress, userPhoto } = user;

    let profilePhoto = '';

    if(imageUrl){
        profilePhoto = imageUrl;
    } else if(userPhoto){
        profilePhoto = `${BASE_URL}/${userPhoto}`;
    } else {
        profilePhoto = `${BASE_URL}/${DEMO_USER_IMG}`;
    }

    return (
        <div className="card bg-base-300 w-96 shadow-xl">
            <figure>
                <img src={profilePhoto} alt="user-photo" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{userName}</h2>
                {userEmail && <p><span className='font-semibold'>Email: </span>{userEmail}</p>}
                {userPhone && <p><span className='font-semibold'>Phone: </span>{userPhone}</p>}
                {userAge && userGender && <p><span className='font-semibold'>Age: </span>{userAge}, <span className='font-semibold'>Gender: </span>{userGender}</p>}
                {userAddress && <p><span className='font-semibold'>Address: </span>{userAddress}</p>}
                <div className="card-actions justify-center my-4">
                </div>
            </div>
        </div>
    )
}

export default UserCard