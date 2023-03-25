import Headers from "../components/Header/header"
import Main from '@/components/Main/Main'
import Footer from '@/components/Footer/Footer'
import Meta from '@/components/MetaTitle/Meta'
export default function Film() {
        return (
                <>
                        <Meta NameTitle="Serial" linkTitle="Home" />
                        <>
                                <Headers />
                                <Main />
                                <Footer />
                        </>
                </>
        )
}
