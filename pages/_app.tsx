import BlogPage from "@components/dom/BlogPage/BlogPage";
import Page from "@components/dom/Page/Page";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";

export default function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const key = router.asPath;

  const isBlog = key.split("/")[1] === "blog";

  const content = isBlog ? (
    <BlogPage title="">
      <Component key={key} {...pageProps} />
    </BlogPage>
  ) : (
    <Component key={key} {...pageProps} />
  );

  return (
    <Page>
      <AnimatePresence>{content}</AnimatePresence>
    </Page>
  );
}
