import {Amplify} from 'aws-amplify';
import awsconfig from '../aws-exports';
import '@aws-amplify/ui-react/styles.css';


Amplify.configure(awsconfig);


import { Provider } from 'react-redux'
import store from '../store'

import { GlobalStyles } from '../../styles/global-styles';

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      
        <div className='page-content'>
          <GlobalStyles />
          <Component {...pageProps} />
        </div>

    </Provider>
  )
}

export default MyApp




