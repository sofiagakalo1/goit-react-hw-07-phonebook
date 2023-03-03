import { Provider } from 'react-redux';
import { store } from '../src/redux/store';
import Contacts from '../src/components/Contacts/Contacts';

export function App() {
  return (
    <Provider store={store}>
        <Contacts />
    </Provider>
  );
}
