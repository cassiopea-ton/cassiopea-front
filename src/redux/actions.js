import {CREATE_TON} from './types'
export function getTonClient (tonClient) {
    return {
        type: CREATE_TON,
        payload: tonClient,
    }
}