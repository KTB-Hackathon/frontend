import React, { useEffect, useRef } from 'react';

declare global {
    interface Window {
        kakao: any;
    }
}

const KakaoMap: React.FC = () => {
    const mapRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const API_KEY = import.meta.env.VITE_API_KEY;
        const script = document.createElement('script');
        script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${API_KEY}&autoload=false`;
        script.async = true;

        script.onload = () => {
            window.kakao.maps.load(() => {
                if (!mapRef.current) return;

                const options = {
                    center: new window.kakao.maps.LatLng(33.450701, 126.570667),
                    level: 8
                };
                const map = new window.kakao.maps.Map(mapRef.current, options);

                const positions = [
                    {
                        title: '장소1',
                        latlng: new window.kakao.maps.LatLng(36.77754592, 127.219368)
                    },
                    {
                        title: '장소2',
                        latlng: new window.kakao.maps.LatLng(36.327625, 127.4274056)
                    },
                    {
                        title: '장소3',
                        latlng: new window.kakao.maps.LatLng(36.49560556, 127.7404806)
                    },
                    {
                        title: '장소4',
                        latlng: new window.kakao.maps.LatLng(36.49129722, 127.7411278)
                    },
                    {
                        title: '장소5',
                        latlng: new window.kakao.maps.LatLng(36.27973889, 126.9133139)
                    }
                ];

                // 마커 이미지 설정
                const imageSrc = "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png";
                const imageSize = new window.kakao.maps.Size(24, 35);
                const markerImage = new window.kakao.maps.MarkerImage(imageSrc, imageSize);

                // positions 배열의 각 위치에 대해 마커 생성
                positions.forEach((position) => {
                    const marker = new window.kakao.maps.Marker({
                        map: map,
                        position: position.latlng,
                        title: position.title,
                        image: markerImage
                    });

                    // 인포윈도우 생성
                    const infowindow = new window.kakao.maps.InfoWindow({
                        content: `<div style="padding:5px;font-size:12px;">${position.title}</div>`
                    });

                    // 마커에 마우스오버 이벤트 추가
                    window.kakao.maps.event.addListener(marker, 'mouseover', function() {
                        infowindow.open(map, marker);
                    });

                    // 마커에 마우스아웃 이벤트 추가
                    window.kakao.maps.event.addListener(marker, 'mouseout', function() {
                        infowindow.close();
                    });
                });

                // 지도 범위 재설정
                const bounds = new window.kakao.maps.LatLngBounds();
                positions.forEach(position => {
                    bounds.extend(position.latlng);
                });
                map.setBounds(bounds);
            });
        };

        document.head.appendChild(script);

        return () => {
            document.head.removeChild(script);
        };
    }, []);

    return (
        <div>
            <h1>선택된 여행지</h1>
            <div ref={mapRef} style={{ width: '800px', height: '500px' }}></div>
        </div>
    );
};

export default KakaoMap;