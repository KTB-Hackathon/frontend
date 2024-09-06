import React from 'react'
import RecommendPlace from '../components/recommandPlace.tsx'

const dummyData = [
    { id: 1, name: '장소1', description: '장소1의 설명글입니다\n설명글입니다\n설명글입니다', tag: '태그', imageURL: 'https://journeymate-images.s3.ap-northeast-2.amazonaws.com/Slack_icon_2019.svg' },
    { id: 2, name: '장소2', description: '장소2의 설명글입니다\n설명글입니다\n설명글입니다', tag: '태그', imageURL: 'https://storage.cloud.google.com/journey_mate_image/g00024801003p0002.jpg' },
    { id: 3, name: '장소3', description: '장소3의 설명글입니다\n설명글입니다\n설명글입니다', tag: '태그', imageURL: 'https://placehold.co/300x400' }
];

const PlaceSelectPage:React.FC = () => {
    return (
        <div className="bg-blue-900 min-h-screen px-8 py-10">
            <h1 className="text-white text-5xl text-center font-bold mb-16 my-14">장소를 선택해주세요</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                {dummyData.map(place => (
                    <RecommendPlace
                        key={place.id}
                        name={place.name}
                        description={place.description}
                        tag={place.tag}
                        imageURL={place.imageURL}
                    />
                ))}
            </div>
            <div className="flex justify-center items-center">
                <button className="mr-2 text-white">←</button>
                {[0, 1, 2, 3].map((_, index) => (
                    <button
                        key={index}
                        className={`w-3 h-3 rounded-full mx-1 ${
                            index === 1 ? 'bg-white' : 'bg-gray-400'
                        }`}
                    />
                ))}
                <button className="ml-2 text-white">→</button>
            </div>
        </div>
    )
}

export default PlaceSelectPage