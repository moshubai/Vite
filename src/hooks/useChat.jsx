import { storeChatList } from '@/store';

export function useChat() {
  const { addChatItemByUuid, updateChatItemByUuid, getChatListByUuid, chatGptList } = storeChatList();

  const getChatListByUuidIndex = (uuid, index) => {
    return chatGptList.find((item) => item.uuid === uuid)?.history || [];
  };

  const addChat = (uuid, chat) => {
    return addChatItemByUuid(uuid, chat);
  };

  const updateChat = (uuid, index, chat) => {
    return updateChatItemByUuid(uuid, index, chat);
  };

  //   const updateChatSome = (uuid, index, chat) => {
  //     return updateChatSomeByUuid(uuid, index, chat)
  //   }

  return {
    addChat,
    updateChat,
    // updateChatSome,
    getChatListByUuidIndex,
  };
}
