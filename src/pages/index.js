import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Main from "@/components/Main";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-fit">
      <Header />
      <Main />
      <Footer />
      <Link href={'https://wa.me/5511967422863'} target={'_blank'}>
      <img src='/icons/whatsapp.png' alt='' width={'60px'} className='fixed bottom-9 right-9 z-1000'/>
      </Link>
    </div>

  )
}
