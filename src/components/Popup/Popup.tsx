import React from 'react';
import { RxCross2 } from 'react-icons/rx';
import { PopupProps } from '@/components/Popup/types';
import { ContentBox, PopupWrapper } from '@/components/Popup/styled';
import { useAppSelector, useDispatch } from '@/providers/ContextProvider';
import { Heading } from '@/components/Heading';
import { clearGameActionCreator } from '@/providers/ContextProvider/actionCreators';
import { Score } from '@/components/Score';
import { Broadcast } from '@/components/Broadcast';

export const Popup: React.FC<PopupProps> = ({ open }) => {
	const dispatch = useDispatch();
	const game = useAppSelector('game');

	const handleClosePopup = () => {
		dispatch(clearGameActionCreator());
		document.body.style.overflow = 'auto';
	};

	return (
		<PopupWrapper open={open} onClick={handleClosePopup}>
			<ContentBox
				open={open}
				onClick={(event) => event.stopPropagation()}
			>
				<RxCross2 className="close" onClick={handleClosePopup} />
				<Heading
					competition={game?.competition}
					status={game?.status.type}
					country={game?.country}
					date={game?.date}
					time={game?.time}
					open={open}
				/>
				<Score
					away={game?.homeScore?.current}
					home={game?.awayScore?.current}
					open={open}
				/>

				<Broadcast
					homeTeam={game?.homeTeam.name}
					awayTeam={game?.awayTeam.name}
					liveStatus={game?.liveStatus}
				/>
			</ContentBox>
		</PopupWrapper>
	);
};
