import Container from '../components/Container';
import { Link, useNavigate} from 'react-router-dom';
import { XMarkIcon } from '@heroicons/react/20/solid'

const About = () => {
    const navigate = useNavigate()


    return (<Container>

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
          href="#" onClick={() => navigate ("/books")}
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
        <h2>About Us</h2>

        <p>Our team consists of book enthusiasts who are dedicated to curating a diverse and eclectic selection of titles from around the world. We offer books in a variety of genres, from fiction and non-fiction to children's books and cookbooks, ensuring that there is something for every reader.</p>

        <p>At our online book store, we prioritize the satisfaction of our customers. We take pride in our excellent customer service, fast and secure delivery options, and hassle-free returns. Our user-friendly interface allows you to easily navigate and search for your desired books, and our detailed book descriptions and reviews help you make informed decisions.</p>

        <p>We believe in the power of books to bring people together, to spark conversations, and to create a more informed and empathetic society. That's why we are committed to providing you with an exceptional online book shopping experience, so that you can discover new worlds and expand your horizons through the power of literature. Thank you for choosing our online book store, and happy reading!</p>

        <p>Here are some of our current favorites!</p>

    <table>
     <thead>
        <tr>
            <th>Gossip of The Starlings</th>
            <th>The Power</th>
            <th>Prep</th>
        </tr>
     </thead>
     <tbody>
        <td><img className='sizing2' src='https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/81KJ4kIohdL._AC_UF1000,1000_QL80_.jpg'></img></td>
        <td><img className='sizing2' src='https://assets.vogue.com/photos/59dfd31a7e799438d68c461e/master/w_2560%2Cc_limit/00-story-image-the-power.jpg'></img></td>
        <td><img className='sizing2' src='https://images.penguinrandomhouse.com/cover/700jpg/9780593171493'></img></td>
     </tbody>
     <tbody>
        <td><h3>By Nina De Gramont</h3></td>
        <td><h3>By Naomi Alderman</h3></td>
        <td><h3>By Curtis Sittenfeld</h3></td>
     </tbody>
     <tbody>
        <td><p>When Catherine Morrow is admitted to the Esther Percy School for Girls, it's on the condition that she reform her ways. But that's before the beautiful and charismatic Skye Butterfield, daughter of the famous Senator Butterfield, chooses Catherine for her best friend. </p></td>
        <td><p>"The Power" is a speculative fiction novel by Naomi Alderman that explores a world where teenage girls suddenly gain the ability to generate electrical power from their bodies, giving them immense physical power over others.</p></td>
        <td><p>"Prep" is a coming-of-age novel by Curtis Sittenfeld that follows the story of Lee Fiora, a fourteen-year-old girl from South Bend, Indiana who attends Ault, a prestigious boarding school in Massachusetts.</p></td>
     </tbody>
     <tbody>
        <td><a href="https://www.goodreads.com/book/show/1915865.Gossip_of_the_Starlings" class="relative inline-block text-lg group">
<span class="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
<span class="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
<span class="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
<span class="relative">Check it out Here!</span>
</span>
<span class="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
</a></td>
<td><a href="https://www.goodreads.com/book/show/29751398-the-power?ref=nav_sb_ss_1_12" class="relative inline-block text-lg group">
<span class="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
<span class="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
<span class="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
<span class="relative">Check it out Here!</span>
</span>
<span class="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
</a></td>
<td><a href="https://www.goodreads.com/book/show/9844.Prep?ref=nav_sb_ss_1_4" class="relative inline-block text-lg group">
<span class="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
<span class="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
<span class="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
<span class="relative">Check it out Here!</span>
</span>
<span class="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
</a></td>
     </tbody>
   </table>

        
        
    </Container>)
}

export default About;