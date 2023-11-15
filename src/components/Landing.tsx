import { Cards } from './Cards'
import { Footer } from './Footer'
import { Hero } from './Hero'
// import { Info } from './Info'
import { Navbar } from './Navbar'

export const Landing = () => {
  return (
    <div className="flex-col">
      <Navbar />
      <Hero />
      <Cards />
      {/* <Info /> */}
      <Footer />
    </div>
  )
}
