import React, { PropsWithChildren } from 'react'
import Text, {TextProps} from '../Text/Text'

type Props = TextProps & {}

const Headline = ({children, ...props}: PropsWithChildren<Props>) => {
  return (
    <Text fontWeight="bold" fontSize={4} {...props}>{children}</Text>
  )
}

export default Headline