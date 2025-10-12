import React, { useEffect, useState } from 'react'
import UserCard from './UserCard';
import { useSelector } from 'react-redux';
import axios from 'axios';


const Profile = () => {
    const user = useSelector((state) => state.user);

    const loggedUserId = user?.user?.id;
    const loggedUserName = user?.user?.name;
    const loggedUserEmail = user?.user?.email;
    const loggedUserPhone = user?.user?.phone;
    const loggedUserAge = user?.user?.age;
    const loggedUserGender = user?.user?.gender;
    const loggedUserAddress = user?.user?.address;
    const loggedUserPhoto = user?.user?.photo;

    const [showToast, setShowToast] = useState(false);
    const [userName, setUserName] = useState('');
    const [userEmail, setUserEmail] = useState(''); 
    const [userPhone, setUserPhone] = useState('');
    const [userAge, setUserAge] = useState('');
    const [userGender, setUserGender] = useState('');
    const [userAddress, setUserAddress] = useState('');
    const [userPhoto, setUserPhoto] = useState('');
    const [error, setError] = useState('');
    const [imageUrl, setImageUrl] = useState(null);

    useEffect(() => {
        if (loggedUserName) {
            setUserName(loggedUserName);
            setUserEmail(loggedUserEmail);
            setUserPhone(loggedUserPhone);
            setUserAge(loggedUserAge || '');
            setUserGender(loggedUserGender || '');
            setUserAddress(loggedUserAddress);
            setUserPhoto(loggedUserPhoto || '');
        }
        }, [loggedUserName,loggedUserEmail,loggedUserPhone,loggedUserAge,loggedUserGender,loggedUserAddress,loggedUserPhoto]
    );

    const handleFileChange = (event) => {
        const chooseFile = event;
        if (chooseFile) {
            const fileurl = URL.createObjectURL(chooseFile);
            
            setImageUrl(fileurl);
        }
    };

    const saveProfile = async (e) => {
        //setError("");
        try{

            e.preventDefault();

            const formData = new FormData();
            formData.append('userId', loggedUserId);
            formData.append('userName', userName);
            formData.append('userPhone', userPhone);     
            formData.append('userAge', userAge);
            formData.append('userGender', userGender);
            formData.append('userAddress', userAddress);
            formData.append('userPhoto', userPhoto);

            const res = await axios.patch(`${import.meta.env.VITE_BASE_URL}/client/api/editprofile`, formData);
            //dispatch(addUser(res?.data?.data));
            setShowToast(true);
            setTimeout(() => {
                setShowToast(false);
            }, 3000); 
        } catch(err){
            //setError(err)
            console.log(err)
        }
    }

    return (
        <>
            <div className='flex justify-center my-10'>
                <div className="flex justify-center mx-10">
                    <div className="card bg-base-300 w-96 shadow-xl">
                        <div className="card-body">
                            <form onSubmit={saveProfile} >
                                <h2 className="card-title justify-center">Edit Profile!</h2>
                                <div>
                                    <label className="form-control w-full max-w-xs my-4">
                                        <div className="label">
                                            <span className="label-text">Your Name</span>
                                        </div>
                                        <input type="text" value={userName} className="input input-bordered w-full max-w-xs" onChange={(e) => setUserName(e.target.value)} />
                                    </label>
                                    <label className="form-control w-full max-w-xs my-4">
                                        <div className="label">
                                            <span className="label-text">Photo</span>
                                        </div>
                                        <input type="file" className="w-full max-w-xs file-input" onChange={(e) => {setUserPhoto(e.target.files[0]), handleFileChange(e.target.files[0])}}/>
                                    </label>
                                    <label className="form-control w-full max-w-xs my-4">
                                        <div className="label">
                                            <span className="label-text">Phone</span>
                                        </div>
                                        <input type="text" value={userPhone} className="input input-bordered w-full max-w-xs" onChange={(e) => setUserPhone(e.target.value)} />
                                    </label>
                                    <label className="form-control w-full max-w-xs my-4">
                                        <div className="label">
                                            <span className="label-text">Age</span>   
                                        </div>
                                        <input type="text" value={userAge} className="input input-bordered w-full max-w-xs" onChange={(e) => setUserAge(e.target.value)} />
                                    </label>
                                    <label className="form-control w-full max-w-xs my-4">
                                        <div className="label">
                                            <span className="label-text">Gender</span>
                                        </div>
                                        <input type="text" value={userGender} className="input input-bordered w-full max-w-xs" onChange={(e) => setUserGender(e.target.value)} />
                                    </label>
                                    <label className="form-control w-full max-w-xs my-4">
                                        <div className="label">
                                            <span className="label-text">Address</span>
                                        </div>
                                        <input type="text" value={userAddress} className="input input-bordered w-full max-w-xs" onChange={(e) => setUserAddress(e.target.value)} />
                                    </label>
                                </div>
                                <p className='text-red-500'>{error}</p>
                                <div className="card-actions justify-center m-2">
                                    <button className="btn btn-primary" type='submit' >Save Profile</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <UserCard user={{userName, userEmail, userPhone, userAge, userGender, userAddress, userPhoto}} imageUrl={imageUrl} />
            </div>
            {showToast && (<div className="toast toast-top toast-center">
                <div className="alert alert-success">
                    <span>Profile Saved Successfully.</span>
                </div>
            </div>)}
        </>
    )
}

export default Profile