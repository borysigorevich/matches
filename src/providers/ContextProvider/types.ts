import React from 'react';
import {
	CLEAR_GAME,
	SET_GAME,
} from '@/providers/ContextProvider/actionCreators';

export type StateType = {
	game: GameType | null;
	isModalOpen: boolean;
};

export type ContextProviderProps = {
	children: React.ReactNode;
};

export type SetGameActionType = { type: typeof SET_GAME; payload: GameType };
export type ClearGameActionType = { type: typeof CLEAR_GAME };

export type ContextType = {
	state: StateType;
	dispatch: (action: SetGameActionType | ClearGameActionType | void) => void;
};

export type ReducerType = (
	state: StateType,
	action: SetGameActionType | ClearGameActionType
) => StateType;
