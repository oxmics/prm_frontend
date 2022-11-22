import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import styles from './Requests.module.scss'
import Layout from '../../../components/God/Layout/Layout'
import Tag from '../../../components/Tag/Tag'
import DashboardApi from '../../../requests/DashboardApi'
import { toast } from 'react-toastify'
import ValidationError from '../../../errorHandler/ValidationError'
import { useAuth } from '../../../context/AuthContext'

const Requests = (props) => {
    const { user } = useAuth()

    const [requests, setRequests] = useState([])

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

    const handleBroadcast = async (id) => {
        try {
            await DashboardApi.broadcastRequest({
                id,
                token: user.token,
            })
            toast('Broadcasted Tender Request', {
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

    return (
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
                                        className={styles.Requests__table__date}
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
                                                handleDropdownToggle(request.id)
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
                                                    handleBroadcast(request.id)
                                                }
                                            >
                                                <i class="bi bi-broadcast"></i>{' '}
                                                Broadcast
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
    )
}

Requests.propTypes = {}

export default Requests
