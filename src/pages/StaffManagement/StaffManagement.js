import React from 'react'
import PropTypes from 'prop-types'
import styles from "./StaffManagement.module.scss";
import Layout from '../../components/Layout/Layout';
import Card from '../../components/Card/Card';
import Tag from '../../components/Tag/Tag';

const StaffManagement = (props) => {
    return (
        <Layout current="staff-management" title="Staff Management">
            <div className={styles.StaffManagement}>
                <Card className={styles.StaffManagement__card}>
                    <table className={styles.StaffManagement__table}>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Occupation</th>
                                <th>Phone Number</th>
                                <th>Email Address</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className={styles.StaffManagement__table__name}>David Collins</td>
                                <td className={styles.StaffManagement__table__tag}><Tag name="Product Designer" /></td>
                                <td className={styles.StaffManagement__table__phone}>(973) 4011282</td>
                                <td className={styles.StaffManagement__table__email}>d.collins@boyle.info</td>
                            </tr>

                            <tr>
                                <td className={styles.StaffManagement__table__name}>David Collins</td>
                                <td className={styles.StaffManagement__table__tag}><Tag name="Product Designer" /></td>
                                <td className={styles.StaffManagement__table__phone}>(973) 4011282</td>
                                <td className={styles.StaffManagement__table__email}>d.collins@boyle.info</td>
                            </tr>

                            <tr>
                                <td className={styles.StaffManagement__table__name}>David Collins</td>
                                <td className={styles.StaffManagement__table__tag}><Tag name="Product Designer" /></td>
                                <td className={styles.StaffManagement__table__phone}>(973) 4011282</td>
                                <td className={styles.StaffManagement__table__email}>d.collins@boyle.info</td>
                            </tr>
                        </tbody>
                    </table>
                </Card>
            </div>
        </Layout>
    )
}

StaffManagement.propTypes = {}

export default StaffManagement