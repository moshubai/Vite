import { proxy, useSnapshot } from 'valtio';

const getUuid = () => {
  return Date.now();
};

export const baseList = () => {
  const uuid = Date.now();
  return { active: uuid, label: 'New Chat', history: [{ uuid, data: [] }], chat: [], network: true };
};

const state = proxy({
  isChatLoading: false,
  chatGptList: [],
  uuid: getUuid(),

  addChatItemByUuid(uuid, chat) {
    let isHave = state.getChatListByUuid(uuid);
    if (isHave) {
      isHave.history.push(chat);
    } else {
      state.chatGptList.push({
        uuid,
        label: 'New Chat',
        history: [chat],
      });
    }
    console.log(state);

    // if (!uuid || uuid === 0) {
    //   if (this.history.length === 0) {
    //     const uuid = Date.now();
    //     this.history.push({ uuid, title: chat.text, isEdit: false });
    //     this.chat.push({ uuid, data: [chat] });
    //     this.active = uuid;
    //     this.recordState();
    //   } else {
    //     this.chat[0].data.push(chat);
    //     if (this.history[0].title === 'New Chat') this.history[0].title = chat.text;
    //     this.recordState();
    //   }
    // }

    // const index = this.chat.findIndex((item) => item.uuid === uuid);
    // if (index !== -1) {
    //   this.chat[index].data.push(chat);
    //   if (this.history[index].title === 'New Chat') this.history[index].title = chat.text;
    //   this.recordState();
    // }
  },
  updateChatItemByUuid(uuid, index, chat) {},

  getChatListByUuid(uuid, index) {
    return state.chatGptList.find((item) => item.uuid === uuid);
  },

  getChatByUuid(uuid) {},

  reset() {},
});

export const chatListData = state;

export const storeChatList = () => useSnapshot(chatListData);
