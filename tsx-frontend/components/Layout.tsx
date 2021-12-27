import { ReactNode, Fragment } from 'react';
import Head from 'next/head';

import Navbar from './Navbar';
import Footer from './Footer';

type Props = {
    children?: ReactNode;
    title?: string;
};

const Layout = ({ children, title }: Props) => (
    <Fragment>
        <Head>
            <title>{title}</title>
            <meta charSet="utf-8" />
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <link rel="icon" type="image/png" href="/images/footer/zeal_icon.png" />
        </Head>
        <header>
            <Navbar />
        </header>
        <div style={{ paddingTop: '55px' }}>{children}</div>
        <Footer />
        <script
            src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.bundle.min.js"
            integrity="sha384-b5kHyXgcpbZJO/tY9Ul7kGkf1S0CWuKcCD38l8YkeH8z8QjE0GmW1gYU5S9FOnJ0"
            crossOrigin="anonymous"
        ></script>
        <script
            src="https://code.jquery.com/jquery-3.6.0.min.js"
            integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4="
            crossOrigin="anonymous"
        ></script>
    </Fragment>
);

export default Layout;