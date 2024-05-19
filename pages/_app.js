import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <span className="laderh" />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
