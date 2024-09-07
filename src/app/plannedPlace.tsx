import React from 'react'
import KakaoMap from '../components/map.tsx'
import ChatBubble from "../components/chatBubble.tsx";
import {useLocation} from "react-router-dom";

interface message {
    message: string
}

const PlannedPlace:React.FC = () => {
    const location = useLocation();
    const { message } = location.state as message
    return (
        <div className="bg-blue-900 min-h-screen px-8 py-10">
            <h1 className="text-white text-5xl text-center font-bold mb-16 my-14">내 여행지는?</h1>
            <div className="flex justify-center items-center mb-8">
                <KakaoMap/>
            </div>
            <ChatBubble text={message} />
        </div>
    )
}

export default PlannedPlace