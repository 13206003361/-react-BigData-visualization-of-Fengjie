import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  
  routes: [
    { path: '/', component: '@/pages/index' },
  ],
  proxy: {
    '/api': {
      target: 'http://yuyue.fjlypt.com/',
      changeOrigin: true,
      "pathRewrite": { "^/api" : "" }
    }
  }
});
