import React from 'react'

const PerformanceCard = () => {
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
        <div className='d-flex align-items-center mb-3'>
          <i
            className='bi-graph-up text-primary me-2'
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
            Performance
          </h6>
        </div>

        {/* Empty State */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%' // or '100vh' if full screen
          }}
        >
          <div className='text-center py-4 bg'>
            <i
              className='bi-clipboard-x text-muted mb-3'
              style={{ fontSize: '2.5rem' }}
            ></i>
            <p
              style={{
                fontSize: '14px',
                fontWeight: '400',
                color: 'rgba(33, 37, 41, 0.7)',
                margin: '0',
                lineHeight: '1.4'
              }}
            >
              You currently do not have any approved result
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PerformanceCard
