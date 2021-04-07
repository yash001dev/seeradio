import React from 'react';
import NavigationItems from '../Navigation/NavigationItems/navigationItems';
// import NavigationTop from '../Navigation/navigation';
import './dashboard.css'
import Layout from './../Layout/Layout.index';

const Dashboard = () => {
    return (
        <React.Fragment>
            <Layout>
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