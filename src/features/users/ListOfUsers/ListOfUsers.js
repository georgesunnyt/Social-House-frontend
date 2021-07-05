import { useGetUsersByPageQuery } from "../usersSlice";

export default function ListOfUsers(props) {
    const {data, isFetching} = useGetUsersByPageQuery(props.pageNo, {pollingInerval:0});
    return(
     <>
           <h2 className='users-title-pc-view'>{props.title}</h2>
           {data?.data.map((user)=>(
                <div key={user.id} className='single-comment'>
                    <img src={user.avatar} className='dp' alt=''></img>
                    <div>{user.first_name} {user.last_name}</div>
                </div>
            ))}
     </>
    )
}