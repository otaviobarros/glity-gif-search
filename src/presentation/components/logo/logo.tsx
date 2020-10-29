import Image from 'next/image'
import { useTheme } from '../../hooks/use-theme'
import { LogoName, LogoWrapper } from './logo-styles'

const Logo: React.FC = () => {
  const { toggleTheme } = useTheme()
  return (
    <LogoWrapper onClick={toggleTheme}>
      <Image src='/glity-logo.svg' width={70} height={70} priority />
      <LogoName>Glity</LogoName>
    </LogoWrapper>
  )
}

export default Logo
