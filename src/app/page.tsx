'use client';
import React from 'react';
import matchesData from '../data/sports.json';
import { GameCard } from '@/entities/GameCard';
import { Popup } from '@/components/Popup';
import { useAppSelector, useDispatch } from '@/providers/ContextProvider';
import { clearGameActionCreator } from '@/providers/ContextProvider/actionCreators';
import { Filter } from '@/components/Filter';

export default function Home() {
	const dispatch = useDispatch();
	const isModalOpen = useAppSelector('isModalOpen');

	const [matches] = React.useState<GameType[]>(() => matchesData as GameType[]);
	const [filteredMatches, setFilteredMatches] = React.useState(matches);
	const [filters, setFilters] = React.useState<StatusType[]>([]);

	React.useEffect(() => {
		if (filters.length)
			setFilteredMatches(
				matches.filter((match) => filters.includes(match.status.type))
			);
		else setFilteredMatches(matches);
	}, [filters]);

	React.useEffect(() => {
		const listener = (event: KeyboardEvent) => {
			if (event.key === 'Escape' && isModalOpen) {
				if (isModalOpen) dispatch(clearGameActionCreator());
				document.body.style.overflow = 'auto';
			}
		};
		window.addEventListener('keydown', listener);
		return () => window.removeEventListener('keydown', listener);
	}, [isModalOpen]);

	return (
		<>
			{filteredMatches.map((game) => (
				<GameCard key={game.id} game={game} />
			))}
			<Popup open={isModalOpen} />

			<Filter filters={filters} setFilters={setFilters} />
		</>
	);
}
