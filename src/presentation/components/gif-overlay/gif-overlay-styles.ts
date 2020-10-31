import styled from 'styled-components'

export const GifOverlayWrapper = styled.section`
  position: absolute;
  height: 120px;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to top, rgb(0, 0, 0, 0.7) 0%, transparent 100%);
  display: flex;
  color: white;
  justify-content: center;
  align-items: flex-end;
  justify-content: space-between;
  padding: ${({ theme }) => theme.mixins.spacing(2)};
`

export const GifOverlayContent = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const AvatarContainer = styled.div`
  display: flex;
  align-items: center;

  & span {
    margin-left: ${({ theme }) => theme.mixins.spacing(1)};
  }
`

export const GifOverlayActions = styled.div`
  display: flex;

  & div:first-child {
    margin-right: ${({ theme }) => theme.mixins.spacing(1)};
  }
`
