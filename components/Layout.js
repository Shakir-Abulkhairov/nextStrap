
import Head from 'next/head';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
function Layout({children}) {
  return (
      <>
       <Head>
              <link rel="preconnect" href="https://fonts.googleapis.com"/>
                  <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
                      <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans&display=swap" rel="stylesheet"/>
        </Head>
     <Header/>
            {children}
     
      </>
  )
}

export default Layout