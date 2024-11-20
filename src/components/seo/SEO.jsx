import { Helmet } from "react-helmet-async";

function SEO({ title, desc = "a career consultant service" }) {
  return (
    <Helmet>
      <title>{title} | Next Move</title>
      <link rel="canonical" href="https://www.nextmoves.vercel.app" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={desc} />
    </Helmet>
  );
}

export default SEO;
