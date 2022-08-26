export function setDomainList(payload){
    return {
        payload,
        type: "SET_DOMAIN_LIST",
    }
}
export function setLoading(payload){
    return {
        payload,
        type: "SET_LOADING"
    }
}