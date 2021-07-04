import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch} from '@fortawesome/free-solid-svg-icons'
import './SearchUser.css'

export default function SearchUser() {
    return(
        <div className='search-page-main-container'>
            <div className='search-page-sub-container'>
                <h1>
                    <input placeholder='Search for a person'></input>
                    <button>
                    <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
                    </button>
                </h1>
            </div>
        </div>
    )
}