import Container from '../components/Container';
import {useParams} from 'react-router-dom';
import { useState, useEffect } from 'react';
import useBreadcrumbs from 'use-react-router-breadcrumbs';
import { Link, useNavigate} from 'react-router-dom';
import Breadcrumbs from '../components/Breadcrumbs';
import Books from './Books';


const Book = () => {

    

    const params = useParams();

    console.log(params["id"]);
    const navigate = useNavigate()

    
    const [book, setBook] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const getData = async () => {
        const url = `https://api.matgargano.com/api/books/${params["id"]}`;
        setLoading(true);
        setError(false);
        try {
            const request = await fetch(url);
            const response = await request.json();
            setBook(response);
           
        } catch(e) {
            setError('Error: ' + e.message);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getData();
    }, []);


    return (
    <Container>
     {/* <Breadcrumbs/> */}
    {/* <div> */}
    <div key={params.id}>
        {/* <pre>{JSON.stringify(params,0,1)}</pre> */}
        {/* <h1>{book.id}</h1> */}
        {/* <h1>{params["author"]}</h1> */}
        {/* <h2>{book.author}</h2>
        <h2>{book.publisher}</h2>
        <h2>{book.year}</h2>
        <h2>{book.pages}</h2>
        <h2>{book.country}</h2> */}
        {/* <img src={book.imageURL}></img> */}

<div className="card-size">
  <div className="flex flex-col rounded-lg bg-white shadow-lg dark:bg-neutral-700 md:max-w-xl md:flex-col">
    <img
      className="card-image"
      src={book.imageURL}
      alt="" />
    <div className="flex flex-col justify-start p-6">
      <h5
        className="mb-2 text-xl font-medium text-neutral-800 dark:text-neutral-50">
        {book.title}
      </h5>
      <h5
        className="mb-2 text-xl font-small text-neutral-800 dark:text-neutral-50">
       {book.author}
      </h5>
      <img src='https://t3.ftcdn.net/jpg/04/20/03/48/360_F_420034841_AKpgqQGkkUyeD7oWc9y8vGTMwT4GmbHm.jpg'></img>
      <p>Rating: 4 out of 5</p>
      <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
      "This Book" is a gripping tale of a group of explorers who embark on a journey to discover the lost city of Atlantis. The story follows the journey of the team, led by the charismatic and ambitious archaeologist, Dr. Alex Taylor. 
      </p>
      <p className='book'>Page count: {book.pages}</p>
      <p className='book'>Published in: {book.country}</p>
      <p className='book'>Year Published: {book.year}</p>
      <p className='book'>Publisher: {book.publisher}</p>
      
      <p className="text-xs text-neutral-500 dark:text-neutral-300">
        Book ISBN: {book.id}
      </p>
    </div>
  </div>
  </div>


<div id="button" >
<a href="#_" onClick={() => navigate ("/books")} className="relative px-6 py-3 font-bold text-black group">
<span class="absolute inset-0 w-full h-full transition duration-300 ease-out transform -translate-x-2 -translate-y-2 bg-red-300 group-hover:translate-x-0 group-hover:translate-y-0"></span>
<span class="absolute inset-0 w-full h-full border-4 border-black"></span>
<span class="relative">Go Back</span>
</a>
</div>

    </div>
        
    </Container>)
}

export default Book;