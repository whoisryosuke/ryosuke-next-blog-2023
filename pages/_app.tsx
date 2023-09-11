import Page from "@components/dom/Page/Page";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";

export default function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const key = router.asPath;
  return (
    <Page>
      <AnimatePresence>
        <Component key={key} {...pageProps} />
      </AnimatePresence>
    </Page>
  );
}
