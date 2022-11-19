import Requests from './Requests'

class RequestApi extends Requests {
    static apiUrl = this.apiBaseUrl + '/review-requests'

    static async createRequest({
        contact,
        cost_estimate,
        email,
        first_name,
        job_title,
        last_name,
        organization_name,
        scope_of_work,
        tender_title,
        tender_type,
    }) {
        const url = this.apiUrl + '/'

        const response = await fetch(url, {
            method: 'POST',
            headers: this.getHeaders(),
            body: this.getJsonData({
                contact,
                cost_estimate,
                email,
                first_name,
                job_title,
                last_name,
                organization_name,
                scope_of_work,
                tender_title,
                tender_type,
            }),
        })

        if (!response.ok) {
            throw new ValidationError("Couldn't create review request")
        }

        const data = await response.json()
        return data
    }
}

export default RequestApi
