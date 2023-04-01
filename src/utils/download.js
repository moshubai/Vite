import { getToken } from './cookie';
import { message } from 'antd';

const downloadFile = function(url, fileName, data = null, method='POST',type='') {
  let token = getToken();
  //fileName必须要
  var xhr = new XMLHttpRequest();
  xhr.open(method, url, true);
  xhr.setRequestHeader("Authorization",token);
  xhr.setRequestHeader("content-type", "application/json");
  xhr.responseType = "blob";
  xhr.onload = function (e) {
    if (xhr.status !== 200) {
      message.error("导出列表失败，请重试");
      return false;
    }
    var blob = new Blob([xhr.response], {
      type: "application/json",
    });
    if ("download" in document.createElement("a")) {
      //非IE下载
      var url = window.URL.createObjectURL(blob);
      var a = document.createElement("a");
      a.href = url;
      a.download = type === '' ? (fileName + ".xlsx") : (fileName + ".xls");
      a.click();
      window.URL.revokeObjectURL(url);
    } else {
      //IE10+下载
      navigator.msSaveBlob(blob, fileName);
    }
  };
  xhr.send(data);
}

export default downloadFile;
