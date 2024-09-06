import React from 'react'

interface placeListProps {
    imageURL: string,
    name: string,
    description: string,
    key: number
}

const PlaceList: React.FC<placeListProps> = ({key, imageURL, name, description}) => {
    return (
        <div className="bg-navy-blue text-white p-4">
            <div className="flex flex-col w-full h-40 p-4 mb-4 mx-auto">
                        <div className="w-[200px] h-[200px] items-center justify-center bg-gray-300 mr-4 flex-shrink-0">
                            <img src={imageURL} alt={name} className="w-full h-full object-cover"/>
                        </div>
                        <div className="mx-4">
                            <h3 className="text-3xl font-bold text-white mb-4">{name}</h3>
                            <p className="w-full whitespace-pre-line text-white text-lg">{description}</p>
                        </div>
                    </div>
            </div>
    )
}

export default PlaceList