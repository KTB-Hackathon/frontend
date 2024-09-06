import React from 'react'

interface recommendPlaceProps {
    key: number
    imageURL: string,
    name: string,
    description: string,
    tag: string
}

const RecommendPlace: React.FC<recommendPlaceProps> = ({imageURL, name, description, tag}) => {
    return (
            <div className={'flex flex-col bg-white rounded-bl'}>
                <div className="w-full h-[400px]">
                    <img src={imageURL} alt={name} className="w-full h-full object-cover"/>
                </div>
                <div className="p-4">
                    <h3 className="text-xl font-semibold mb-2">{name}</h3>
                    <p className="text-gray-600 text-sm mb-3">{description}</p>
                    <div>
                        <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                            #{tag}
                        </span>
                    </div>
                </div>
            </div>
    )
}

export default RecommendPlace