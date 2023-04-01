import { Avatar } from 'antd-mobile';
import React, { memo, useEffect, useRef } from 'react';

import style from '../index.module.less';

const demoAvatarImages = [
  'https://images.unsplash.com/photo-1548532928-b34e3be62fc6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ',
];
const ChatList = (props) => {
  const { chatList } = props;
  // 用于操作聊天列表元素的引用
  const chatListRef = useRef(null);

  useEffect(() => {
    const current = chatListRef.current;
    window.scrollTo({ top: current.scrollHeight });
  }, [chatList]);

  return (
    <ul className={style.chatList} ref={chatListRef}>
      {chatList.map((item) => {
        return (
          <li className={`${item.inversion ? style.chatRight : style.chatLeft}`} key={item.dateTime}>
            {item.inversion ? (
              <>
                <span className={style.content}>
                  <span>
                    {item.dateTime} {item.userName}
                  </span>
                  <span>{item.text}</span>
                </span>
                <span className={style.header}>
                  <Avatar src={demoAvatarImages[0]} />
                </span>
              </>
            ) : (
              <>
                <span className={style.header}>
                  <Avatar src={demoAvatarImages[0]} />
                </span>
                <span className={style.content}>
                  <span>
                    {item.userName} {item.dateTime}
                  </span>
                  <span>{item.text}</span>
                </span>
              </>
            )}
          </li>
        );
      })}

      {/* <li className={style.chatRight}>
        <span className={style.content}>
          <span>小A</span>
          <span>头像的图片地址头像的图片地址头像的图片地址头像的图片地址头像的图片地址头像的图片地址</span>
        </span>
        <span className={style.header}>
          <Avatar src={demoAvatarImages[0]} />
        </span>
      </li>
      <li className={style.chatLeft}>
        <span className={style.header}>
          <Avatar src={demoAvatarImages[0]} />
        </span>
        <span className={style.content}>
          <span>小A</span>
          <span>头像的图片地址头像的图片地址头像的图片地址头像的图片地址头像的图片地址头像的图片地址</span>
        </span>
      </li>
      <li className={style.chatRight}>
        <span className={style.content}>
          <span>小A</span>
          <span>头像的图片地址头像的图片地址头像的图片地址头像的图片地址头像的图片地址头像的图片地址</span>
        </span>
        <span className={style.header}>
          <Avatar src={demoAvatarImages[0]} />
        </span>
      </li>
      <li className={style.chatLeft}>
        <span className={style.header}>
          <Avatar src={demoAvatarImages[0]} />
        </span>
        <span className={style.content}>
          <span>小A</span>
          <span>头像的图片地址头像的图片地址头像的图片地址头像的图片地址头像的图片地址头像的图片地址</span>
        </span>
      </li>
      <li className={style.chatRight}>
        <span className={style.content}>
          <span>小A</span>
          <span>头像的图片地址头像的图片地址头像的图片地址头像的图片地址头像的图片地址头像的图片地址</span>
        </span>
        <span className={style.header}>
          <Avatar src={demoAvatarImages[0]} />
        </span>
      </li>
      <li className={style.chatLeft}>
        <span className={style.header}>
          <Avatar src={demoAvatarImages[0]} />
        </span>
        <span className={style.content}>
          <span>小A</span>
          <span>头像的图片地址头像的图片地址头像的图片地址头像的图片地址头像的图片地址头像的图片地址</span>
        </span>
      </li>
      <li className={style.chatRight}>
        <span className={style.content}>
          <span>小A</span>
          <span>头像的图片地址头像的图片地址头像的图片地址头像的图片地址头像的图片地址头像的图片地址</span>
        </span>
        <span className={style.header}>
          <Avatar src={demoAvatarImages[0]} />
        </span>
      </li>
      <li className={style.chatLeft}>
        <span className={style.header}>
          <Avatar src={demoAvatarImages[0]} />
        </span>
        <span className={style.content}>
          <span>小A</span>
          <span>头像的图片地址头像的图片地址头像的图片地址头像的图片地址头像的图片地址头像的图片地址</span>
        </span>
      </li>
      <li className={style.chatRight}>
        <span className={style.content}>
          <span>小A</span>
          <span>头像的图片地址头像的图片地址头像的图片地址头像的图片地址头像的图片地址头像的图片地址</span>
        </span>
        <span className={style.header}>
          <Avatar src={demoAvatarImages[0]} />
        </span>
      </li>
      <li className={style.chatLeft}>
        <span className={style.header}>
          <Avatar src={demoAvatarImages[0]} />
        </span>
        <span className={style.content}>
          <span>小A</span>
          <span>头像的图片地址头像的图片地址头像的图片地址头像的图片地址头像的图片地址头像的图片地址</span>
        </span>
      </li>
      <li className={style.chatRight}>
        <span className={style.content}>
          <span>小A</span>
          <span>头像的图片地址头像的图片地址头像的图片地址头像的图片地址头像的图片地址头像的图片地址</span>
        </span>
        <span className={style.header}>
          <Avatar src={demoAvatarImages[0]} />
        </span>
      </li>
      <li className={style.chatLeft}>
        <span className={style.header}>
          <Avatar src={demoAvatarImages[0]} />
        </span>
        <span className={style.content}>
          <span>小A</span>
          <span>头像的图片地址头像的图片地址头像的图片地址头像的图片地址头像的图片地址头像的图片地址</span>
        </span>
      </li>
      <li className={style.chatRight}>
        <span className={style.content}>
          <span>小A</span>
          <span>头像的图片地址头像的图片地址头像的图片地址头像的图片地址头像的图片地址头像的图片地址</span>
        </span>
        <span className={style.header}>
          <Avatar src={demoAvatarImages[0]} />
        </span>
      </li>
      <li className={style.chatLeft}>
        <span className={style.header}>
          <Avatar src={demoAvatarImages[0]} />
        </span>
        <span className={style.content}>
          <span>小A</span>
          <span>头像的图片地址头像的图片地址头像的图片地址头像的图片地址头像的图片地址头像的图片地址</span>
        </span>
      </li>
      <li className={style.chatRight}>
        <span className={style.content}>
          <span>小A</span>
          <span>
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
          </span>
        </span>
        <span className={style.header}>
          <Avatar src={demoAvatarImages[0]} />
        </span>
      </li>
      <li className={style.chatLeft}>
        <span className={style.header}>
          <Avatar src={demoAvatarImages[0]} />
        </span>
        <span className={style.content}>
          <span>小A</span>
          <span>头像的图片地址头像的图片地址头像的图片地址头像的图片地址头像的图片地址头像的图片地址</span>
        </span>
      </li>
      <li className={style.chatRight}>
        <span className={style.content}>
          <span>小A</span>
          <span>头像的图片地址头像的图片地址头像的图片地址头像的图片地址头像的图片地址头像的图片地址</span>
        </span>
        <span className={style.header}>
          <Avatar src={demoAvatarImages[0]} />
        </span>
      </li> */}
    </ul>
  );
};

export default memo(ChatList);
