import React from 'react';
import Layout from '../../components/Layout/Layout.index';
// import NavigationItems from '../Navigation/NavigationItems/navigationItems';
// import NavigationTop from '../Navigation/navigation';
import './Dashboard.styles.css'

const Dashboard = () => {
    return (
        <React.Fragment>
            <Layout>
            {/* <div> 
                <NavigationItems/>
            </div> */}
            <div className='Container'>
                <div id='toDoList' className='my-3'>
                    <h5 className='heading'>To Do List</h5>
                    <div className='innerContent'>
                        There are no tasks remaining
                    </div>
                </div>
                <div id='videoStatus'>
                    <h5 className='heading'>Video Status</h5>
                    <div className='innerContent'>
                        Some Stats
                    </div>
                </div>
                <div id='campaignReports'>
                    <h5 className='heading'>Campaign Reports</h5>
                    <div className='innerContent'>
                        Pie Chart
                    </div>
                </div>
            </div>
            </Layout>
        </React.Fragment>
    )
}

export default Dashboard