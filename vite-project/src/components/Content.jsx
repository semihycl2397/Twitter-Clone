// src/components/Content.jsx
import React from 'react';
import { Content, ProfileContainer, ProfileHeader, ProfilePicture, EditProfileButton, ProfileInfo, StatsContainer, Stat, PostsMenu, PostContent } from '../styled';

const Profile = () => (
  <ProfileContainer>
    <img className="cover-image" src="https://pbs.twimg.com/profile_banners/1173663757073100802/1618120782/1080x360" alt="Kapak Resmi" />
    <ProfileHeader>
      <ProfilePicture src="https://pbs.twimg.com/profile_images/1549504994407235584/V2rNGl5E_400x400.jpg" alt="Profil Resmi" />
      <EditProfileButton>Profili düzenle</EditProfileButton>
    </ProfileHeader>
    <ProfileInfo>
      <h2>
        Semihh <img style={{ width: '20px', height: '20px' }} src="../images/kilit.png" alt="Kilit" />
      </h2>
      <span className="username">@ssemhycl07</span>
      <p className="bio">Software | Football Player</p>
      <a href="https://instagram.com/semihycl07" target="_blank" rel="noopener noreferrer">instagram.com/semihycl07</a>
      <p className="location">Elazığ, Türkiye</p>
      <p className="birth-date">Doğum Tarihi: 9 Mart 2002</p>
      <p className="join-date">Eylül 2019 tarihinde katıldı</p>
    </ProfileInfo>
    <StatsContainer>
      <Stat>
        <span className="number">145</span>
        <span className="label">Takip Edilen</span>
      </Stat>
      <Stat>
        <span className="number">144</span>
        <span className="label">Takipçi</span>
      </Stat>
    </StatsContainer>
    <PostsMenu>
      <a href="#" className="active">Gönderiler</a>
      <a href="#">Yanıtlar</a>
      <a href="#">Öne Çıkanlar</a>
      <a href="#">Makaleler</a>
      <a href="#">Medya</a>
      <a href="#">Beğeni</a>
    </PostsMenu>
  </ProfileContainer>
);

const TweetInput = () => (
  <div className="tweet">
    <div className="left-column">
      <img className="profile-image" src="https://pbs.twimg.com/profile_images/1549504994407235584/V2rNGl5E_400x400.jpg" alt="Profile" />
    </div>
    <div className="right-column">
      <form className="top-row">
        <input placeholder="Neler oluyor?" />
      </form>
      <div className="bottom-row">
        <div className="buttons">
          <div><img src="../images/picturefile.png" alt="Resim" /></div>
          <div><img src="../images/gıffile.png" alt="Gif" /></div>
          <div><img src="../images/question.png" alt="Soru" /></div>
          <div><img src="../images/emojii.png" alt="Emoji" /></div>
          <div><img src="../images/plann.png" alt="Plan" /></div>
        </div>
        <button className="tweet-btn">Gönder</button>
      </div>
    </div>
  </div>
);

