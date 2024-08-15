import React from 'react';
import { RightSide } from '../styled';

const RightSidebar = () => (
  <RightSide>
    <div className="search-bar">
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <g>
          <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
        </g>
      </svg>
      <input className="search" placeholder="Ara" />
    </div>
    <div className="trends">
      <header className="trends-header">
        <h2 style={{ fontSize: '20px' }}>
          <span>İlgini çekebilecek gündemler</span>
          <div></div>
        </h2>
      </header>
      <div className="trends-items">
        <div className="trends-item">
          <div>
            <span>Politika Gündemler</span>
            <div>
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <g>
                  <circle cx="5" cy="12" r="2"></circle>
                  <circle cx="12" cy="12" r="2"></circle>
                  <circle cx="19" cy="12" r="2"></circle>
                </g>
              </svg>
            </div>
          </div>
          <strong className="hashtag">#Türkiye</strong>
          <span>42,2 B Tweet</span>
        </div>
        {/* Diğer trends-item'lar burada */}
      </div>
    </div>
  </RightSide>
);

export default RightSidebar;
