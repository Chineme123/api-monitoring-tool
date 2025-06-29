import React from 'react'
import './endpoint.css'

const EndpointRequest = () => {
    return (
        <div className='endpoint-box'>
            <pre>
                {
                    `method: 'GET',\nheaders: {\n  'Content-Type': 'application/json',\n  'Authorization': 'Bearer token'\n},\nbody: {\n  "accountNumber": "1234567890",\n  "bankCode": "058"\n}`
                }
            </pre>
        </div>
    )
}

export default EndpointRequest