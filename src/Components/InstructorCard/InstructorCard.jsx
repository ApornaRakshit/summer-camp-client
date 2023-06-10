import React from 'react';

const InstructorCard = ({ item }) => {
    const { instrumentName, name, image, description, classNo, email,insImage } = item
    return (
        <div className="card card-side text-center w-auto h-96 m-28 bg-base-100 shadow-xl">
            <figure><img src={image} alt="Movie" /></figure>
            <div className="card-body">
                <div className="w-10 rounded-full">
                    <img src={insImage} />
                </div>
                <h2 className="card-title">{name}</h2>
                <h3 className="card-title">{instrumentName}</h3>
                <p>{description}</p>
                <p>{classNo}</p>
                <p>{email}</p>
            </div>
        </div>
    );
};

export default InstructorCard;