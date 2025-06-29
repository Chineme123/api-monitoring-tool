import React from 'react'

interface ApiStatusCardProps {
  apiName: string;
  status: 'up' | 'down';
  responseTime: number; // in milliseconds
  checkedAt: Date;
}

const ApiStatusCard = ({ apiName, status, responseTime, checkedAt }: ApiStatusCardProps) => {
  return (
    <div className='apiStatusCard'>
        <span>{apiName}</span>
        <span>{status}</span>
        <span>{responseTime} ms</span>
        <span>{checkedAt.toLocaleString()}</span>
    </div>
  )
}

export default ApiStatusCard