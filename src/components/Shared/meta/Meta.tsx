import Head from "next/head";
import { useRouter } from "next/router";
import { NextSeo } from "next-seo";
import { appConfig } from "@/utils/config/app.config";
import MetaProps from "./MetaProps";
import logo from "@/assets/images/logo.jpg";

const Meta = (props: MetaProps) => {
  const router = useRouter();

  return (
    <>
      <Head>
        <meta charSet="UTF-8" key="charset" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1"
          key="viewport"
        />
        <link
          rel="apple-touch-icon"
          href={`${router.basePath} ${logo}`}
          key="apple"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href={`${router.basePath}${logo}`}
          key="icon32"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href={`${router.basePath}${logo}`}
          key="icon16"
        />
        <link rel="icon" href={`${router.basePath}${logo}`} key="favicon" />
      </Head>
      <NextSeo
        title={props.title}
        description={props.description}
        canonical={props.canonical}
        openGraph={{
          title: props.title,
          description: props.description,
          url: props.canonical,
          locale: appConfig.locale,
          site_name: appConfig.site_name,
        }}
      />
    </>
  );
};

export default Meta;
