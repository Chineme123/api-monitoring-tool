import React from 'react'
import './routes.css'
import { Card } from '@chakra-ui/react'
import { Grid, GridItem } from '@chakra-ui/react'

import SideBar from '../components/SideBar.jsx'
import ApiStatusCard from '../components/ApiStatusCard.tsx'
import BarChart from '../components/charts/BarChart.jsx'
import PieChart from '../components/charts/PieChart.jsx'

import { sampleApiData } from '../constants/SampleData.ts'

const Dashboard = () => {
  const logs = [  ];
  return (
    <div className='page-container'>
      <SideBar />
      
      <Grid
        templateColumns='repeat(3, 1fr)'
        templateRows='repeat(2, 1fr)'
        gap={5}
        className='dashboard-grid'
      >
        <GridItem rowSpan={1} colSpan={1} className='dashboard-grid-item'>
          <div className='api-status-header'>
            <span>API</span>
            <span>Status</span>
            <span>Response Time</span>
            <span>Last Checked</span>
          </div>
          {sampleApiData.map((api, index) => (
              <ApiStatusCard 
                key={index} 
                apiName={api.apiName}
                status={api.status}
                responseTime={api.responseTime}
                checkedAt={api.checkedAt}
              />
            ))}
        </GridItem>
        <GridItem rowSpan={1} colSpan={2} className='dashboard-grid-item'>
          <div className='charts-container'>
            <div>
              <BarChart />
            </div>
            <div>
              <PieChart />
            </div>
          </div>
        </GridItem>
        <GridItem rowSpan={1} colSpan={3} className='dashboard-grid-item'>
          <div className='logs-container'>
            {logs ? <h2>Recent Logs</h2> : <h2>No logs available</h2>}
          </div>
        </GridItem>
      </Grid>
    </div>
  )
}

export default Dashboard