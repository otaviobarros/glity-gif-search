import Image from 'next/image'
import { useTheme } from '../../hooks/useTheme'

import { LogoWrapper } from './logo-styles'

const Logo: React.FC = () => {
  const { toggleTheme } = useTheme()
  return (
    <LogoWrapper>
      <Image
        onClick={toggleTheme}
        src='/glity-logo.svg'
        width={300}
        height={300}
        priority
      />
    </LogoWrapper>
  )
}

export default Logo
