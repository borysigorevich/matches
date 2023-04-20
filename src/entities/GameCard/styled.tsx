import styled from 'styled-components';

export const GameWrapper = styled.div`
	scroll-snap-align: start;
	min-width: 275px;
	height: 200px;
	background-color: hsl(0, 0%, 0%, 0.6);
	border-radius: 8px;
	padding: 16px 16px 16px 16px;
	cursor: pointer;
	transition: scale 0.3s;

	&:hover {
		scale: 1.05;
	}
`;
