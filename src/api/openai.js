import fs from 'fs';
import {
  ChatCompletionRequestMessageRoleEnum,
  Configuration,
  CreateImageRequestResponseFormatEnum,
  CreateImageRequestSizeEnum,
  OpenAIApi,
} from 'openai';

const configuration = new Configuration({
  apiKey: import.meta.env.VITE_API_OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

/**
 * @description 获取消息
 * @param username
 * @param message
 */

const chatgpt = async (message) => {
  let params = [
    {
      role: ChatCompletionRequestMessageRoleEnum.System,
      content: message,
    },
  ];
  const response = await openai
    .createChatCompletion({
      model: 'gpt-3.5-turbo',
      messages: params,
      temperature: 0,
    })
    .then((res) => res.data)
    .catch((err) => console.log(err));
  if (response) {
    return response.choices[0].message.content.replace(/^\n+|\n+$/g, '');
  } else {
    return '不好意思，咨询数据过大，请稍后咨询哦 ฅʕ•̫͡•ʔฅ';
  }
};

/**
 * 获取图片
 * @param username
 * @param prompt
 */
const dalle = async (username, prompt) => {
  const response = await openai
    .createImage({
      prompt: prompt,
      n: 1,
      size: CreateImageRequestSizeEnum._256x256,
      response_format: CreateImageRequestResponseFormatEnum.Url,
      user: username,
    })
    .then((res) => res.data)
    .catch((err) => console.log(err));
  if (response) {
    return response.data[0].url;
  } else {
    return 'Generate image failed';
  }
};

/**
 * 语音转文本
 * @param username
 * @param videoPath
 */
const whisper = async (username, videoPath) => {
  const file = fs.createReadStream(videoPath);
  const response = await openai
    .createTranscription(file, 'whisper-1')
    .then((res) => res.data)
    .catch((err) => console.log(err));
  if (response) {
    return response.text;
  } else {
    return '不好意思，走神了';
  }
};

export { chatgpt, dalle, whisper };
