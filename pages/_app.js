import NavBar from "../components/NavBar/NavBar";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <NavBar />
      <div>
        <Component {...pageProps} />
      </div>
    </div>
  );
}

export default MyApp;
