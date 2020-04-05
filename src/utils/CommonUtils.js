import AlertUtils from './AlertUtils'

const isObjectEmpty = (obj) => {
    for(var key in obj) {
        if(obj.hasOwnProperty(key))
            return false
    }
    return true
}

const showAlert = (info, title, text) => {
    AlertUtils.show(info ? info : "",  title ? title : "", text)
}

const CommonUtils = {
    isObjectEmpty,
    showAlert, 
}

export default CommonUtils