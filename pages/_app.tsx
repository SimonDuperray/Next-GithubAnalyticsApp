import 'antd/dist/antd.min.css';
import "../styles/repos.css";
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }: any) {
  return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
  );
}

export default MyApp;