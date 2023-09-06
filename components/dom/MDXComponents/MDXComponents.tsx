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
import Headline from "../Headline/Headline";

export const components = {
  h1: (props) => <Headline fontSize={5} mt={8} mb={5} {...props} />,
  h2: (props) => <Headline as="h2" fontSize={4} mt={8} mb={5} {...props} />,
  h3: (props) => <Headline as="h3" fontSize={3} mt={8} mb={5} {...props} />,
  h4: (props) => <Headline as="h4" fontSize={2} mt={8} mb={5} {...props} />,
  h5: (props) => <Headline as="h5" fontSize={1} mt={8} mb={5} {...props} />,
  h6: (props) => (
    <Headline as="h6" fontFamily="heading" mt={8} mb={5} {...props} />
  ),
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
  a: (props) => <Link {...props} />,
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
