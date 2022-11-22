import Requests from './Requests'
import ValidationError from '../errorHandler/ValidationError'

class AccountApi extends Requests {
    static apiUrl = this.apiBaseUrl + '/account'

    static async createUser({ email, password }) {
        const url = this.apiUrl + '/register/'

        const response = await fetch(url, {
            method: 'POST',
            headers: this.getHeaders(),
            body: this.getJsonData({ email, password }),
        })

        if (!response.ok) {
            if (response.status === 409) {
                throw new ValidationError(
                    'Account already exists! Please login instead.'
                )
            }
            throw new ValidationError("Couldn't Register")
        }

        const data = await response.json()
        return data
    }

    static async loginUser({ email, password }) {
        const url = this.apiUrl + '/login/'

        const response = await fetch(url, {
            method: 'POST',
            headers: this.getHeaders(),
            body: this.getJsonData({ email, password }),
        })

        if (!response.ok) {
            throw new ValidationError("Couldn't Login")
        }

        const data = await response.json()
        return { token: data.token, ...data.user }
    }

    static async loginUserWithToken(token) {
        const url = this.apiUrl + '/login/'

        const response = await fetch(url, {
            method: 'POST',
            headers: this.getHeaders(),
            body: this.getJsonData({ token }),
        })

        if (!response.ok) {
            throw new ValidationError("Couldn't Login")
        }

        const data = await response.json()
        return data
    }
}

export default AccountApi
