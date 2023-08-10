import Box from "../Box/Box";
import Text from "../Text/Text";
import Link from "../Link/Link";
import Image from "../Image/Image";
import CodeInline from "../CodeInline/CodeInline";
import CodeBlock from "../CodeBlock/CodeBlock";
import List from "../List/List";
import ListItem from "../List/ListItem";
import Blockquote from "../Blockquote/Blockquote";
import Stack from "../Stack/Stack";

export const components = {
  h1: (props) => (
    <Box mt={7}>
      <Text as="h1" fontFamily="heading" fontSize={5} {...props} />
    </Box>
  ),
  h2: (props) => (
    <Box mt={7}>
      <Text as="h2" fontFamily="heading" fontSize={4} {...props} />
    </Box>
  ),
  h3: (props) => (
    <Box mt={7}>
      <Text as="h3" fontFamily="heading" fontSize={3} {...props} />
    </Box>
  ),
  h4: (props) => (
    <Box mt={7}>
      <Text as="h4" fontFamily="heading" fontSize={2} {...props} />
    </Box>
  ),
  h5: (props) => (
    <Box mt={7}>
      <Text as="h5" fontFamily="heading" fontSize={1} {...props} />
    </Box>
  ),
  h6: (props) => <Text as="h6" fontFamily="heading" {...props} />,
  p: (props) => <Text as="p" fontSize={3} lineHeight={6} {...props} />,
  a: (props) => <Link fontSize={3} lineHeight={6} ghost {...props} />,
  img: (props) => <Image {...props} />,
  code: (props) => <CodeInline {...props} />,
  pre: (props) => <CodeBlock {...props} />,
  ul: (props) => <List {...props} />,
  li: (props) => <ListItem {...props} />,
  div: (props) => <Box {...props} />,
  blockquote: (props) => <Blockquote {...props} />,
  Box: (props) => <Box {...props} />,
  Stack: (props) => <Stack {...props} />,
};
