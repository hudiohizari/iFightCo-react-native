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

const getHospitals = (id, lat, lng) => {
    return request({
        url: `hospital/provincess/${id}/${lat}/${lng}`,
        method: "GET"
    })
}

const ServerRequestManager = {
    getRatio, 
    getProvinces, 
    getInbox,
    getHospitals
}

export default ServerRequestManager