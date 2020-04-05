const setDropDown = (dropDown) => {
    this.dropDown = dropDown
}

const show = (type, title, message) => {
    if (this.dropDown){
        this.dropDown.alertWithType(type, title, message)
    }
}

const setOnClose = (onClose) => {
    this.onClose = onClose
}

const invokeOnClose = () => {
    if(typeof this.onClose === 'function') {
        this.onClose()
    }
}

const AlertUtils = {
    setDropDown, 
    show,
    setOnClose,
    invokeOnClose
}

export default AlertUtils