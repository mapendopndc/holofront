import { wrapper } from '../store/wrapper';

import '../styles/global.css'
import 'bootstrap/dist/css/bootstrap.min.css'

const MyApp = ({Component, pageProps}) => (
    <Component {...pageProps} />
);

export default wrapper.withRedux(MyApp);