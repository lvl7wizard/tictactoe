import styled from "styled-components";
import githubIcon from '../../assets/githubIcon.png';

const StyledFooter = styled.footer`
    background-color: #1a2639;
    color: white;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    padding-left: 5vw;
    padding-right: 5vw;
    display: flex;
    justify-content: right;
    height: 50.5px;
    align-items: center;
`

const StyledLink = styled.a`
    color: white;
    display: flex;
    align-items: center;
    gap: 5px;
`
const StyledIcon = styled.img`
    height: 30px;
`
const Footer = () => {
    return <StyledFooter>
        <StyledLink href="https://github.com/lvl7wizard" target="_blank">
          <StyledIcon src={githubIcon}/> lvl7wizard
        </StyledLink>
    </StyledFooter>
}

export default Footer;