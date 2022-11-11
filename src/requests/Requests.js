class Requests {
    static apiBaseUrl = "http://localhost:8000"

    static getHeaders(token) {
        return {
            "Content-Type": "application/json",
            ...(token && { "Authorization": token })
        }
    }

    static getJsonData(obj) {
        return JSON.stringify(obj)
    }
}

export default Requests