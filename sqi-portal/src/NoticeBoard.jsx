import React from 'react'

const NoticeBoard = () => {
  return (
    <div
      className='card border-0 bg-white'
      style={{
        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05)',
        height: '32vh' // ✅ make it fill parent height
      }}
    >
      <div className='card-body p-3'>
        {/* Header */}
        <div className='d-flex align-items-center mb-3'>
          <h6 className="mb-3 fw-semibold">Notice Board</h6>
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
              className='bi bi-tv lg text-muted mb-3'
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
              Notice Board is currently Empty
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NoticeBoard
