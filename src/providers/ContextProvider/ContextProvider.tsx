'use client';
import React from 'react';
import {
	ContextProviderProps,
	ContextType,
	StateType,
} from '@/providers/ContextProvider/types';
import { reducer } from './reducer';

const AppContext = React.createContext<ContextType>({
	state: {
		game: {} as GameType,
		isModalOpen: false,
	},
	dispatch: () => console.log('dispatch'),
});

export const ContextProvider: React.FC<ContextProviderProps> = ({
	children,
}) => {
	// @ts-ignore
	const [state, dispatch] = React.useReducer(reducer, {} as GameType);
	return (
		<AppContext.Provider value={{ state, dispatch }}>
			{children}
		</AppContext.Provider>
	);
};

export const useDispatch = () => React.useContext(AppContext).dispatch;
export const useAppSelector = <T extends keyof StateType>(value: T) =>
	React.useContext(AppContext).state[value];
