import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	body {
		display: flex;
		justify-content: center;
		font-family: sans-serif;
	}
`;

export default GlobalStyle;
