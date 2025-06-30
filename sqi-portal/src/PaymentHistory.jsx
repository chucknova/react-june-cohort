import React from 'react';
import './PaymentHistory.css';

const payments = [
  {
    invoice: 'DSE-WDFS - PDC - LEVEL 1 - FIRST SEMESTER',
    amountToBePaid: '₦356,000.00',
    amountPaid: '₦356,000.00',
    balance: '₦0.00',
    date: '2022-10-31',
    status: 'Paid'
  },
  {
    invoice: 'DSE-WDFS - PDC - LEVEL 3 - SECOND SEMESTER',
    amountToBePaid: '₦0.00',
    amountPaid: '₦0.00',
    balance: '₦0.00',
    date: '2025-06-16',
    status: 'Pending'
  }
];

const PaymentHistory = () => {
  return (
    <div className="payment-history bg-white p-4 rounded shadow">
      <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap">
        <h5 className="fw-bold mb-0">Payment History</h5>
        <span className="text-muted small">Showing last {payments.length} payments</span>
      </div>

      <div className="table-responsive">
        <table className="table modern-table align-middle text-nowrap">
          <thead>
            <tr>
              <th>Invoice</th>
              <th>Amount to Pay</th>
              <th>Amount Paid</th>
              <th>Balance</th>
              <th>Date</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {payments.map((item, idx) => (
              <tr key={idx}>
                <td>{item.invoice}</td>
                <td>{item.amountToBePaid}</td>
                <td>{item.amountPaid}</td>
                <td>{item.balance}</td>
                <td>{item.date}</td>
                <td>
                  <span className={`badge ${item.status === 'Paid' ? 'bg-success' : 'bg-warning text-dark'}`}>
                    {item.status}
                  </span>
                </td>
                <td>
                  <button className="btn btn-sm view-btn">View</button>
                </td>
              </tr>
            ))}
            {payments.length === 0 && (
              <tr>
                <td colSpan="7" className="text-muted text-center">No payment history available</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentHistory;