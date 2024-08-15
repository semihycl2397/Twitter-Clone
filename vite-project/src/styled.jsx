// src/styled.js
import styled from 'styled-components';

export const Container = styled.main`
  display: grid;
  grid-template-columns: 243px auto 350px;
  margin: 0 auto;
  max-width: 1200px;
`;

export const LeftSide = styled.aside`
  position: fixed;
  height: 100vh;
  width: 240px;
  padding: 0 12px 0 12px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const RightSide = styled.aside`
  padding: 12px 0 64px 0;
  width: 350px;
  margin-left: 30px;
`;

export const Content = styled.section`
  border: 1px solid var(--border-color);
  border-top: none;
  border-bottom: none;
  padding: 15px;
`;

export const TweetButton = styled.button`
  font-family: var(--main-font);
  font-size: 16px;
  width: 90%;
  height: 46px;
  font-weight: 700;
  border: none;
  background-color: var(--main-color);
  border-radius: 30px;
  color: inherit;
`;

export const ProfileContainer = styled.div`
  margin-top: 20px;
  background-color: #000;
  border: 1px solid var(--border-color);
  border-radius: 10px;
  padding: 20px;
  text-align: center;
  position: relative;
`;

export const ProfileHeader = styled.div`
  position: relative;
  width: 100%;
  height: 100px;
  background-color: #000;
`;

export const ProfilePicture = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  border: 5px solid #000;
  position: absolute;
  top: -75px;
  left: 20px;
  background-color: white;
`;

export const EditProfileButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  padding: 10px 20px;
  background-color: #000;
  font-weight: bold;
  color: white;
  border: 1px solid #6f6f6f;
  border-radius: 20px;
  cursor: pointer;

  &:hover {
    background-color: #333;
  }
`;

export const ProfileInfo = styled.div`
  margin-top: 20px;
  color: #888;
  text-align: left;
  padding-left: 20px;

  h2 {
    font-size: 24px;
    color: #fff;
  }

  .username {
    color: #888;
    font-size: 16px;
    margin-bottom: 10px;
  }

  .bio {
    font-size: 16px;
    margin-bottom: 10px;
    color: #fff;
  }

  a {
    color: var(--main-color);
    text-decoration: none;
    font-size: 16px;

    &:hover {
      text-decoration: underline;
    }
  }

  .location,
  .birth-date,
  .join-date {
    display: inline-block;
    margin-right: 15px;
    color: #888;
    font-size: 14px;
  }
`;

export const StatsContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-top: 20px;
  padding-left: 20px;
`;

export const Stat = styled.div`
  margin: 0 15px;
  text-align: center;

  .number {
    font-weight: bold;
    font-size: 18px;
    color: #fff;
  }

  .label {
    color: #888;
    font-size: 14px;
  }
`;

export const PostsMenu = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
  border-top: 1px solid var(--border-color);
  border-bottom: 1px solid var(--border-color);
  padding: 10px 0;

  a {
    color: #888;
    text-decoration: none;
    font-size: 16px;
    padding: 10px;
    border-radius: 10px;

    &:hover {
      border: 1px solid #888;
    }

    &.active {
      color: #fff;
      font-weight: bold;
      border: none;
    }
  }
`;

export const PostContent = styled.article`
  .post-header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
  }

  .post-header > div {
    display: flex;
    align-items: center;
  }

  .tag,
  .time,
  .dot,
  .details svg {
    color: rgb(136, 153, 166);
    fill: rgb(136, 153, 166);
  }

  .dot {
    margin: 0 4px;
  }

  .details {
    cursor: pointer;
    padding: 6px;
    border-radius: 100%;
    justify-content: center !important;

    &:hover {
      background-color: var(--shadow-color);
    }
  }

  p {
    margin-bottom: 10px;
  }

  .details:hover svg {
    fill: var(--main-color);
  }

  img {
    width: 100%;
    border-radius: 25px;
    border: 1px solid var(--border-color);
    margin-top: 10px;
  }

  .bottom-row {
    max-width: 425px;
    margin-top: 12px;
    justify-content: space-between;
    display: flex;
    align-items: center;
    color: rgb(136, 153, 166);
    cursor: pointer;

    > div {
      display: flex;
      align-items: center;
      margin: -8px;
    }

    > div > div {
      border-radius: 9999px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    > div:hover > div {
      background-color: var(--shadow-color);
    }

    span {
      font-size: 13px;
      padding: 0 12px;
      line-height: 20px;
    }

    svg {
      margin: 8px;
      width: 1.25em;
      height: 1.25em;
    }

    svg,
    span {
      fill: rgb(136, 153, 166);
      color: inherit;
      font-family: inherit;
    }

    > div:nth-child(2):hover > div {
      background-color: rgba(23, 191, 99, 0.2);
    }

    > div:nth-child(2):hover > div svg,
    > div:nth-child(2):hover > span {
      color: rgb(23, 191, 99);
      fill: currentColor;
    }

    > div:nth-child(3):hover > div {
      background-color: rgba(224, 36, 94, 0.2);
    }

    > div:nth-child(3):hover > div svg,
    > div:nth-child(3):hover > span {
      color: rgb(224, 36, 94);
      fill: currentColor;
    }
  }
`;
