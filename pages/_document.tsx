import Document, {
    DocumentContext,
    Head,
    Html,
    Main,
    NextScript,
} from 'next/document'

class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        return (
            <Html lang='no' className='h-full'>
                <Head></Head>
                <body className='h-full bg-purple-5 antialiased'>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument
