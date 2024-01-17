import { Helmet } from 'react-helmet-async';

type Props = {
  title: string,
  keywords: string,
}

const HelmetSEO = ({title, keywords}:Props) => {
  return (
    <Helmet prioritizeSeoTags>
      <title>{title}</title>
      <link rel="canonical" href="https://nbm-application.shop/" />
      <meta name="keywords" content={keywords}/>
      <meta name="description" content="Shop the latest selection of electronics, jewelry, men's clothing, and women's clothing at our online store. Find the perfect products for your needs and enjoy convenient shopping from the comfort of your own home."></meta>
      <meta name="author" content="nbmblueeye@gmail.com"></meta>
    </Helmet>
  )
}

export default HelmetSEO
