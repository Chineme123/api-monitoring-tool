import React from 'react'
import SideBar from '../components/SideBar.jsx'
import { Stack, Box, Button } from "@chakra-ui/react"
import { API_ENDPOINTS, API_ENDPOINTS_check } from '../constants/ApiEnpoints.js'

const ManualCheck = () => {
  return (
    <div className='page-container'>
      <SideBar />

      <Stack spacing={4} p={4} flex={1}>
        {
          API_ENDPOINTS_check.map((endpoint, index) => (
            <Box key={index} p={4} borderWidth="1px" borderRadius="md" boxShadow="md" display={"flex"} justifyContent="space-between" alignItems="center">
              <div>
                <h2>{endpoint.endpoint}</h2>
                <p>Last Checked: {endpoint.lastChecked}</p>
                <p>Status: {endpoint.status}</p>
                <p>Last Response Time: {endpoint.lastResponseTimeMs} ms</p>
                <p>Current Response Time: {endpoint.currentResponseTime} ms</p>
              </div>

              <Button p={4} colorPalette={'blue'} variant={"surface"} cursor={"pointer"} onClick={() => {
                // Implement manual check logic here
              }}>
                Manual Check
              </Button>
            </Box>
          ))
        }
      </Stack>
    </div>
  )
}

export default ManualCheck