import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ErrorAlert from '../components/ErrorAlert';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import Breadcrumbs from '../components/Breadcrumbs';

const Books = () => {

    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const getData = async () => {
        const url = 'https://api.matgargano.com/api/books';
        setLoading(true);
        setError(false);
        try {
            const request = await fetch(url);
            const response = await request.json();
            setBooks(response);
           
        } catch(e) {
            setError('Error: ' + e.message);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getData();
    }, []);


    return <>
    {/* <Breadcrumbs/> */}
    <h2>Our Catalog</h2>
        {error && <ErrorAlert>{error}</ErrorAlert>}
        {!error && loading && <div className="max-w-[230px]"><Skeleton count="10" /></div>}
        {!error && !loading && 
            <>
            <div className="grid grid-cols-4 gap-4">
                
            {books.map(book => {
                return(
            
                    <div key={book.id}>
                <div class="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5"></div>
                       <Link className='hover:underline' to={`/books/${book.id}`}>
                    <div class="max-w-sm rounded overflow-hidden shadow-lg">
  <img class="w-full" src={book.imageURL} alt="Sunset in the mountains"/>
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">{book.title}</div>
    <p class="text-gray-700 text-base">
      {book.author}
    </p>
  </div>
  <div class="px-6 pt-4 pb-2">
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#currentlyreading</span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#booklover</span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#bookcommunity</span>
  </div>
</div>

                    </Link>
                   
                  
                
                   
                   
                </div>
               

                ) 
              
            })}

            </div>
                   
            </>
        }

    
    </>
}

export default Books;