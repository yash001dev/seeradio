import React from 'react'
import { Button } from 'reactstrap'
import Layout from '../../components/Layout/Layout.index'
// import NavigationItems from '../Navigation/NavigationItems/navigationItems'
import { PaginationTable } from './Table/table'
import './videosInProduction.styles.css'

function VideosInProduction() {
    return (
        <Layout>
        <div className='videosInProduction'>
            
            <div className='mx-4 videosTable'>
                <div className='row my-3'>
                    <div className='col-md-4'>
                        <Button className='filterButton'><i class="fa fa-filter mr-2"></i>Search Filters</Button>
                    </div>
                    <div className='col-md-4  text-center'>
                        <span className='videosInProductionTitle' >Videos In Production</span>
                    </div>
                </div>
                <PaginationTable />
            </div>
        </div>
        </Layout>
    )
}

export default VideosInProduction
