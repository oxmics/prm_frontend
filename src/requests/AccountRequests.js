import Requests from "./Requests"
import ValidationError from "../errorHandler/ValidationError"

class AccountRequests extends Requests {
    static apiUrl = this.apiBaseUrl + "/account"

    static async createUser({ email, password }) {
        const url = this.apiUrl + "/register/"

        const response = await fetch(url, {
            method: "POST",
            headers: this.getHeaders(),
            body: this.getJsonData({ email, password })
        })

        if (!response.ok) {
            return new ValidationError("Couldn't Register")
        }

        const data = await response.json()
        return data
    }
}

export default AccountRequests