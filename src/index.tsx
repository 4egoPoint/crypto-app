
import ReactDOM from 'react-dom/client';
import App from './App';
import 'react-alice-carousel/lib/alice-carousel.css';
import {Provider} from "react-redux"
import { store } from './app/store';

const root = ReactDOM.createRoot(
   document.getElementById('root') as HTMLElement
);
root.render(
   <Provider store={store}>
      <App />
   </Provider>
);
