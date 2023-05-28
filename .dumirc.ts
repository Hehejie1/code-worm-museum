import { defineConfig } from 'dumi';

const repo = 'code-worm-museum'; // 项目名

export default defineConfig({
  themeConfig: {
    name: '码虫博物馆',
    logo: 'https://tos.wyjloveyl.com/project/upload/upload/png/1676625043581b355a861819cc6c69229a5cd9d6fahehejie.png',
  },
  favicons: ['https://tos.wyjloveyl.com/project/upload/upload/ico/logo.ico'],
  base: process.env.NODE_ENV === 'production' ? `/${repo}/` : '/',
  publicPath: process.env.NODE_ENV === 'production' ? `/${repo}/` : '/',
});
