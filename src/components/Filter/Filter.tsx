import React from 'react';
import { FilterProps } from '@/components/Filter/types';
import {
	FilterButton,
	FiltersContent,
	FilterWrapper,
	Header,
	Label,
} from '@/components/Filter/styled';
import {RxCross2} from "react-icons/rx";

export const Filter: React.FC<FilterProps> = ({ setFilters, filters }) => {
	const [open, setOpen] = React.useState(false);

	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	const handleFiltersChange = (filter: StatusType) => () => {
		setFilters((prev) => {
			if (filter === 'all') return [];
			else if (prev.includes(filter))
				return prev.filter((value) => value !== filter);
			else return [...prev, filter];
		});
	};

	React.useEffect(() => {
		const listener = (event: KeyboardEvent) => {
			if (event.key === 'Escape' && open) {
				handleClose();
			}
		};
		window.addEventListener('keydown', listener);
		return () => window.removeEventListener('keydown', listener);
	}, [open]);

	return (
		<FilterWrapper>
			<FilterButton onClick={handleOpen} open={open}>
				Filters
			</FilterButton>

			<FiltersContent open={open}>
				<RxCross2 className="close" onClick={handleClose}/>
				<Header>Filters</Header>
				<Label
					onClick={handleFiltersChange('all')}
					active={!filters.length}
				>
					All
				</Label>
				<Label
					onClick={handleFiltersChange('finished')}
					active={filters.includes('finished')}
				>
					Result
				</Label>
				<Label
					onClick={handleFiltersChange('inprogress')}
					active={filters.includes('inprogress')}
				>
					Live
				</Label>
				<Label
					onClick={handleFiltersChange('notstarted')}
					active={filters.includes('notstarted')}
				>
					Upcoming
				</Label>
			</FiltersContent>
		</FilterWrapper>
	);
};
