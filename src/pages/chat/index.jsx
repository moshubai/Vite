import { chatgpt } from '@/api/openai';
import Nav from '@/components/PageNav/index.jsx';
import { useChat } from '@/hooks/useChat';
import { storeChatList } from '@/store';
import { TextArea } from 'antd-mobile';
import { AddCircleOutline } from 'antd-mobile-icons';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

// import { useProxy } from 'valtio';
import ChatList from './compl/ChatList';
import style from './index.module.less';

const ChatRoom = () => {
  const { uuid } = useParams();
  // const snapshot = useProxy(chatListData, { sync: true });
  const { getChatListByUuid } = storeChatList();

  //   聊天记录存储
  const [chatList, setChatList] = useState([]);
  const [chatMessage, setChatMessage] = useState('');
  const { addChat, getChatListByUuidIndex } = useChat();
  const chatGptList = getChatListByUuidIndex(+uuid);
  console.log(uuid, chatGptList);

  const textHandle = (text) => {
    console.log(text);
    setChatMessage(text);
  };
  useEffect(() => {}, [chatMessage]);
  const handleSend = async () => {
    addChat(+uuid, {
      userName: '路人',
      dateTime: new Date().toLocaleString(),
      text: chatMessage,
      inversion: true,
      error: false,
      conversationOptions: null,
      requestOptions: { prompt: chatMessage, options: null },
    });
    setTimeout(() => {
      // console.log(uuid, chatGptList);
      // const chatGptList = getChatListByUuid(+uuid)?.history;
      // console.log(uuid, chatGptList);
      // setChatList(chatGptList);
      setChatMessage('');
    }, 10);

    // let saveInfo = {
    //   userName: '行者',
    //   message: chatMessage,
    //   data: dayjs().format('YYYY-MM-DD HH:mm:ss'),
    //   getTime: dayjs().unix() + '',
    //   type: 0,
    // };
    // let chatListVal = chatList.concat([saveInfo]);
    // setChatList(chatListVal);
    try {
      let gptMessage = await chatgpt(chatMessage);
      console.log('gptMessagegptMessage', gptMessage); //log-xu
      if (gptMessage) {
        addChat(+uuid, {
          dateTime: new Date().toLocaleString(),
          userName: 'Chat GPT',
          text: gptMessage,
          loading: true,
          inversion: false,
          error: false,
          conversationOptions: null,
          requestOptions: { prompt: gptMessage, options: null },
        });
      }
    } catch (error) {}

    // console.log(gptMessage);
  };
  return (
    <div className={style.listBox}>
      <div className={style.pageNav}>
        <Nav title="欢迎体验" backArrow={false} />
      </div>

      <ChatList chatList={chatGptList || []} />
      <div className={style.footer}>
        <div className={style.left}>
          <AddCircleOutline fontSize={24} color={'#006244'} />
        </div>
        <div className={style.chatInput}>
          <TextArea
            rows={1}
            value={chatMessage}
            autoSize={{ minRows: 1, maxRows: 5 }}
            maxLength={500}
            onChange={textHandle}
          />
        </div>
        <div className={style.right} onClick={() => handleSend()}>
          <span>发送</span>
        </div>

        {/*  */}
      </div>
    </div>
  );
};

export default ChatRoom;
