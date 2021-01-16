import styled from "styled-components"

export const Wrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	max-width: 960px;
	height: 70px;
	margin: 20px auto;

	@media screen and (min-width: 768px) {
		height: 120px;
	}
`

export const Logo = styled.img`
	max-width: 150px;

	@media screen and (min-width: 768px) {
		max-width: 350px;
		width: 250px;
	}
`