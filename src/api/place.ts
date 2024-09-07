
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
    const res = await fetch(`http://10.178.0.3:7777/recommend/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            credentials: 'include',
        },
        body: JSON.stringify(request)
    })
    if(!res.ok){
        throw new Error('network response was not ok')
    }
    const placeList: userSelectPlaceResponse = await res.json()
    console.log(placeList)
    return placeList
}

export async function getMessage(request: plannedPlaceRequest): Promise<messageResponse> {
    const res = await fetch(`http://10.178.0.3:7777/message/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            credentials: 'include',
        },
        body: JSON.stringify(request)
    })
    if(!res.ok){
        throw new Error('network response was not ok')
    }
    const message: messageResponse = await res.json()
    return message
}