import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import styles from './Requests.module.scss'
import Layout from '../../../components/Staff/Layout/Layout'
import Tag from '../../../components/Tag/Tag'
import DashboardApi from '../../../requests/DashboardApi'
import { toast } from 'react-toastify'
import ValidationError from '../../../errorHandler/ValidationError'
import { useAuth } from '../../../context/AuthContext'
import Modal from 'react-modal'
import Button from '../../../components/Button/Button'
import ReactTextareaAutosize from 'react-textarea-autosize'

const Requests = (props) => {
    const { user } = useAuth()

    const [requests, setRequests] = useState([])

    const [modalIsOpen, setIsOpen] = useState(false)

    const [modalFormData, setModalFormData] = useState({
        id: '',
        review: '',
        score: 1,
    })

    const openModal = (id) => {
        setIsOpen(true)
        setModalFormData({ id })
    }

    const closeModal = () => {
        setIsOpen(false)
    }

    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
        },
    }

    useEffect(() => {
        const asyncFunc = async () => {
            try {
                const data = await DashboardApi.getDashboard({
                    token: user.token,
                })
                console.log(data)
                setRequests(data.map((r) => ({ ...r, dropActive: false })))
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
                console.log(err)
            }
        }
        asyncFunc()
    }, [])

    const handleReview = async (id) => {
        console.log(id)
        openModal(id)
    }

    const handleModalFormChange = (e) => {
        setModalFormData({ ...modalFormData, [e.target.name]: e.target.value })
    }

    const handleDropdownToggle = (id) => {
        const updatedRequests = requests.map((request) => {
            if (request.id === id)
                return { ...request, dropActive: !request.dropActive }

            return {
                ...request,
                dropActive: false,
            }
        })

        setRequests(updatedRequests)
    }

    const handleModalFormSubmit = async (e) => {
        e.preventDefault()
        console.log(modalFormData)
        try {
            await DashboardApi.reviewRequest({
                id: modalFormData.id,
                token: user.token,
                review: modalFormData.review,
                score: modalFormData.score,
            })
            toast('Review Submitted', {
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
            console.log(err)
        }
    }

    return (
        <>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Review Request"
                style={customStyles}
            >
                <form
                    action=""
                    className={styles.Modal__form}
                    onSubmit={handleModalFormSubmit}
                >
                    <div className={styles.Modal__formGroup}>
                        <label htmlFor="" className={styles.Modal__formLabel}>
                            Review
                        </label>
                        <ReactTextareaAutosize
                            className={styles.Modal__formInput}
                            type="text"
                            name="review"
                            id=""
                            value={modalFormData.review}
                            onChange={handleModalFormChange}
                        />
                    </div>
                    <div className={styles.Modal__formGroup}>
                        <label className={styles.Modal__formLabel} htmlFor="">
                            Score
                        </label>
                        <input
                            type="number"
                            className={styles.Modal__formInput}
                            name="score"
                            min="1"
                            max="5"
                            value={modalFormData.score}
                            onChange={handleModalFormChange}
                        />
                    </div>
                    <Button type="submit">Submit</Button>
                </form>
            </Modal>
            <Layout current="requests" title="Requests">
                <div className={styles.Requests}>
                    <table className={styles.Requests__table}>
                        <thead>
                            <th>Tender Title</th>
                            <th>Date</th>
                            <th>Organization</th>
                            <th>Budget</th>
                            <th>Status</th>
                            <th>Action</th>
                        </thead>
                        <tbody>
                            {requests.map((request) => {
                                return (
                                    <tr>
                                        <td
                                            className={
                                                styles.Requests__table__title
                                            }
                                        >
                                            {request.tender_title}
                                        </td>
                                        <td
                                            className={
                                                styles.Requests__table__date
                                            }
                                        >
                                            January 05, 2022
                                        </td>
                                        <td
                                            className={
                                                styles.Requests__table__organization
                                            }
                                        >
                                            {request.organisation_name}
                                        </td>
                                        <td
                                            className={
                                                styles.Requests__table__budget
                                            }
                                        >
                                            {request.cost_estimate}
                                        </td>
                                        <td
                                            className={
                                                styles.Requests__table__status
                                            }
                                        >
                                            <Tag name="To Review" />
                                        </td>
                                        <td
                                            className={
                                                styles.Requests__table__action
                                            }
                                        >
                                            <button
                                                onClick={() =>
                                                    handleDropdownToggle(
                                                        request.id
                                                    )
                                                }
                                            >
                                                ...
                                            </button>
                                        </td>
                                        {request.dropActive && (
                                            <div
                                                className={
                                                    styles.Requests__table__dropdown
                                                }
                                            >
                                                <button
                                                    onClick={() =>
                                                        handleReview(request.id)
                                                    }
                                                >
                                                    <i class="bi bi-broadcast"></i>{' '}
                                                    Review
                                                </button>
                                                <button>
                                                    <i class="bi bi-printer"></i>{' '}
                                                    Print
                                                </button>
                                                <button>
                                                    <i class="bi bi-file-earmark-pdf"></i>{' '}
                                                    Download PDF
                                                </button>
                                                <button>
                                                    <i class="bi bi-archive"></i>{' '}
                                                    Archive
                                                </button>
                                            </div>
                                        )}
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </Layout>
        </>
    )
}

Requests.propTypes = {}

export default Requests
