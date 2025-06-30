import React from 'react'

const InvoiceCard = () => {
  const invoices = [
    {
      title: 'DSE-WDFS - PDC - LEVEL 1 - First Semester',
      total: '₦356,000.00',
      paid: '₦356,000.00',
      balance: '₦0.00',
      isPaidFull: true
    },
    {
      title: 'DSE-WDFS - PDC - LEVEL 3 - Second Semester',
      total: '₦0.00',
      paid: '₦0.00',
      balance: '₦0.00',
      isPaidFull: true
    }
  ]

  return (
    <div
      className='card border-0 bg-white'
      style={{
        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05)',
        height: '63vh' // ✅ make it fill parent height
      }}
    >
      <div className='card-body p-3'>
        {/* Header */}
        <div className='d-flex justify-content-between align-items-center mb-3'>
          <div className='d-flex align-items-center'>
            <i
              className='bi-receipt text-primary me-2'
              style={{ fontSize: '1.2rem' }}
            ></i>
            <h6
              style={{
                fontSize: '16px',
                fontWeight: '600',
                color: '#212529',
                margin: '0'
              }}
            >
              Invoice(s)
            </h6>
          </div>
          <a
            href='#'
            style={{
              fontSize: '13px',
              fontWeight: '400',
              color: '#007bff',
              textDecoration: 'none'
            }}
          >
            View All
          </a>
        </div>

        {/* Invoice List */}
        <div>
          {invoices.map((invoice, index) => (
            <div
              key={index}
              className={`${index > 0 ? 'border-top pt-3 mt-3' : ''}`}
            >
              {/* Invoice Title */}
              <div
                style={{
                  fontSize: '14px',
                  fontWeight: '500',
                  color: '#212529',
                  marginBottom: '8px'
                }}
              >
                {invoice.title}
              </div>

              {/* Payment Details */}
              <div className='d-flex flex-column align-items-start'>
                <div
                  style={{
                    fontSize: '16px',
                    fontWeight: '600',
                    color: '#212529'
                  }}
                >
                  {invoice.total}
                </div>
                <div className='d-flex gap-3'>
                  <span
                    style={{
                      fontSize: '13px',
                      fontWeight: '400',
                      color: 'rgba(33, 37, 41, 0.7)'
                    }}
                  >
                    Paid:{' '}
                    <span style={{ color: '#28a745', fontWeight: '500' }}>
                      {invoice.paid}
                    </span>
                  </span>
                  <span
                    style={{
                      fontSize: '13px',
                      fontWeight: '400',
                      color: 'rgba(33, 37, 41, 0.7)'
                    }}
                  >
                    Bal:{' '}
                    <span
                      style={{
                        color:
                          invoice.balance === '₦0.00' ? '#28a745' : '#dc3545',
                        fontWeight: '500'
                      }}
                    >
                      {invoice.balance}
                    </span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default InvoiceCard
