import { useGetUsersByPageQuery } from "../usersSlice";

export default function ListOfUsers(props) {
    const {data, isFetching} = useGetUsersByPageQuery(props.pageNo, {pollingInterval:0});
    let loadingData = []
    for(let i=0; i<6; i++) {
        loadingData.push({id:i,name:'loading'})
    }

    return(
     <>
           <h2 className='users-title-pc-view'>{props.title}</h2>
           {!isFetching? data?.data.map((user)=>(
                <div key={user.id} className='single-comment'>
                    <img src={user.avatar} className='dp' alt=''></img>
                    <div>{user.first_name} {user.last_name}</div>
                </div>
            )): loadingData.map((user)=>(
                <div key={user.id} style={{height:'5vh', minWidth:'15vw'}}className='single-comment loading'>
                    <div>{user.name}</div>
                </div>
            ))
            }
     </>
    )
}