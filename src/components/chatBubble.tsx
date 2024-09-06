import React from 'react'

interface ChatBubbleProps {
    text: string
}

const ChatBubble: React.FC<ChatBubbleProps> = ({ text }) => {
    return (
        <div className="bg-white text-navy-blue rounded-lg p-4 shadow-lg max-w-4xl mx-auto my-6 relative">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-b-[10px] border-b-white"></div>
            <p className="text-sm sm:text-base whitespace-pre-wrap">{text}</p>
        </div>
    )
}

export default ChatBubble