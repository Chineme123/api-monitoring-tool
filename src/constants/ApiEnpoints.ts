export const API_ENDPOINTS = {
    AccountEnquiryController: ['/AccountEnquiry/RetrieveAccountDetails', '/AccountEnquiry/ProcessBatchAccountValidation'],
    BiometricController: ['/Biometric/ValidateBiometric', '/Biometric/ValidateBiometricWithBvn'],
    CVMController: ['/CVM/ValidateCustomerBvn', '/CVM/CreateCustomerAccount'],
    FEPController: ['/FEP/ValidatePayment', '/FEP/ValidateRefund'],
};

export const API_ENDPOINTS_check = [
    {
        endpoint: '/AccountEnquiry/RetrieveAccountDetails',
        lastChecked: '2024-06-01 12:57:00',
        status: 'active',
        lastResponseTimeMs: 120,
        currentResponseTime: 115
    },
    {
        endpoint: '/AccountEnquiry/ProcessBatchAccountValidation',
        lastChecked: '2024-06-01 12:57:00',
        status: 'active',
        lastResponseTimeMs: 120,
        currentResponseTime: 115
    },
    {
        endpoint: '/Biometric/ValidateBiometric',
        lastChecked: '2024-06-01 12:57:00',
        status: 'active',
        lastResponseTimeMs: 200,
        currentResponseTime: 190
    },
    {
        endpoint: '/Biometric/ValidateBiometricWithBvn',
        lastChecked: '2024-06-01 12:57:00',
        status: 'active',
        lastResponseTimeMs: 200,
        currentResponseTime: 190
    },
    {
        endpoint: '/CVM/ValidateCustomerBvn',
        lastChecked: '2024-06-01 12:57:00',
        status: 'active',
        lastResponseTimeMs: 150,
        currentResponseTime: 145
    },
    {
        endpoint: '/CVM/CreateCustomerAccount',
        lastChecked: '2024-06-01 12:57:00',
        status: 'active',
        lastResponseTimeMs: 150,
        currentResponseTime: 145
    },
    {
        endpoint: '/FEP/ValidatePayment',
        lastChecked: '2024-06-01 12:57:00',
        status: 'active',
        lastResponseTimeMs: 180,
        currentResponseTime: 175
    },
    {
        endpoint: '/FEP/ValidateRefund',
        lastChecked: '2024-06-01 12:57:00',
        status: 'active',
        lastResponseTimeMs: 180,
        currentResponseTime: 175
    }
]
