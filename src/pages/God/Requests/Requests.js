import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styles from "./Requests.module.scss";
import Layout from '../../../components/God/Layout/Layout';
import Tag from '../../../components/Tag/Tag';

const Requests = (props) => {
    const [requests, setRequests] = useState([{ id: 1, dropActive: false }, { id: 2, dropActive: false }, { id: 3, dropActive: false }])

    const handleDropdownToggle = (id) => {
        const updatedRequests = requests.map(request => {
            if (request.id === id)
                return { ...request, dropActive: !request.dropActive }

            return {
                ...request,
                dropActive: false
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
                        {requests.map(request => {
                            return <tr>
                                <td className={styles.Requests__table__title}>E-Bill Software</td>
                                <td className={styles.Requests__table__date}>January 05, 2022</td>
                                <td className={styles.Requests__table__organization}>Qatar Water Bodies</td>
                                <td className={styles.Requests__table__budget}>$1,240.00</td>
                                <td className={styles.Requests__table__status}><Tag name="To Review" /></td>
                                <td className={styles.Requests__table__action}><button onClick={() => handleDropdownToggle(request.id)}>...</button></td>
                                {request.dropActive &&
                                    <div className={styles.Requests__table__dropdown}>
                                        <button><i class="bi bi-broadcast"></i> Broadcast</button>
                                        <button><i class="bi bi-printer"></i> Print</button>
                                        <button><i class="bi bi-file-earmark-pdf"></i> Download PDF</button>
                                        <button><i class="bi bi-archive"></i> Archive</button>
                                    </div>
                                }
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
        </Layout>
    )
}

Requests.propTypes = {}

export default Requests