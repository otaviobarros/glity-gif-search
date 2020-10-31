import Image from 'next/image'
import { useMemo } from 'react'
import { AvatarWrapper } from './avatar-styles'

interface Props {
  url: string
  width?: number
}

const getBackupAvatar = (): string => {
  const avatars = [
    '/female-avatar-1.svg',
    '/female-avatar-2.svg',
    '/male-avatar-1.svg',
    '/male-avatar-2.svg'
  ]

  return avatars[Math.floor(Math.random() * avatars.length)]
}

const Avatar: React.FC<Props> = ({ url, width = 40 }) => {
  const gifUrl = useMemo(() => url ?? getBackupAvatar(), [url])

  return (
    <AvatarWrapper width={width}>
      <Image src={gifUrl} width={width} height={width} priority />
    </AvatarWrapper>
  )
}

export default Avatar
