import M from "materialize-css"

const errorMessage = (message) => {
     return  M.toast({html: message,classes:"#c62828 red darken-3"})
    }
    const successMessage=(message) => {
     return  M.toast({html: message,classes:"#00695c teal darken-3"})
    }

export {errorMessage,successMessage}