import styled from 'styled-components';
import { PopupProps } from '@/components/Popup/types';

export const PopupWrapper = styled.div<PopupProps>`
	backdrop-filter: ${({ open }) => (open ? 'blur(5px)' : 'blur(0)')};
	pointer-events: ${({ open }) => (open ? 'auto' : 'none')};

	transition: all 0.3s;
	position: fixed;
	inset: 0;
	min-height: 100vh;
`;

export const ContentBox = styled.div<PopupProps>`
	padding: 32px;
	background: ${(props) => props.theme.background};
	opacity: ${({ open }) => (open ? '1' : '0')};
	inset: 50px;
	position: absolute;
	border-radius: 16px;
	text-align: center;
	transition: all 0.3s;
	overflow: auto;

	.close {
		color: #fff;
		position: absolute;
		right: 30px;
		top: 30px;
		font-size: 32px;
		cursor: pointer;
	}

	@media (min-width: 768px) {
		inset: 100px;
		padding: 64px;
	}
`;
