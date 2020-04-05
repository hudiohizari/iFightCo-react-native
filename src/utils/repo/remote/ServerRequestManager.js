import request from './ServerProvider'

const getRatio = () => {
    return request({
        url: "ratio",
        method: "GET"
    })
}

const ServerRequestManager = {
    getRatio, 
}

export default ServerRequestManager