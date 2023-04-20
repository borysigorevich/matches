import {ClearGameActionType, SetGameActionType} from "@/providers/ContextProvider/types";

export const SET_GAME = 'SET_GAME';
export const CLEAR_GAME = 'CLEAR_GAME';

export const setGameActionCreator = (game: GameType): SetGameActionType => ({
	type: SET_GAME,
	payload: game,
});

export const clearGameActionCreator = (): ClearGameActionType => ({
	type: CLEAR_GAME,
});
