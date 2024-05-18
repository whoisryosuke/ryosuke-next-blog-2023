import Box from "../Box/Box";
import Text from "../Text/Text";
import Link from "../Link/Link";
import Image from "../Image/BlogImage";
import CodeInline from "../CodeInline/CodeInline";
import List from "../List/List";
import ListItem from "../List/ListItem";
import Blockquote from "../Blockquote/Blockquote";
import Stack from "../Stack/Stack";
import Headline from "../Headline/Headline";
import { H1, H2, H3, H4, H5, H6 } from "../Headline/Headers";
import BlogHeadline from "../BlogHeadline/BlogHeadline";
import Paragraph from "../Text/Paragraph";
import Strong from "../Text/Strong";
import ThreadsEmbed from "../Embeds/ThreadsEmbed";
import TweetEmbed from "../Embeds/TweetEmbed";

export const components = {
  h1: (props) => (
    <BlogHeadline title={props.children} level={1}>
      <H1 slug {...props} />
    </BlogHeadline>
  ),
  h2: (props) => (
    <BlogHeadline title={props.children} level={2}>
      <H2 {...props} />
    </BlogHeadline>
  ),
  h3: (props) => <H3 {...props} />,
  h4: (props) => <H4 {...props} />,
  h5: (props) => <H5 {...props} />,
  h6: (props) => <H6 {...props} />,
  p: (props) => <Paragraph {...props} />,
  strong: (props) => <Strong {...props} />,
  a: (props) => <Link {...props} />,
  img: (props) => <Image {...props} />,
  // code: (props) => <CodeInline {...props} />,
  // // pre: (props) => <CodeBlock {...props} />,
  ul: (props) => <List {...props} />,
  li: (props) => <ListItem {...props} />,
  div: (props) => <Box {...props} />,
  blockquote: (props) => <Blockquote {...props} />,
  aside: (props) => <Blockquote {...props} />,
  Box: (props) => <Box {...props} />,
  Stack: (props) => <Stack marginBottom={2} {...props} />,
  ThreadsEmbed: (props) => <ThreadsEmbed {...props} />,
  TweetEmbed: (props) => <TweetEmbed {...props} />,
};
