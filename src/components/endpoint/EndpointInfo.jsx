import React from 'react'
import './endpoint.css'
import EndpointRequest from './EndpointRequest'
import EndpointResponse from './EndpointResponse'
import EndpointStats from './EndpointStats'

const EndpointInfo = () => {
  return (
    <div className='endpoint-info-container'>
      <div className='endpoint-info-box'>
        <h2>Endpoint Information</h2>
        <div>
          <h3>Request</h3>
          <EndpointRequest />
        </div>
        <div>
          <h3>Response</h3>
          <EndpointResponse />
        </div>
      </div>

      <div className='endpoint-info-box'>
        <h2>Additional Statistics</h2>
        <EndpointStats />
      </div>
    </div>
  )
}

export default EndpointInfo