import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'

// o metodo css da lib styled permite replicar uma porção de css para outras funcões
export const OptionsContainerStyles = css`
  padding: 10px 15px 6px;
  cursor: pointer;
`

export const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0 0 50px;
`
// estilzando um componente que ja existe, basta passar como parametro
export const LogoContainer = styled(Link)`
  height: 39px;
  width: 50px;
`

export const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`

export const OptionLink = styled(Link)`
  ${OptionsContainerStyles}
`
