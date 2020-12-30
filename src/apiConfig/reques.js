import axios from 'axios'

// 基本配置
axios.defaults.baseURL = "http://yuyue.fjlypt.com/"   //api前缀
 
const axios= axios.create({
    xsrfCookieName: 'xsrf-token' ,  // `xsrfCookieName` 是用作 xsrf token 的值的cookie的名称
    timeout: 1000,    // 如果请求话费了超过 `timeout` 的时间，请求将被中断
    proxy: {    // 'proxy' 定义代理服务器的主机名称和端口
    host: '10.10.10.198',
    port: 9000,
  },
});
 
instance.interceptors.request.use(function (config) {
  return config;
}, function (error) {
  return Promise.reject(error);
});
 
instance.interceptors.response.use(function (response) {
  return response     // 下节详述
}, function (error) {
  return Promise.reject(error);
});
export default axios;