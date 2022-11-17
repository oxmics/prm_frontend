import Sidebar from "../../components/Sidebar/Sidebar"
import Navbar from "../../components/Navbar/Navbar"
import Card from "../../components/Card/Card"

import styles from "./Dashboard.module.scss"
import Tag from "./Tag/Tag"

const Dashboard = () => {
    return (
        <div className={styles.Dashboard}>
            <div className={styles.Dashboard__sidebar}>
                <Sidebar current="dashboard" />
            </div>

            <div className={styles.Dashboard__content}>
                <div className={styles.Dashboard__navbar}>
                    <Navbar />
                </div>
                <div className={styles.Dashboard__layers}>
                    <div className={styles.Dashboard__layersLeft}>
                        <div className={styles.Dashboard__layerOne}>
                            <Card className={styles.Dashboard__requestsCard}>
                                <p>Total Requests</p>
                                <h1>121</h1>
                            </Card>

                            <Card className={styles.Dashboard__organizationCard}>
                                <p>Organization Name</p>
                                <h1>Public Works Department</h1>
                                <div className={styles.Dashboard__organizationCardInnerWrapper}>
                                    <Card className={styles.Dashboard__organizationCardStaff}>
                                        <h1>19</h1>
                                        <p>Staffs</p>
                                    </Card>

                                    <Card className={styles.Dashboard__organizationCardDocuments}>
                                        <h1>134</h1>
                                        <p>Documents</p>
                                    </Card>
                                </div>
                            </Card>
                        </div>

                        <div className={styles.Dashboard__layerTwo}>
                            <Card className={styles.Dashboard__overviewCard}>
                                <div>
                                    <h2>Last 30 days</h2>
                                </div>
                                <div>
                                    <p>Requests</p>
                                    <h2>4</h2>
                                </div>

                                <div>
                                    <p>Reviewed</p>
                                    <h2>3</h2>
                                </div>

                                <div>
                                    <p>Rejected</p>
                                    <h2>0</h2>
                                </div>
                            </Card>
                        </div>

                        <div className={styles.Dashboard__layerThree}>
                            <Card className={styles.Dashboard__prevReqCard}>
                                <h1>Previous Requests</h1>
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Title</th>
                                            <th>Requested On</th>
                                            <th>Revived On</th>
                                            <th>Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>E - Way Bill Software</td>
                                            <td>10-11-2022</td>
                                            <td>10-11-2022</td>
                                            <td><Tag name="Pending" /></td>
                                        </tr>

                                        <tr>
                                            <td>E - Way Bill Software</td>
                                            <td>10-11-2022</td>
                                            <td>10-11-2022</td>
                                            <td><Tag name="Pending" /></td>
                                        </tr>

                                        <tr>
                                            <td>E - Way Bill Software</td>
                                            <td>10-11-2022</td>
                                            <td>10-11-2022</td>
                                            <td><Tag name="Pending" /></td>
                                        </tr>
                                    </tbody>
                                </table>
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
        </div>
    )
}

export default Dashboard