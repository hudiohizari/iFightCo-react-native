import request from './ServerProvider'

const getRatio = () => {
    return request({
        url: "ratio",
        method: "GET"
    })
}

const getProvinces = () => {
    return request({
        url: "provincess",
        method: "GET"
    })
}

const ServerRequestManager = {
    getRatio, 
    getProvinces, 
}

export default ServerRequestManager