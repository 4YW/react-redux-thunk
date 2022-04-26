
export const FETCH_START = 'FETCH_START'
export const FETCH_END = 'FETCH_END'
export const FETCH_ERR = 'FETCH_ERR'


export function startFetch(){
    return {
        type:FETCH_START,
    }
}

export function endFetch(){
    return {
        type:FETCH_END,
    }
}

export function errFetch(error){
    return {
        type: FETCH_ERR,
        payload: error,
    }
}

