import React from 'react'
import PropTypes from 'prop-types'
import styles from "./Dashboard.module.scss";
import Layout from "../../../components/God/Layout/Layout";
import Card from "../../../components/Card/Card"
import Tag from "../../../components/Tag/Tag"

const Dashboard = (props) => {
    return (
        <Layout title="Dashboard" current="dashboard">
            <div className={styles.Dashboard}>
                <div className={styles.Dashboard__layers}>
                    <div className={styles.Dashboard__layersLeft}>
                        <div className={styles.Dashboard__layerOne}>
                            <Card className={styles.Dashboard__requestsCard}>
                                <p>Total Requests</p>
                                <h1>121</h1>
                            </Card>

                            <Card className={styles.Dashboard__organizationCard}>
                                <p>Total Organizations</p>
                                <h1>121</h1>
                            </Card>

                            <Card className={styles.Dashboard__usersCard}>
                                <p>Total Users</p>
                                <h1>189</h1>
                            </Card>
                        </div>

                        <div className={styles.Dashboard__layerTwo}>
                            <Card className={styles.Dashboard__overviewCard}>
                                <div>
                                    <h2>Last 30 days</h2>
                                </div>
                                <div>
                                    <p>Requests</p>
                                    <h2>56</h2>
                                </div>

                                <div>
                                    <p>Completed</p>
                                    <h2>23</h2>
                                </div>

                                <div>
                                    <p>Ongoing</p>
                                    <h2>20</h2>
                                </div>
                            </Card>
                        </div>

                        <div className={styles.Dashboard__layerThree}>
                            <Card className={styles.Dashboard__recentReqCards}>
                                <h1>Recent Requests</h1>
                                <Card className={styles.Dashboard__recentReqCard}>
                                    <h1 className={styles.Dashboard__recentReqCardTitle}>Qatar Public Works Department</h1>
                                    <p className={styles.Dashboard__recentReqCardTenderName}>Tender Name: E- Billing Software for Prodcurement</p>
                                    <p className={styles.Dashboard__recentReqCardRequestedBy}>Requested By: Noor ( Tenchology Lead)</p>
                                    <p className={styles.Dashboard__recentReqCardDate}>10-11-2022  |  09:20 QST</p>
                                </Card>

                                <Card className={styles.Dashboard__recentReqCard}>
                                    <h1 className={styles.Dashboard__recentReqCardTitle}>Qatar Public Works Department</h1>
                                    <p className={styles.Dashboard__recentReqCardTenderName}>Tender Name: E- Billing Software for Prodcurement</p>
                                    <p className={styles.Dashboard__recentReqCardRequestedBy}>Requested By: Noor ( Tenchology Lead)</p>
                                    <p className={styles.Dashboard__recentReqCardDate}>10-11-2022  |  09:20 QST</p>
                                </Card>

                                <Card className={styles.Dashboard__recentReqCard}>
                                    <h1 className={styles.Dashboard__recentReqCardTitle}>Qatar Public Works Department</h1>
                                    <p className={styles.Dashboard__recentReqCardTenderName}>Tender Name: E- Billing Software for Prodcurement</p>
                                    <p className={styles.Dashboard__recentReqCardRequestedBy}>Requested By: Noor ( Tenchology Lead)</p>
                                    <p className={styles.Dashboard__recentReqCardDate}>10-11-2022  |  09:20 QST</p>
                                </Card>

                                <Card className={styles.Dashboard__recentReqCard}>
                                    <h1 className={styles.Dashboard__recentReqCardTitle}>Qatar Public Works Department</h1>
                                    <p className={styles.Dashboard__recentReqCardTenderName}>Tender Name: E- Billing Software for Prodcurement</p>
                                    <p className={styles.Dashboard__recentReqCardRequestedBy}>Requested By: Noor ( Tenchology Lead)</p>
                                    <p className={styles.Dashboard__recentReqCardDate}>10-11-2022  |  09:20 QST</p>
                                </Card>
                            </Card>
                        </div>
                    </div>

                    <div className={styles.Dashboard__layersRight}>
                        <div className={styles.Dashboard__layersRight__one}>
                            <Card className={styles.Dashboard__layersRight__noticeCard}>
                                <h1>Notice</h1>
                                <Card className={styles.Dashboard__layersRight__noticeCardContent}>
                                    <h2>You cannot create a new request on “Existing software Change” for next 30 Days</h2>
                                    <p>A new request for rejected tender cannot be issued in next 30 days from the day of review verdict</p>
                                </Card>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

Dashboard.propTypes = {}

export default Dashboard