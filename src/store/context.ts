import { createContext } from 'react';

import { State } from '../App';
import { ActionType } from './reducer';

export const AppContext = createContext<(State | React.Dispatch<ActionType>)[]>(
  []
);
