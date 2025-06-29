import React from 'react'
import './routes.css'
import { useParams } from 'react-router';
import { Tabs } from "@chakra-ui/react"

import SideBar from '../components/SideBar.jsx'
import EndpointInfo from '../components/endpoint/EndpointInfo.jsx';


const EndpointPage = () => {
    const { endpoint } = useParams();
  return (
    <div className='page-container'>
        <SideBar />
        <Tabs.Root defaultValue={'fcmb'} variant='enclosed' lazyMount unmountOnExit className='endpoint-tabs'>
            <Tabs.List className='tabs-list'>
                <Tabs.Trigger value='fcmb' paddingX={10} paddingY={5}>
                    FCMB
                </Tabs.Trigger>
                <Tabs.Trigger value='access' paddingX={10} paddingY={5}>
                    Access
                </Tabs.Trigger>
                <Tabs.Trigger value='sterling' paddingX={10} paddingY={5}>
                    Sterling
                </Tabs.Trigger>
                <Tabs.Trigger value='gtbank' paddingX={10} paddingY={5}>
                    GT Bank
                </Tabs.Trigger>
                <Tabs.Indicator rounded="l2" />
            </Tabs.List>

            <Tabs.Content value='fcmb'>
                <EndpointInfo/>
            </Tabs.Content>
            <Tabs.Content value='access'>
                <EndpointInfo/>
            </Tabs.Content>
            <Tabs.Content value='sterling'>
                <div className='endpoint-page-content'>
                    <div className='endpoint-info'>
                        <h1>Endpoint Details</h1>
                        <p>Endpoint: {endpoint}</p>
                        <p>Details specific to Sterling will be displayed here.</p>
                    </div>
                    <div className='endpoint-stats'>
                        <h2>Endpoint Statistics</h2>
                        <p>Statistics related to the endpoint will be displayed here.</p>
                    </div>
                </div>
            </Tabs.Content>
            <Tabs.Content value='gtbank'>
                <div className='endpoint-page-content'>
                    <div className='endpoint-info'>
                        <h1>Endpoint Details</h1>
                        <p>Endpoint: {endpoint}</p>
                        <p>Details specific to GT Bank will be displayed here.</p>
                    </div>
                    <div className='endpoint-stats'>
                        <h2>Endpoint Statistics</h2>
                        <p>Statistics related to the endpoint will be displayed here.</p>
                    </div>
                </div>
            </Tabs.Content>
        </Tabs.Root>
    </div>
  )
}

export default EndpointPage