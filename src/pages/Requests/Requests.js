import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styles from './Requests.module.scss'
import Sidebar from '../../components/Sidebar/Sidebar'
import Navbar from '../../components/Navbar/Navbar'
import Layout from '../../components/Layout/Layout'
import Button from '../../components/Button/Button'
import TextareaAutosize from 'react-textarea-autosize'
import RequestApi from '../../requests/RequestApi'
import { toast } from 'react-toastify'
import ValidationError from '../../errorHandler/ValidationError'
import { useAuth } from '../../context/AuthContext'

const Requests = (props) => {
    const [page, setPage] = useState(0)
    const [form, setForm] = useState({})
    const { user } = useAuth()

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (page === 0) {
            return setPage(1)
        }

        if (page === 1) {
            console.log(form)
            try {
                console.log('creating request...')
                const request = await RequestApi.createRequest({
                    first_name: form.first_name,
                    last_name: form.last_name,
                    job_title: form.job_title,
                    organisation_name: form.organisation_name,
                    email: form.email,
                    contact: form.contact,
                    token: user.token,
                })
                console.log('creating tender...')
                const tender = await RequestApi.createTender({
                    tender_title: form.tender_title,
                    cost_estimate: form.cost_estimate,
                    tender_type: 'Licenses and software',
                    scope_of_work: form.scope_of_work,
                    requestId: request.id,
                    token: user.token,
                })
                console.log(tender)
                toast('Request created', {
                    type: 'success',
                })
            } catch (err) {
                if (err instanceof ValidationError) {
                    toast(err.message, {
                        type: 'error',
                    })
                    return
                }
                toast('Something went wrong!', {
                    type: 'error',
                })
                console.error(err)
            }
        }
    }

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        })
    }

    const handleGoToPrev = (e) => {
        e.preventDefault()
        setPage(page - 1)
    }

    return (
        <Layout current="requests" title="Create a new request">
            <div className={styles.Requests}>
                {page === 0 && (
                    <>
                        <h1 className={styles.Requests__title}>
                            Requester Details
                        </h1>
                        <form
                            className={styles.Requests__form}
                            onSubmit={handleSubmit}
                        >
                            <div className={styles.Requests__formRow}>
                                <div className={styles.Requests__formGroup}>
                                    <label htmlFor="first_name">
                                        First Name
                                    </label>
                                    <input
                                        type="text"
                                        name="first_name"
                                        placeholder="Enter your first name"
                                        value={form.first_name || ''}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className={styles.Requests__formGroup}>
                                    <label htmlFor="last_name">Last Name</label>
                                    <input
                                        type="text"
                                        name="last_name"
                                        placeholder="Enter your last name"
                                        value={form.last_name || ''}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>

                            <div className={styles.Requests__formGroup}>
                                <label htmlFor="job_title">Job Title</label>
                                <input
                                    type="text"
                                    name="job_title"
                                    placeholder="Enter your job title"
                                    value={form.job_title || ''}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className={styles.Requests__formGroup}>
                                <label htmlFor="organisation_name">
                                    Organization Name
                                </label>
                                <input
                                    type="text"
                                    name="organisation_name"
                                    placeholder="Enter your organization name"
                                    value={form.organisation_name || ''}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className={styles.Requests__formGroup}>
                                <label htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="example@email.com"
                                    value={form.email || ''}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className={styles.Requests__formGroup}>
                                <label htmlFor="contact">Phone number</label>
                                <input
                                    type="text"
                                    name="contact"
                                    placeholder="+1 201-555-0123"
                                    value={form.contact || ''}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className={styles.Requests__formBtnWrapper}>
                                <Button type="submit">Next</Button>
                            </div>
                        </form>
                    </>
                )}

                {page === 1 && (
                    <>
                        <h1 className={styles.Requests__title}>
                            Tender Details
                        </h1>
                        <form
                            className={styles.Requests__form}
                            onSubmit={handleSubmit}
                        >
                            <div className={styles.Requests__formGroup}>
                                <label htmlFor="tender_title">
                                    Tender Title
                                </label>
                                <input
                                    type="text"
                                    name="tender_title"
                                    placeholder="Enter the tender title"
                                    value={form.tender_title || ''}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className={styles.Requests__formGroup}>
                                <label htmlFor="cost_estimate">
                                    Cost Estimate
                                </label>
                                <input
                                    type="text"
                                    name="cost_estimate"
                                    placeholder="Enter the estimated cost"
                                    value={form.cost_estimate || ''}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className={styles.Requests__formGroup}>
                                <label>Choose the tender type</label>
                                <div className={styles.Requests__formCheckbox}>
                                    <input
                                        type="radio"
                                        onChange={handleChange}
                                        value="1"
                                        name="tender_type"
                                        id="licenses-and-software"
                                    />
                                    <label htmlFor="licenses-and-software">
                                        Licenses and software (including new
                                        licenses)
                                    </label>
                                </div>

                                <div className={styles.Requests__formCheckbox}>
                                    <input
                                        type="radio"
                                        onChange={handleChange}
                                        value="2"
                                        name="tender_type"
                                        id="hardware-and-networks"
                                    />
                                    <label htmlFor="hardware-and-networks">
                                        Hardware,equipments and
                                        networks(including maintainance
                                        contracts)
                                    </label>
                                </div>

                                <div className={styles.Requests__formCheckbox}>
                                    <input
                                        type="radio"
                                        onChange={handleChange}
                                        value="3"
                                        name="tender_type"
                                        id="outsourcing-and-resources"
                                    />
                                    <label htmlFor="outsourcing-and-resources">
                                        Outsourcing of human resources (Staff
                                        augmentation)
                                    </label>
                                </div>

                                <div className={styles.Requests__formCheckbox}>
                                    <input
                                        type="radio"
                                        onChange={handleChange}
                                        value="4"
                                        name="tender_type"
                                        id="consulting-services"
                                    />
                                    <label htmlFor="consulting-services">
                                        Consulting Services
                                    </label>
                                </div>

                                <div className={styles.Requests__formCheckbox}>
                                    <input
                                        type="radio"
                                        onChange={handleChange}
                                        value="5"
                                        name="tender_type"
                                        id="operations-and-support"
                                    />
                                    <label htmlFor="operations-and-support">
                                        Operations and technical support
                                    </label>
                                </div>

                                <div className={styles.Requests__formCheckbox}>
                                    <input
                                        type="radio"
                                        onChange={handleChange}
                                        value="6"
                                        name="tender_type"
                                        id="integrated-services"
                                    />
                                    <label htmlFor="integrated-services">
                                        Intergrated Services
                                    </label>
                                </div>
                            </div>

                            <div className={styles.Requests__formGroup}>
                                <label htmlFor="scope_of_work">
                                    Scope of Work
                                </label>
                                <TextareaAutosize
                                    name="scope_of_work"
                                    cols="30"
                                    rows="10"
                                    placeholder="Please enter the details of scope of work"
                                    value={form.scope_of_work || ''}
                                    onChange={handleChange}
                                ></TextareaAutosize>
                            </div>
                            <p className={styles.Requests__guidelines}>
                                By pressing the submit button, I agree to QDG a
                                previous request hasn’t been made in the recent
                                months regarding the same and have clearly
                                undergone the guidelines and assure have made
                                the details comply the guidelines mentioned.
                            </p>
                            <div className={styles.Requests__formBtnWrapper}>
                                <Button onClick={handleGoToPrev}>Prev</Button>
                                <Button type="submit">Submit</Button>
                            </div>
                        </form>
                    </>
                )}
            </div>
        </Layout>
    )
}

Requests.propTypes = {}

export default Requests
