import { createRoot } from 'react-dom/client';
import './index.css';
import {App} from './components/App/App';
import {Provider} from "react-redux";
import {store} from "./store/store";

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <App />
  </Provider>,
);
