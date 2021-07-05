import './Users.css'
import SearchUser from './SearchUser/SearchUser';
import ListOfUsers from './ListOfUsers/ListOfUsers';

export default function Users(props) {

    return(
        <>
            <div className='users-page-container'>
                <SearchUser></SearchUser>
                <div className='users-list-main-flex-container'>
                    <h2 className='users-title-mobile-view'>People you follow</h2>
                    <div className='users-list-flex-item-container'>
                        <ListOfUsers title={'People you follow'} pageNo={'1'}></ListOfUsers>
                    </div>
                    <h2 className='users-title-mobile-view'>People who follow you</h2>
                    <div className='users-list-flex-item-container'>
                        <ListOfUsers title={'People who follow you'} pageNo={'1'}></ListOfUsers>
                    </div>
                    <h2 className='users-title-mobile-view'>People you might know</h2>
                    <div className='users-list-flex-item-container'>
                        <ListOfUsers title={'People you might know'} pageNo={'2'}></ListOfUsers>
                    </div>
                </div>
            </div>
        </>
    )
}