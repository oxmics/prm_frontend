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
}

export default DashboardApi
