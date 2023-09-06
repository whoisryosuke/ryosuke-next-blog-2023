import Box from "../Box/Box";
import Text from "../Text/Text";
import Link from "../Link/Link";
import Image from "../Image/BlogImage";
import CodeInline from "../CodeInline/CodeInline";
import CodeBlock from "../CodeBlock/CodeBlock";
import List from "../List/List";
import ListItem from "../List/ListItem";
import Blockquote from "../Blockquote/Blockquote";
import Stack from "../Stack/Stack";

export const components = {
  h1: (props) => (
    <Box mt={8} mb={5}>
      <Text
        as="h1"
        fontFamily="heading"
        fontSize={5}
        fontWeight="bold"
        {...props}
      />
    </Box>
  ),
  h2: (props) => (
    <Box mt={8} mb={5}>
      <Text
        as="h2"
        fontFamily="heading"
        fontSize={4}
        fontWeight="bold"
        {...props}
      />
    </Box>
  ),
  h3: (props) => (
    <Box mt={8} mb={5}>
      <Text
        as="h3"
        fontFamily="heading"
        fontSize={3}
        fontWeight="bold"
        {...props}
      />
    </Box>
  ),
  h4: (props) => (
    <Box mt={8} mb={5}>
      <Text
        as="h4"
        fontFamily="heading"
        fontSize={2}
        fontWeight="bold"
        {...props}
      />
    </Box>
  ),
  h5: (props) => (
    <Box mt={8} mb={5}>
      <Text
        as="h5"
        fontFamily="heading"
        fontSize={1}
        fontWeight="bold"
        {...props}
      />
    </Box>
  ),
  h6: (props) => <Text as="h6" fontFamily="heading" {...props} />,
  p: (props) => (
    <Text
      as="p"
      fontSize={3}
      lineHeight={6}
      mb={5}
      display="block"
      {...props}
    />
  ),
  // a: (props) => <Link fontSize={3} lineHeight={6} ghost {...props} />,
  img: (props) => <Image {...props} />,
  // // code: (props) => <CodeInline {...props} />,
  // // pre: (props) => <CodeBlock {...props} />,
  ul: (props) => <List {...props} />,
  li: (props) => <ListItem {...props} />,
  div: (props) => <Box {...props} />,
  blockquote: (props) => <Blockquote {...props} />,
  aside: (props) => <Blockquote {...props} />,
  Box: (props) => <Box {...props} />,
  Stack: (props) => <Stack {...props} />,
};
