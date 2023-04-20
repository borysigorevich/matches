'use client';
import React from 'react';

import { GameWrapper } from './styled';
import { GameCardProps } from '@/entities/GameCard/types';
import { useDispatch } from '@/providers/ContextProvider';
import { setGameActionCreator } from '@/providers/ContextProvider/actionCreators';
import { Country, GameStatus, League } from '@/components/Heading/styled';
import { StatusColorConfig } from '@/components/Heading/configs';

export const GameCard: React.FC<GameCardProps> = ({ game }) => {
	const dispatch = useDispatch();

	const handleOpenModal = () => {
		dispatch(setGameActionCreator(game));
		document.body.style.overflow = 'hidden';
	};

	return (
		<GameWrapper onClick={handleOpenModal}>
			<Country>{game.country}</Country>
			<League>{game.competition}</League>
			<GameStatus color={StatusColorConfig[game.status.type]}>
				{game.status.type}
			</GameStatus>
		</GameWrapper>
	);
};
