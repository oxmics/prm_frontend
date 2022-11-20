import ValidationError from '../errorHandler/ValidationError'
import Requests from './Requests'

class RequestApi extends Requests {
    static apiUrl = this.apiBaseUrl + '/review-requests'

    static async createRequest({
        first_name,
        last_name,
        job_title,
        organisation_name,
        email,
        contact,
        token,
    }) {
        const url = this.apiUrl + '/'

        const response = await fetch(url, {
            method: 'POST',
            headers: this.getHeaders(token),
            body: this.getJsonData({
                first_name,
                last_name,
                job_title,
                organisation_name,
                email,
                contact,
            }),
        })

        console.log('status', response.status)

        if (!response.ok) {
            const data = await response.json()
            console.log(data)
            throw new ValidationError("Couldn't create review request!")
        }

        const data = await response.json()
        return data
    }

    static async createTender({
        tender_title,
        cost_estimate,
        tender_type,
        scope_of_work,
        requestId,
        token,
    }) {
        const url = `${this.apiUrl}/${requestId}/tender-details/`
        const response = await fetch(url, {
            method: 'POST',
            headers: this.getHeaders(token),
            body: this.getJsonData({
                tender_title,
                cost_estimate,
                tender_type,
                scope_of_work,
            }),
        })

        console.log('status', response.status)

        if (!response.ok) {
            const data = await response.json()
            console.log(data)
            throw new ValidationError("Couldn't create review request!")
        }

        const data = await response.json()
        return data
    }
}

export default RequestApi
