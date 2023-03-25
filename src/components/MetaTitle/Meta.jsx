import Head from 'next/head'
export default function Meta({ NameTitle, linkTitle }) {
        return (
                <>
                        <Head>
                                <title>{NameTitle}</title>
                                <link rel="icon" href={`/${linkTitle}.ico`} />
                        </Head>
                </>
        )
}
