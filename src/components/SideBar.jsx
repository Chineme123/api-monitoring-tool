import React from 'react'
import { Drawer, Button, Menu, Portal, Box, Collapsible } from "@chakra-ui/react"
import './components.css'

import { API_ENDPOINTS } from '../constants/ApiEnpoints'

const SideBar = () => {
  const [active, setActive] = React.useState(false);

  return (
    <Drawer.Root open={true} placement="left">
      <Drawer.Content maxW={"255px"}>
        <div className='sidebar'>
          <div className='sidebar-header'>
            <h1>Pryme Middleware API Monitor</h1>
          </div>
          <div className='sidebar-menu'>
            <ul>
              <li>
                <a href="/">
                  <Button variant="ghost" width="100%" textAlign="left">
                    Dashboard
                  </Button>
                </a>
              </li>
              <li className='api-endpoints'>
                <Collapsible.Root>
                  <Collapsible.Trigger asChild>
                      <Button variant="ghost" width="100%" textAlign="left">
                          API Endpoints
                      </Button>
                  </Collapsible.Trigger>
                  <Collapsible.Content>
                    <Box className='submenu'>
                      <span className={`${active ? 'active' : ''}`} onClick={() => setActive(!active)}>
                        <Menu.Root positioning={{ placement: 'right' }}>
                          <Menu.Trigger>
                            Account Enquiry Controller
                          </Menu.Trigger>
                          <Portal>
                            <Menu.Positioner marginLeft={50} className='menu-positioner'>
                              <Menu.Content>
                                <div>
                                  {API_ENDPOINTS.AccountEnquiryController.map((endpoint) => (
                                    <Menu.Item key={endpoint}>
                                      <a href={`/api-monitoring/endpoints${endpoint}`}>{endpoint}</a>
                                    </Menu.Item>
                                  ))}
                                </div>
                              </Menu.Content>
                            </Menu.Positioner>
                          </Portal>
                        </Menu.Root>
                      </span>
                      <span className={`${active ? 'active' : ''}`} onClick={() => setActive(!active)}>
                        <Menu.Root positioning={{ placement: 'right' }}>
                          <Menu.Trigger>
                            Biometric Controller
                          </Menu.Trigger>
                          <Portal>
                            <Menu.Positioner marginLeft={50} className='menu-positioner'>
                              <Menu.Content>
                                <div>
                                  {API_ENDPOINTS.BiometricController.map((endpoint) => (
                                    <Menu.Item key={endpoint}>
                                      <a href={`/api-monitoring/endpoints${endpoint}`}>{endpoint}</a>
                                    </Menu.Item>
                                  ))}
                                </div>
                              </Menu.Content>
                            </Menu.Positioner>
                          </Portal>
                        </Menu.Root>
                      </span>
                      <span className={`${active ? 'active' : ''}`} onClick={() => setActive(!active)}>
                        <Menu.Root positioning={{ placement: 'right' }}>
                          <Menu.Trigger>
                            CVM Controller
                          </Menu.Trigger>
                          <Portal>
                            <Menu.Positioner marginLeft={50} className='menu-positioner'>
                              <Menu.Content>
                                <div>
                                  {API_ENDPOINTS.CVMController.map((endpoint) => (
                                    <Menu.Item key={endpoint}>
                                      <a href={`/api-monitoring/endpoints${endpoint}`}>{endpoint}</a>
                                    </Menu.Item>
                                  ))}
                                </div>
                              </Menu.Content>
                            </Menu.Positioner>
                          </Portal>
                        </Menu.Root>
                      </span>
                      <span className={`${active ? 'active' : ''}`} onClick={() => setActive(!active)}>
                        <Menu.Root positioning={{ placement: 'right' }}>
                          <Menu.Trigger>
                            FEP Controller
                          </Menu.Trigger>
                          <Portal>
                            <Menu.Positioner marginLeft={50} className='menu-positioner'>
                              <Menu.Content>
                                <div>
                                  {API_ENDPOINTS.FEPController.map((endpoint) => (
                                    <Menu.Item key={endpoint}>
                                      <a href={`/api-monitoring/endpoints${endpoint}`}>{endpoint}</a>
                                    </Menu.Item>
                                  ))}
                                </div>
                              </Menu.Content>
                            </Menu.Positioner>
                          </Portal>
                        </Menu.Root>
                      </span>
                    </Box>
                  </Collapsible.Content>
                </Collapsible.Root>
              </li>
              <li>
                <a href="/manual-check">
                  <Button variant="ghost" width="100%" textAlign="left">
                    Manual API Check
                  </Button>
                </a>
              </li>
              <li>
                <a href="/settings">
                  <Button variant="ghost" width="100%" textAlign="left">
                    Settings
                  </Button>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </Drawer.Content>
    </Drawer.Root>
  )
}

export default SideBar