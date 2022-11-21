class Requests {
    static apiBaseUrl =
        !process.env.NODE_ENV || process.env.NODE_ENV === 'development'
            ? 'http://localhost:8000'
            : 'http://52.3.232.20:8000'

    static getHeaders(token) {
        return {
            'Content-Type': 'application/json',
            ...(token && { Authorization: 'Token ' + token }),
        }
    }

    static getJsonData(obj) {
        return JSON.stringify(obj)
    }
}

export default Requests
