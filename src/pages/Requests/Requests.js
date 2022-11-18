import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styles from "./Requests.module.scss";
import Sidebar from '../../components/Sidebar/Sidebar';
import Navbar from "../../components/Navbar/Navbar";
import Layout from '../../components/Layout/Layout';
import Button from "../../components/Button/Button"
import TextareaAutosize from 'react-textarea-autosize';

const Requests = (props) => {
    const [page, setPage] = useState(0)

    const handleSubmit = (e) => {
        e.preventDefault()

        if (page === 0) {
            return setPage(1)
        }


    }

    return (
        <Layout current="requests" title="Create a new request">
            <div className={styles.Requests}>
                {page === 0 &&
                    <>
                        <h1 className={styles.Requests__title}>Requester Details</h1>
                        <form className={styles.Requests__form} onSubmit={handleSubmit}>
                            <div className={styles.Requests__formRow}>
                                <div className={styles.Requests__formGroup}>
                                    <label htmlFor="firstname">First Name</label>
                                    <input type="text" name="firstname" placeholder="Enter your first name" value="" />
                                </div>
                                <div className={styles.Requests__formGroup}>
                                    <label htmlFor="lastname">Last Name</label>
                                    <input type="text" name="lastname" placeholder="Enter your last name" value="" />
                                </div>
                            </div>

                            <div className={styles.Requests__formGroup}>
                                <label htmlFor="job-title">Job Title</label>
                                <input type="text" name="job-title" placeholder="Enter your job title" value="" />
                            </div>

                            <div className={styles.Requests__formGroup}>
                                <label htmlFor="organization-name">Organization Name</label>
                                <input type="text" name="organization-name" placeholder="Enter your organization name" value="" />
                            </div>

                            <div className={styles.Requests__formGroup}>
                                <label htmlFor="email">Organization Name</label>
                                <input type="email" name="email" placeholder="example@email.com" value="" />
                            </div>

                            <div className={styles.Requests__formGroup}>
                                <label htmlFor="ph-no">Phone number</label>
                                <input type="text" name="ph-no" placeholder="+1 201-555-0123" value="" />
                            </div>
                            <div className={styles.Requests__formBtnWrapper}>
                                <Button type="submit">Next</Button>
                            </div>
                        </form>
                    </>
                }

                {page === 1 &&
                    <>
                        <h1 className={styles.Requests__title}>Tender Details</h1>
                        <form className={styles.Requests__form} onSubmit={handleSubmit}>
                            <div className={styles.Requests__formGroup}>
                                <label htmlFor="tender-title">Tender Title</label>
                                <input type="text" name="tender-title" placeholder="Enter the tender title" value="" />
                            </div>

                            <div className={styles.Requests__formGroup}>
                                <label htmlFor="cost-estimate">Cost Estimate</label>
                                <input type="text" name="cost-estimate" placeholder="Enter the estimated cost" value="" />
                            </div>

                            <div className={styles.Requests__formGroup}>
                                <label>Choose the tender type</label>
                                <div className={styles.Requests__formCheckbox}>
                                    <input type="checkbox" name="tender-type" id='licenses-and-software' />
                                    <label htmlFor="licenses-and-software">Licenses and software (including new licenses)</label>
                                </div>

                                <div className={styles.Requests__formCheckbox}>
                                    <input type="checkbox" name="tender-type" id='hardware-and-networks' />
                                    <label htmlFor="hardware-and-networks">Hardware,equipments and networks(including maintainance contracts)</label>
                                </div>

                                <div className={styles.Requests__formCheckbox}>
                                    <input type="checkbox" name="tender-type" id='outsourcing-and-resources' />
                                    <label htmlFor="outsourcing-and-resources">Outsourcing of human resources (Staff augmentation)</label>
                                </div>

                                <div className={styles.Requests__formCheckbox}>
                                    <input type="checkbox" name="tender-type" id='consulting-services' />
                                    <label htmlFor="consulting-services">Consulting Services</label>
                                </div>

                                <div className={styles.Requests__formCheckbox}>
                                    <input type="checkbox" name="tender-type" id='operations-and-support' />
                                    <label htmlFor="operations-and-support">Operations and technical support</label>
                                </div>

                                <div className={styles.Requests__formCheckbox}>
                                    <input type="checkbox" name="tender-type" id='integrated-services' />
                                    <label htmlFor="integrated-services">Intergrated Services</label>
                                </div>
                            </div>

                            <div className={styles.Requests__formGroup}>
                                <label htmlFor="scope-of-work">Scope of Work</label>
                                <TextareaAutosize name="scope-of-work" cols="30" rows="10" placeholder="Please enter the details of scope of work"></TextareaAutosize>
                            </div>
                            <div className={styles.Requests__formBtnWrapper}>
                                <Button type="submit">Submit</Button>
                            </div>
                        </form>
                    </>
                }
            </div>
        </Layout>
    )
}

Requests.propTypes = {}

export default Requests