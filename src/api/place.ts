import {SERVER_URL} from "../config";

interface userSelectedRequest {
    TRAVEL_STYL_1: number,
    TRAVEL_STYL_5: number
}
interface PlaceInfo {
    fileName: string
    address1: string // 도로명
    address2: string // 구주소
    longitude: number // 경도
    latitude: number // 위도
    name: string
    description: string // 설명글 빼고 진행
}

interface userSelectPlaceResponse {
    list: PlaceInfo[]
}


interface plannedPlaceRequest {
    content : string[]
}

interface messageResponse {
    content: string
}
export async function getPlaceList(request: userSelectedRequest): Promise<userSelectPlaceResponse> {
    const res = await fetch(`${SERVER_URL}/recommend`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(request)
    })
    if(!res.ok){
        throw new Error('network response was not ok')
    }
    const placeList: userSelectPlaceResponse = await res.json()
    return placeList
}

export async function getMessage(request: plannedPlaceRequest): Promise<messageResponse> {
    const res = await fetch(`${SERVER_URL}/message`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(request)
    })
    if(!res.ok){
        throw new Error('network response was not ok')
    }
    const message: messageResponse = await res.json()
    return message
}