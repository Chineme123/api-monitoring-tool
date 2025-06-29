import React from 'react'
import { Bar } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend    
} from 'chart.js'

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
)

import { sampleApiData } from '../../constants/SampleData.ts'

const BarChart = () => {
    const apiNames = sampleApiData.map(api => api.apiName)
    const responseTimes = sampleApiData.map(api => api.responseTime)
  return (
    <Bar
        data={{
          labels: apiNames,
          datasets: [
            {
              label: 'Response Time',
              data: responseTimes,
              backgroundColor: 'rgba(75, 192, 192, 0.2)',
              borderColor: 'rgba(75, 192, 192, 1)',
              borderWidth: 1
            },
          ]
        }}
        options={{
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }}
      />
  )
}

export default BarChart