import React from 'react'
import './endpoint.css'

const sampleResponse = `{
  "status": "success",
  "data": {
    "accountNumber": "1234567890",
    "accountName": "John Doe",
    "bankCode": "058",
    "balance": 15000.75
  },
  "message": "Account details fetched successfully"
}`

const EndpointResponse = () => {
  return (
    <div className='endpoint-box'>
        <pre>
            {sampleResponse}
        </pre>
    </div>
  )
}

export default EndpointResponse