import React, {useEffect} from 'react'
import PlaceList from '../components/placeList.tsx'
import KakaoMap from '../components/map.tsx'
import ChatBubble from "../components/chatBubble.tsx";

const dummyData = [
    { id: 1, name: '장소1', description: '장소1의 설명글입니다\n', imageURL: 'https://placehold.co/200x300' },
    { id: 2, name: '장소2', description: '장소2의 설명글입니다\n', imageURL: 'https://placehold.co/150x150' },
    { id: 3, name: '장소3', description: '장소3의 설명글입니다\n', imageURL: 'https://placehold.co/150x150' },
    { id: 4, name: '장소4', description: '장소4의 설명글입니다\n', imageURL: 'https://placehold.co/150x150' },
    { id: 5, name: '장소5', description: '장소5의 설명글입니다\n나는기다란설명글', imageURL: 'https://placehold.co/150x150' },
];

const chatBubbleText = "추천해드린 관광코스는 각 지역의 대표적인 명소들을 포함하고 있어 매우 흥미로운 여행이 될 것입니다. 아래에 각 장소에 대한 추가 정보를 제공해드리겠습니다:\n" +
    "\n" +
    "1. **서울 - 경복궁**\n" +
    "   - **주소:** 서울특별시 종로구 세종로 1-1\n" +
    "   - **특징:** 조선 왕조의 가장 큰 궁궐로, 경회루와 근정전 등 아름다운 건축물이 있습니다. 한복을 입고 궁궐을 돌아보면 더욱 특별한 경험이 될 것입니다.\n" +
    "\n" +
    "2. **부산 - 해운대 해수욕장**\n" +
    "   - **주소:** 부산광역시 해운대구 중동\n" +
    "   - **특징:** 넓고 깨끗한 백사장과 맑은 물이 특징인 해운대 해수욕장은 여름철 해수욕뿐만 아니라 겨울철에도 다양한 축제와 행사가 열립니다. 인근에 위치한 동백섬과 달맞이길도 함께 방문해보세요.\n" +
    "\n" +
    "3. **제주도 - 한라산**\n" +
    "   - **주소:** 제주특별자치도 제주시 1100로\n" +
    "   - **특징:** 대한민국에서 가장 높은 산으로, 사계절 내내 아름다운 풍경을 자랑합니다. 다양한 등산 코스가 있어 체력에 맞게 선택할 수 있으며, 정상에서 제주도의 전경을 감상할 수 있습니다.\n" +
    "\n" +
    "이 코스를 따라 여행하시면 한국의 역사, 자연, 그리고 현대적인 매력을 모두 체험할 수 있을 것입니다. 즐거운 여행 되세요!"

const PlannedPlace:React.FC = () => {

    return (
        <div className="bg-blue-900 min-h-screen px-8 py-10">
            <h1 className="text-white text-5xl text-center font-bold mb-16 my-14">내 여행지는?</h1>
            <div className="flex justify-center items-center mb-8">
                <KakaoMap/>
            </div>
            {/*<div className="grid grid-cols-2 gap-2 mb-6 w-1/2">*/}
            {/*    {dummyData.map(place => (*/}
            {/*        <PlaceList*/}
            {/*            key={place.id}*/}
            {/*            name={place.name}*/}
            {/*            description={place.description}*/}
            {/*            imageURL={place.imageURL}*/}
            {/*        />*/}
            {/*    ))}*/}
            {/*</div>*/}
            <ChatBubble text={chatBubbleText} />
        </div>
    )
}

export default PlannedPlace