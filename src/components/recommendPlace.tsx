import React from 'react';

interface RecommendPlaceProps {
    name: string;
    address: string;
    imageURL: string;
    onSelect: () => void;
}

const RecommendPlace: React.FC<RecommendPlaceProps> = ({ name, address, imageURL, onSelect }) => {
    const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
        event.preventDefault();
        onSelect();
    };

    return (
        <div onClick={handleClick} className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer">
            <img src={imageURL} alt={name} className="w-full h-48 object-cover" />
            <div className="p-4">
                <h2 className="text-xl font-bold mb-2">{name}</h2>
                <p className="text-gray-600 mb-2">{address}</p>
            </div>
        </div>
    );
};

export default RecommendPlace;