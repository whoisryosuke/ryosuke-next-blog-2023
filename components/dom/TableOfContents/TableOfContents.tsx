import React from 'react'
import Box from '../Box/Box'
import Link from '../Link/Link'
import Text from '../Text/Text'
import { tocContainerStyles, tocStyles } from './TableOfContents.css'

const HEADING_SIZES = {
    // H1
    1: 3,
    // H2
    2: 2,
    // H3
    3: 1,
}

type Heading = {
    depth: number;
    slug: string;
    text: string;
}

type Props = {
    headings: Heading[],
}

const TableOfContents = ({headings}: Props) => {
  return (
    <Box className={tocContainerStyles}>
        <Box className={tocStyles}>
            <Box><Text fontSize={4} fontWeight="bold">Table of Contents</Text></Box>
            {headings.map(heading => <Box paddingLeft={heading.depth * 3}><Link href={`#${heading.slug}`}><Text fontSize={HEADING_SIZES[heading.depth]}>{heading.text}</Text></Link></Box>)}
        </Box>
    </Box>
  )
}

export default TableOfContents