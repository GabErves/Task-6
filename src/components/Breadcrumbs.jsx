import { Link, useLocation} from 'react-router-dom'
import useBreadcrumbs from 'use-react-router-breadcrumbs'
import "../Breadcrumbs.css";
import Home from '../pages/Home';


const Breadcrumbs = () =>{


const routes = [
      { path: "/books/:id", breadcrumb: 'Book' },
      { path: '/books', breadcrumb: 'Books' },
      { path: '/', breadcrumb: 'Home' }

    ];

    const breadcrumbs = useBreadcrumbs(routes);
    console.log(breadcrumbs)
    const location = useLocation()



  return (
        <nav>
          {breadcrumbs.map(({ match, breadcrumb }) => (
            <Link 
            key={match.url} 
            to={match.url}
            className={match.pathname === location.pathname ? "breadcrumb-active" : "breadcrumb-not-active"}
            >
              {breadcrumb} / 
            </Link>
          ))}
        </nav>
      );

    

}
export default Breadcrumbs;