import dynamic from 'next/dynamic';
import  '../styles/globals.css'

// We don't want Next to render anything until the router is ready
// We also don't want any fancy optimizations like SSR or SSG
// Move on. nothing to see here

const App = ({ Component, pageProps, router }) => {
  if (!router.isReady) return null; 
  return <Component {...pageProps} />;
};

const MyApp = dynamic(() => Promise.resolve(App), {
  ssr: false,
});

// @ts-ignore
MyApp.getInitialProps = async (appContext) => { return {} };

export default MyApp;
