// PlaceSelectPage.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import RecommendPlace from '../components/recommendPlace';
import { getMessage } from '../api/place.ts';

interface PlaceInfo {
    [key: number]: any;  // 이제 어떤 숫자 키도 가능
}

interface PlaceSelectPageProps {
    placeList: PlaceInfo[];
}

const PlaceSelectPage: React.FC<PlaceSelectPageProps> = ({ placeList }) => {
    const [currentPage, setCurrentPage] = useState(0);
    const [selectedPlaces, setSelectedPlaces] = useState<string[]>([]);
    const navigate = useNavigate();

    const placesPerPage = 3;
    const totalPages = Math.ceil(placeList.length / placesPerPage);

    const handlePlaceSelect = async (placeName: string) => {
        if (!selectedPlaces.includes(placeName)) {
            const updatedSelectedPlaces = [...selectedPlaces, placeName];
            setSelectedPlaces(updatedSelectedPlaces);

            if (updatedSelectedPlaces.length === 5) {
                await handleFinalSelection(updatedSelectedPlaces);
            } else {
                setCurrentPage(prev => Math.min(prev + 1, totalPages - 1));
            }
        }
    };

    const handleFinalSelection = async (finalSelection: string[]) => {
        try {
            const response = await getMessage({ content: finalSelection });
            navigate('/planned', {
                state: {
                    message: response.content,
                    selectedPlaces: finalSelection,
                },
            });
        } catch (error) {
            console.error('메시지를 가져오는데 실패했습니다:', error);
        }
    };


    const currentPlaces = placeList.slice(currentPage * placesPerPage, (currentPage + 1) * placesPerPage);
    console.log(currentPlaces)
    return (
        <div className="bg-blue-900 min-h-screen px-8 py-10">
            <h1 className="text-white text-5xl text-center font-bold mb-16 my-14">장소를 선택해주세요</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                {currentPlaces.map(place => {
                    console.log(place);  // 각 place 정보를 출력

                    return (
                        <RecommendPlace
                            key={place[4]}
                            name={place[4]}
                            address={place[1]}
                            imageURL={place[0]}
                            onSelect={() => handlePlaceSelect(place[4])}  // onSelect 함수 전달
                        />
                    );
                })}

            </div>
            <div className="flex justify-center items-center">
                <button
                    className="mr-2 text-white"
                    onClick={() => setCurrentPage(prev => Math.max(0, prev - 1))}
                    disabled={currentPage === 0}
                >
                    ←
                </button>
                {[...Array(totalPages)].map((_, index) => (
                    <button
                        key={index}
                        className={`w-3 h-3 rounded-full mx-1 ${index === currentPage ? 'bg-white' : 'bg-gray-400'}`}
                    />
                ))}
                <button
                    className="ml-2 text-white"
                    onClick={() => setCurrentPage(prev => Math.min(totalPages - 1, prev + 1))}
                    disabled={currentPage === totalPages - 1}
                >
                    →
                </button>
            </div>
            <div className="mt-4 text-white text-center">선택된 장소: {selectedPlaces.length}/5</div>
        </div>
    );
};

export default PlaceSelectPage;
