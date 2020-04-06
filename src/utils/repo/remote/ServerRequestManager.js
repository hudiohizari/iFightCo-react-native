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

const getInbox = () => {
    return request({
        url: "fightcovid19/notification",
        method: "GET"
    })
}

const ServerRequestManager = {
    getRatio, 
    getProvinces, 
    getInbox
}

export default ServerRequestManager