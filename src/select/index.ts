import { createConnect } from 'react-electors';
import { AppState } from '../store/AppStore';

export const { Provider, useSelector } = createConnect<AppState>();
