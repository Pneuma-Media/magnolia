import { createWrapper } from 'next-redux-wrapper';
import initStore from '../store';
import 'bootstrap/dist/css/bootstrap.css';
import 'react-toastify/dist/ReactToastify.css';
import "react-multi-carousel/lib/styles.css";
import '../public/fonts/stylesheet.css'
import './index.css';
import Head from 'next/head';


const MyApp = ({ Component, pageProps }) => {

    let content = (
        <>
            <Head>
                <meta name="viewport" content="viewport-fit=cover" />           
             </Head>
            <Component {...pageProps} />
        </>
    );

    return content;
}

export const wrapper = createWrapper(initStore, { debug: true });


export default wrapper.withRedux(MyApp);