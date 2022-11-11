import Requests from "./Requests"

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
            return new Error("Couldn't Register")
        }

        const data = await response.json()
        return data
    }
}

export default AccountRequests