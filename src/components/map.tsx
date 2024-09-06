import React, {useEffect} from 'react';

declare global {
    interface Window {
        kakao: any
    }
}

const KakaoMap: React.FC = () => {
    useEffect(() => {
        const container = document.getElementById('map')
        const options = {
            center: new window.kakao.maps.LatLng(33.450701, 126.570667),
            level: 3
        }

        const map = new window.kakao.maps.Map(container, options)

    }, [])

    return (<div id='map' className="flex justify-center items-center w-[960px] h-[500px]" />)
};

export default KakaoMap;