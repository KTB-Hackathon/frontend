import React from 'react'

interface ChatBubbleProps {
    text: string
}
// const mock_test = "안녕하세요! 요청하신 관광지를 포함한 관광코스를 작성해드리겠습니다. 다음과 같은 관광코스를 추천드립니다:\n\n1. **독립기념관**\n   - **위치**: 충남 천안시 동남구 목천읍 독립기념관로 1\n   - **설명**: 첫 번째로 독립기념관을 방문하여 한국의 독립운동 역사와 관련된 전시를 관람하면서 의미 있는 시작을 하세요. 다양한 전시관과 기념비가 마련되어 있어 독립운동의 역사를 깊이 이해할 수 있습니다.\n\n2. **청남대**\n   - **위치**: 충북 청주시 상당구 문의면 청남대길 646\n   - **설명**: 다음으로 청남대를 방문하여 청와대의 별장으로 사용되었던 이곳의 아름다운 자연 경관과 정원을 즐기세요. 역대 대통령들의 흔적을 느낄 수 있는 다양한 전시관과 산책로가 있습니다.\n\n3. **대전 오월드**\n   - **위치**: 대전 서구 둔산대공원로 169\n   - **설명**: 세 번째로 대전 오월드로 이동하여 다양한 동물들을 구경하고 놀이기구를 타며 즐거운 시간을 보내세요. 동물원, 놀이동산, 플라워랜드 등 다양한 즐길 거리가 마련되어 있습니다.\n\n4. **국립생태원**\n   - **위치**: 충남 서천군 마서면 금강로 1210\n   - **설명**: 네 번째로 국립생태원을 방문하여 다양한 생태계와 자연환경을 체험하며 교육적인 시간을 가져보세요. 다양한 생태 프로그램과 전시관을 통해 생태계의 중요성을 배울 수 있습니다.\n\n5. **한화생명 이글스 파크**\n   - **위치**: 대전 중구 대종로 373\n   - **설명**: 마지막으로 한화생명 이글스 파크를 방문하여 야구 경기를 관람하며 흥미진진한 하루를 마무리하세요. 한화 이글스의 홈구장으로, 생동감 넘치는 야구 경기를 관람할 수 있습니다.\n\n이렇게 총 다섯 개의 관광지를 포함한 코스를 추천드립니다. 각 장소마다 고유의 매력을 느끼며 즐거운 여행 되시길 바랍니다!"

const ChatBubble: React.FC<ChatBubbleProps> = ({ text }) => {
    return (
        <div className="bg-white text-navy-blue rounded-lg p-4 shadow-lg max-w-4xl mx-auto my-6 relative">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-b-[10px] border-b-white"></div>
            <p className="text-sm sm:text-base whitespace-pre-wrap">{text}</p>
        </div>
    )
}

export default ChatBubble