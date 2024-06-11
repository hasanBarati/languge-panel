import localFont from '@next/font/local';

const customFont = localFont({
  src: [
    {
      path: '../public/fonts/IRANSansWeb.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/IRANSansWeb(FaNum)_Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-custom',
});

export default customFont;