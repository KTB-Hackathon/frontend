import {SERVER_URL} from "../config";

interface userSelectedRequest {
    TRAVEL_STYL_1: number,
    TRAVEL_STYL_5: number
}
interface PlaceInfo {
    imageURL: string
    address: string
    longitude: number
    latitude: number
    name: string
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