
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

class AccountRequests extends Requests {
    static apiUrl = super.apiBaseUrl + "/account"

    static async createUser({ token, email, password }) {
        const url = this.apiUrl + "/register/"

        const response = await fetch(url, {
            method: "POST",
            headers: this.getHeaders(),
            body: this.getJsonData({ email, password })
        })

        if (!response.ok) {
            return new Error("Something went wrong!")
        }

        const data = await response.json()
        return data
    }
}

export {
    AccountRequests
}