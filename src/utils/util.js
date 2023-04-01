export const toCentMoney = (cent) => {
  if (isNaN(parseFloat(cent))) {
    return '0.00';
  }
  let price = Math.round(cent) / 100;
  let val = price.toString();
  let arr = val.indexOf('.');
  if (arr < 0) {
    arr = val.length;
    val += '.';
  }
  while (val.length <= arr + 2) {
    val += '0';
  }
  return val;
};

export const basicPracticalFunction = [
  {
    label: '对话',
    key: 0,
    value: 0,
  },
  {
    label: '图片',
    key: 1,
    value: 1,
  },
  {
    label: '音频',
    key: 2,
    value: 2,
  },
  {
    label: '微调',
    key: 3,
    value: 3,
  },
  {
    label: '文件',
    key: 4,
    value: 4,
  },
  {
    label: '会话',
    key: 5,
    value: 5,
  },
  {
    label: '识图',
    key: 6,
    value: 6,
  },
];