const Post = ({ profileImage, name, username, time, content, image, comments, retweets, likes, shares }) => (
  <div className="post">
    <div className="left-column">
      <img className="profile-image" src={profileImage} alt="Profile" />
    </div>
    <div className="right-column">
      <PostContent>
        <header className="post-header">
          <div>
            <strong><span>{name}</span></strong>
            <span className="tag">{username}</span>
            <span className="dot">.</span>
            <span className="time">{time}</span>
          </div>
          <div className="details">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <g>
                <circle cx="5" cy="12" r="2"></circle>
                <circle cx="12" cy="12" r="2"></circle>
                <circle cx="19" cy="12" r="2"></circle>
              </g>
            </svg>
          </div>
        </header>
        <p>{content}</p>
        {image && <img src={image} alt="Post" />}
      </PostContent>
      <div className="bottom-row">
        <div><div><svg viewBox="0 0 24 24" aria-hidden="true"><g><path d="M14.046 2.242l-4.148-.01h-.002c-4.374 0-7.8 3.427-7.8 7.802 0 4.098 3.186 7.206 7.465 7.37v3.828c0 .108.044.286.12.403.142.225.384.347.632.347.138 0 .277-.038.402-.118.264-.168 6.473-4.14 8.088-5.506 1.902-1.61 3.04-3.97 3.043-6.312v-.017c-.006-4.367-3.43-7.787-7.8-7.788zm3.787 12.972c-1.134.96-4.862 3.405-6.772 4.643V16.67c0-.414-.335-.75-.75-.75h-.396c-3.66 0-6.318-2.476-6.318-5.886 0-3.534 2.768-6.302 6.3-6.302l4.147.01h.002c3.532 0 6.3 2.766 6.302 6.296-.003 1.91-.942 3.844-2.514 5.176z"></path></g></svg></div><span>{comments}</span></div>
        <div><div><svg viewBox="0 0 24 24" aria-hidden="true"><g><path d="M23.77 15.67c-.292-.293-.767-.293-1.06 0l-2.22 2.22V7.65c0-2.068-1.683-3.75-3.75-3.75h-5.85c-.414 0-.75.336-.75.75s.336.75.75.75h5.85c1.24 0 2.25 1.01 2.25 2.25v10.24l-2.22-2.22c-.293-.293-.768-.293-1.06 0s-.294.768 0 1.06l3.5 3.5c.145.147.337.22.53.22s.383-.072.53-.22l3.5-3.5c.294-.292.294-.767 0-1.06zm-10.66 3.28H7.26c-1.24 0-2.25-1.01-2.25-2.25V6.46l2.22 2.22c.148.147.34.22.532.22s.384-.073.53-.22c.293-.293.293-.768 0-1.06l-3.5-3.5c-.293-.294-.768-.294-1.06 0l-3.5 3.5c-.294.292-.294.767 0 1.06s.767.293 1.06 0l2.22-2.22V16.7c0 2.068 1.683 3.75 3.75 3.75h5.85c.414 0 .75-.336.75-.75s-.337-.75-.75-.75z"></path></g></svg></div><span>{retweets}</span></div>
        <div><div><svg viewBox="0 0 24 24" aria-hidden="true"><g><path d="M12 21.638h-.014C9.403 21.59 1.95 14.856 1.95 8.478c0-3.064 2.525-5.754 5.403-5.754 2.29 0 3.83 1.58 4.646 2.73.814-1.148 2.354-2.73 4.645-2.73 2.88 0 5.404 2.69 5.404 5.755 0 6.376-7.454 13.11-10.037 13.157H12zM7.354 4.225c-2.08 0-3.903 1.988-3.903 4.255 0 5.74 7.034 11.596 8.55 11.658 1.518-.062 8.55-5.917 8.55-11.658 0-2.267-1.823-4.255-3.903-4.255-2.528 0-3.94 2.936-3.952 2.965-.23.562-1.156.562-1.387 0-.014-.03-1.425-2.965-3.954-2.965z"></path></g></svg></div><span>{likes}</span></div>
        <div><div><svg viewBox="0 0 24 24" aria-hidden="true"><g><path d="M17.53 7.47l-5-5c-.293-.293-.768-.293-1.06 0l-5 5c-.294.293-.294.768 0 1.06s.767.294 1.06 0l3.72-3.72V15c0 .414.336.75.75.75s.75-.336.75-.75V4.81l3.72 3.72c.146.147.338.22.53.22s.384-.072.53-.22c.293-.293.293-.767 0-1.06z"></path><path d="M19.708 21.944H4.292C3.028 21.944 2 20.916 2 19.652V14c0-.414.336-.75.75-.75s.75.336.75.75v5.652c0 .437.355.792.792.792h15.416c.437 0 .792-.355.792-.792V14c0-.414.336-.75.75-.75s.75.336.75.75v5.652c0 1.264-1.028 2.292-2.292 2.292z"></path></g></svg></div></div>
      </div>
    </div>
  </div>
);

const ContentComponent = () => (
  <Content>
    <header className="content-header">
      <span>Ana Sayfa</span>
      <div>
        <img src="../images/yıldız.png" alt="Yıldız" />
      </div>
    </header>
    <TweetInput />
    <Post
      profileImage="https://pbs.twimg.com/profile_images/1549504994407235584/V2rNGl5E_400x400.jpg"
      name="Semih Yücel"
      username="@semihycl"
      time="9s"
      content="My Github Link: https://github.com/semihycl2397"
      image="https://repository-images.githubusercontent.com/124369770/d12e6800-b47a-11e9-85a3-5fe53e198d49"
      comments="165"
      retweets="32"
      likes="382"
      shares=""
    />
    <Post
      profileImage="https://pbs.twimg.com/profile_images/1549504994407235584/V2rNGl5E_400x400.jpg"
      name="Semih Yücel"
      username="@semihycl"
      time="9s"
      content="This clone is not responsive. Also there are shortcomings."
      image="https://www.ilkkimbuldu.com/wp-content/uploads/2017/01/twitter.jpg"
      comments="32"
      retweets="16"
      likes="212"
      shares=""
    />
    {/* Ek içeriklerinizi buraya ekleyebilirsiniz */}
  </Content>
);

export default ContentComponent;
