import styled from 'styled-components';

export const ScoreWrapper = styled.div`
	margin-top: 8px;
	font-size: 64px;
	color: #fff;

	display: flex;
	gap: 16px;
	justify-content: center;

	p {
		margin: 0;
	}

	@media (min-width: 768px) {
		font-size: 84px;
		margin-top: 64px;
	}
`;
