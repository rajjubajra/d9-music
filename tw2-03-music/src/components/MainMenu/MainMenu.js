import {useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import LoadingBar from '../LoadingBar';



function MainMenu({showHideNav}) {

  const state = useSelector(state => state.reducerNav.nav_data.data);
  const length = useSelector(state => state.reducerNav.nav_dataLength);
  
 // console.log("Nav", state);  
 // console.log("Length:",length);

  return (
    <div className="grid gap-2 md:flex font-thin text-sm">
    {
        length > 0 ?
        state.map((item,index) => {
          const {attributes:{title, url}} = item;
          /** URL Manupulation in order to multiple use of main manu */
          const newurl = url.split('/');
          newurl[0] = 'd9-music';
          newurl[1] = 'themes';
          newurl[2] = 'tw2-01';
          const useUrl = newurl.join('/');
          return <div key={index}>
            <Link exact="true" 
            to={`/${useUrl}`}
            onClick={showHideNav}
            className="px-3 py-2">
              {title}
            </Link>
          </div>
        })
        : <LoadingBar />
    }
    </div>
  )
}

export default MainMenu