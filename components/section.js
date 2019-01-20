import React from 'react';

export default ({ children }) => {
  return (
    <div className="root">
      <div className="wrapper">
        {children}
      </div>

      <style jsx>{`
        .wrapper {
          margin: 60px 0;
        }
      `}</style>
    </div>
  )
}
