import React from 'react'
import './endpoint.css'
import { Stat } from "@chakra-ui/react"
import { SimpleGrid } from "@chakra-ui/react"

const EndpointStats = () => {
  return (
    <SimpleGrid columns={2} gap={10}>
        <Stat.Root display={'flex'} flexDirection='column' alignItems='center' justifyContent='center'>
            <Stat.Label>Success Rate</Stat.Label>
            <Stat.ValueText>95%</Stat.ValueText>
        </Stat.Root>
        <Stat.Root display={'flex'} flexDirection='column' alignItems='center' justifyContent='center'>
            <Stat.Label>Average Response Time</Stat.Label>
            <Stat.ValueText>200ms</Stat.ValueText>
        </Stat.Root>
        <Stat.Root display={'flex'} flexDirection='column' alignItems='center' justifyContent='center'>
            <Stat.Label>Error Rate</Stat.Label>
            <Stat.ValueText>5%</Stat.ValueText>
        </Stat.Root>
        <Stat.Root display={'flex'} flexDirection='column' alignItems='center' justifyContent='center'>
            <Stat.Label>Total Requests</Stat.Label>
            <Stat.ValueText>10,000</Stat.ValueText>
        </Stat.Root>
    </SimpleGrid>
  )
}

export default EndpointStats