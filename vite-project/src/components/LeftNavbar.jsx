// src/components/LeftNavbar.jsx
import React from 'react';
import styled from 'styled-components';
import { TweetButton } from '../styled';

const Nav = styled.nav`
  width: 245px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const NavItem = styled.div`
  padding: 12px;
  a {
    display: flex;
    padding: 4px 0;
    div {
      display: flex;
      padding: 12px;
      align-items: center;
      border-radius: 9999px;
      &:hover {
        background-color: rgb(29, 29, 29);
      }
    }
    span {
      font-size: 20px;
      margin-left: 20px;
      margin-right: 16px;
    }
  }
`;

const ProfileButton = styled.div`
  display: flex;
  margin: 12px 0;
  padding: 12px;
  cursor: pointer;
  width: calc(100% + 12px);
  border-radius: 9999px;
  &:hover {
    background-color: var(--shadow-color);
  }
  img {
    width: 40px;
    height: 40px;
  }
  strong {
    display: flex;
    align-items: center;
  }
`;

const IconContainer = styled.div`
  padding: 12px;
`;

const NavLink = styled.div`
  display: flex;
  padding: 12px;
  align-items: center;
  border-radius: 9999px;
  &:hover {
    background-color: rgb(29, 29, 29);
  }
`;

const LeftNavbar = () => (
  <Nav>
    <div>
      <IconContainer>
        <svg viewBox="0 0 24 24" aria-hidden="true" className="icon">
          <g>
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
          </g>
        </svg>
      </IconContainer>
      <NavItem>
        <a href="index.html">
          <NavLink>
            <svg viewBox="0 0 24 24" className="icon">
              <g>
                <path d="M22.58 7.35L12.475 1.897c-.297-.16-.654-.16-.95 0L1.425 7.35c-.486.264-.667.87-.405 1.356.18.335.525.525.88.525.16 0 .324-.038.475-.12l.734-.396 1.59 11.25c.216 1.214 1.31 2.062 2.66 2.062h9.282c1.35 0 2.444-.848 2.662-2.088l1.588-11.225.737.398c.485.263 1.092.082 1.354-.404.263-.486.08-1.093-.404-1.355zM12 15.435c-1.795 0-3.25-1.455-3.25-3.25s1.455-3.25 3.25-3.25 3.25 1.455 3.25 3.25-1.455 3.25-3.25 3.25z"></path>
              </g>
            </svg>
            <span>Anasayfa</span>
          </NavLink>
        </a>
      </NavItem>
      <NavItem>
        <a href="">
          <NavLink>
            <img src="../images/kesfet.png" alt="Kesfet" />
            <span>Keşfet</span>
          </NavLink>
        </a>
      </NavItem>
      <NavItem>
        <a href="">
          <NavLink>
            <img src="../images/bildirim.png" alt="Bildirim" />
            <span>Bildirimler</span>
          </NavLink>
        </a>
      </NavItem>
      <NavItem>
        <a href="">
          <NavLink>
            <img src="../images/mesaj.png" alt="Mesaj" />
            <span>Mesajlar</span>
          </NavLink>
        </a>
      </NavItem>
      <NavItem>
        <a href="">
          <NavLink>
            <img src="../images/yerisaretleri.png" alt="Yer İsaretleri" />
            <span>Yer İşaretleri</span>
          </NavLink>
        </a>
      </NavItem>
      <NavItem>
        <a href="">
          <NavLink>
            <img src="../images/liste.png" alt="Listeler" />
            <span>Listeler</span>
          </NavLink>
        </a>
      </NavItem>
      <NavItem>
        <a href="profile.html">
          <NavLink>
            <img src="../images/profil.png" alt="Profil" />
            <span>Profil</span>
          </NavLink>
        </a>
      </NavItem>
      <NavItem>
        <a href="">
          <NavLink>
            <img src="../images/dahafazlaa.png" alt="Daha Fazla" />
            <span>Daha Fazla</span>
          </NavLink>
        </a>
      </NavItem>
    </div>
    <TweetButton>Gönder</TweetButton>
    <ProfileButton>
      <div className="left-column">
        <img
          className="profile-image"
          src="https://pbs.twimg.com/profile_images/1549504994407235584/V2rNGl5E_400x400.jpg"
          alt="Profile"
        />
      </div>
      <div className="right-column">
        <div>
          <strong>
            <span>Semih Yü...</span>
            <img style={{ width: '20px', height: '20px' }} src="../images/kilit.png" alt="Kilit" />
          </strong>
          <span className="tag">@Semihycl</span>
        </div>
        <div className="dropdown-container">
          <svg viewBox="0 0 24 24" aria-hidden="true" className="icon dropdown-toggle">
            <g>
              <circle cx="5" cy="12" r="2"></circle>
              <circle cx="12" cy="12" r="2"></circle>
              <circle cx="19" cy="12" r="2"></circle>
            </g>
          </svg>
          <div className="dropdown-menu">
            <a href="login.html">Çıkış Yap</a>
          </div>
        </div>
      </div>
    </ProfileButton>
  </Nav>
);

export default LeftNavbar;
