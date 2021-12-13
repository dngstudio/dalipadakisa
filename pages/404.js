import Link from "next/link";
import Head from 'next/head'


const NotFound = () => {
    return ( 
    <>
        <Head>
            <title>Stranica nije pronađena</title>
        </Head>
        <div className="container d-flex vh-100 justify-content-center align-items-center">
            <h1>Stranica nije pronađena</h1>
            <Link href="/">Vrati se na početnu</Link>

        </div>
    </>
     );
}
 
export default NotFound;