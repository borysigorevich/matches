import styled from 'styled-components';
import { TimeProps } from '@/components/Popup/types';

export const BroadcastWrapper = styled.div`
	display: grid;
	justify-items: center;
	grid-template-columns: 1fr;
	align-items: center;

	p {
		font-size: 32px;
		color: #fff;
	}

	@media (min-width: 768px) {
		grid-template-columns: 1fr auto 1fr;
		margin-top: 64px;
		justify-content: space-between;
		justify-items: revert;

		p {
			font-size: 48px;
		}
	}
`;

export const Time = styled.div<TimeProps>`
	width: 120px;
	height: 120px;
	display: grid;
	place-content: center;
	border-radius: 50%;
	position: relative;
	overflow: hidden;
	${({ degree }) => !degree && `border: 2px solid rgb(83, 89, 83)`};
	background: ${({ theme, degree }) =>
		`conic-gradient(${theme.green} 0%, ${theme.green} ${degree}%, rgb(83, 89, 83) ${degree}%)`};

	&::before {
		content: '';
		position: absolute;
		//background: ${(props) => props.theme.background};
		background: ${(props) => props.theme.background};
		inset: 2px;
		border-radius: 50%;
	}

	p {
		color: ${({ isFinished, theme }) =>
			isFinished ? theme.green : '#fff'};
		position: relative;
		z-index: 5;
	}
`;
