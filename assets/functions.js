exports.success = result => {
    return {
        status: 'success',
        resultat: result
    }
}
exports.error = message => {
    return {
        status: 'error',
        message: message
    }
}