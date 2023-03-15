import Container from '../components/Container';
import { XMarkIcon } from '@heroicons/react/20/solid'


const Home = () => {
    return (
       
    <Container>


    <div className="relative isolate flex items-center gap-x-6 overflow-hidden bg-gray-50 py-2.5 px-6 sm:px-3.5 sm:before:flex-1">
      <svg
        viewBox="0 0 577 310"
        aria-hidden="true"
        className="absolute top-1/2 left-[max(-7rem,calc(50%-52rem))] -z-10 w-[36.0625rem] -translate-y-1/2 transform-gpu blur-2xl"
      >
        <path
          id="1d77c128-3ec1-4660-a7f6-26c7006705ad"
          fill="url(#49a52b64-16c6-4eb9-931b-8e24bf34e053)"
          fillOpacity=".3"
          d="m142.787 168.697-75.331 62.132L.016 88.702l142.771 79.995 135.671-111.9c-16.495 64.083-23.088 173.257 82.496 97.291C492.935 59.13 494.936-54.366 549.339 30.385c43.523 67.8 24.892 159.548 10.136 196.946l-128.493-95.28-36.628 177.599-251.567-140.953Z"
        />
        <defs>
          <linearGradient
            id="49a52b64-16c6-4eb9-931b-8e24bf34e053"
            x1="614.778"
            x2="-42.453"
            y1="26.617"
            y2="96.115"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#9089FC" />
            <stop offset={1} stopColor="#FF80B5" />
          </linearGradient>
        </defs>
      </svg>
      <svg
        viewBox="0 0 577 310"
        aria-hidden="true"
        className="absolute top-1/2 left-[max(45rem,calc(50%+8rem))] -z-10 w-[36.0625rem] -translate-y-1/2 transform-gpu blur-2xl"
      >
        <use href="#1d77c128-3ec1-4660-a7f6-26c7006705ad" />
      </svg>
      <div className="flex flex-wrap items-center gap-y-2 gap-x-4">
        <p className="text-sm leading-6 text-gray-900">
          <strong className="font-semibold">PI Day Special</strong>
          <svg viewBox="0 0 2 2" className="mx-2 inline h-0.5 w-0.5 fill-current" aria-hidden="true">
            <circle cx={1} cy={1} r={1} />
          </svg>
         50% of on all YA titles! Get your discount today!
        </p>
        <a
          href="#"
          className="flex-none rounded-full bg-gray-900 py-1 px-3.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
        >
          Shop now! <span aria-hidden="true">&rarr;</span>
        </a>
      </div>
      <div className="flex flex-1 justify-end">
        <button type="button" className="-m-3 p-3 focus-visible:outline-offset-[-4px]">
          <span className="sr-only">Dismiss</span>
          <XMarkIcon className="h-5 w-5 text-gray-900" aria-hidden="true" />
        </button>
      </div>
    </div>
  


    
    <h1>Welcome to Books and More!</h1>

    <p>Welcome to our online book site, where you can explore and purchase a wide range of books from various genres! We have created a platform that caters to all book lovers, from avid readers to occasional readers.</p>

    <p>Our site offers an extensive selection of books, ranging from bestsellers to lesser-known titles, catering to readers of all ages and interests. Our user-friendly interface allows you to easily navigate and search for your desired books, and we offer detailed information and reviews to help you make informed decisions.</p>

    <p>Our site also offers a personalized experience, allowing you to create a profile, save your favorite books, and receive recommendations based on your reading preferences. Additionally, we provide various features to enhance your reading experience, such as the ability to download eBooks, listen to audiobooks, and preview book samples.</p>

    <p>We take pride in our exceptional customer service, providing reliable and secure payment methods, fast delivery options, and hassle-free returns. Our goal is to ensure your satisfaction with your purchase and your overall experience on our site.</p>

    <p>So, whether you're looking for a classic novel, a thrilling mystery, or a motivational self-help book, our online book site has got you covered. Start browsing today and discover your next favorite read!</p>

    <img src='https://www.pwcva.gov/assets/2022-11/mikolaj-DCzpr09cTXY-unsplash.jpg'></img>

   




    
    </Container>
  
    
    )
}

export default Home;