import axios from 'axios'

import Config from '../../Config'
// import LRM from '../local/LocalRequestManager'

import CommonUtils from '../../CommonUtils'

const ApiCentral = async (options, isHeader = true) => {

    let authHeader = null
    // if (isHeader) authHeader = await LRM.getUserToken() /// Add header
  
    const client = axios.create({
        baseURL: Config.BASE_URL,
        headers: { 
            Accept: "application/json",
            "Content-Type": "application/json",
            "Authorization": authHeader }
    })
  
    const onSuccess = function (response) {
        if(Config.IS_DEV) console.debug("Request Successful!", response)
        return response.data
    }
  
    const onError = function (error) {
        if(Config.IS_DEV) {
            console.debug("Request Failed:", error.config)
            if (error.response) {
                // Request was made but server responded with something
                // other than 2xx
                CommonUtils.showAlert("error", "Something wrong", `Status: ${error.response.status}`)
                console.debug("Status:", error.response.status)
                console.debug("Data:", error.response.data)
                console.debug("Headers:", error.response.headers)
            } else {
                // Something else happened while setting up the request
                // triggered the error
                CommonUtils.showAlert("error", "Something wrong", `Message: ${error.message}`)
                console.debug("Error Message:", error.message)
            }
      }
  
      return Promise.reject(error.response || error.message)
    }
  
  
    return client(options)
        .then(onSuccess)
        .catch(onError)
  }
  
export default ApiCentral
