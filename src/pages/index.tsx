import Headers from "../components/Header/header"
import Footer from "../components/Footer/Footer"
import Main from "../components/Main/Main"
import Meta from '@/components/MetaTitle/Meta'
export default function Home() {
  return (
    <>
      <Meta NameTitle="Click Film" linkTitle="Home" />
      <Headers />
      <Main />
      <Footer />
    </>
  )
}
