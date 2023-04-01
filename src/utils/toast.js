import { Toast } from 'antd-mobile';

const ToastModal = {};
ToastModal.show = (Icon, content, callback, duration = 1500, maskClickable = true, position = 'bottom') => {
  let params = {
    icon: Icon,
    content,
    duration,
    maskClickable,
    position: Icon ? 'center' : position,
    afterClose: callback,
  };
  Toast.show({
    ...params,
  });
};

ToastModal.clear = () => Toast.clear();

export { ToastModal };
