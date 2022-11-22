import Requests from './Requests'
import ValidationError from '../errorHandler/ValidationError'

class DashboardApi extends Requests {
    static apiUrl = this.apiBaseUrl + '/dashboard'

    static async getDashboard({ token }) {
        const url = this.apiUrl
        const response = await fetch(url, {
            method: 'GET',
            headers: this.getHeaders(token),
        })
        if (!response.ok) {
            throw new ValidationError('Something went wrong!')
        }
        const data = await response.json()
        return data
    }

    static async getRequests({ token }) {
        const url = this.apiBaseUrl + '/review-requests/'
        const response = await fetch(url, {
            method: 'GET',
            headers: this.getHeaders(token),
        })
        if (!response.ok) {
            // const data = await response.json()
            // console.log(data)
            throw new ValidationError('Something went wrong!')
        }
        const data = await response.json()
        return data
    }

    static async broadcastRequest({ id, token }) {
        const url = `${this.apiBaseUrl}/broadcast-request/${id}/`
        const response = await fetch(url, {
            method: 'POST',
            headers: this.getHeaders(token),
        })
        if (!response.ok) {
            throw new ValidationError('Something went wrong!')
        }
    }

    static async reviewRequest({ id, token, review, score }) {
        const url = `${this.apiBaseUrl}/review/${id}/`
        const response = await fetch(url, {
            method: 'POST',
            headers: this.getHeaders(token),
            body: this.getJsonData({
                review,
                score,
            }),
        })
        if (!response.ok) {
            // const data = await response.json()
            // console.error(data)
            throw new ValidationError('Something went wrong!')
        }
    }
}

export default DashboardApi
