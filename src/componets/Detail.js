import { useEffect, useState } from 'react'
// import axios from 'axios'
import UserDetail from './UserDetail';
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from './store/detailSlice'



function Detail() {
    const dispatch = useDispatch()
    const [selectedIndex, setSelectedIndex] = useState(0);
    const users = useSelector((state) => {
        console.log('state', state);
        return state.detail.data;
    })
    // const [data, setData] = useState([])

    useEffect(() => {

        // axios.get(`https://63d0c1bc3f08e4a8ff89b455.mockapi.io/react-test`)
        //     .then((getData) => {
        //         // console.log(getData.data)
        //         setData(getData.data)
        //     })
        dispatch(fetchProducts())

    }, [dispatch]);
    return (
        <div className='main'>
            <div className="side-wrapper">
                {
                    users.map((user, index) => (
                        <div className="side-card" key={user.id} onClick={e => setSelectedIndex(index)}>
                            <span><b>Name</b>: {user.Name}  </span><br />
                            <span> <b>Email</b>: {user.Email}  </span><br />
                            <span><b>Country</b>:  {user.Country} </span>

                            {/* <button className='del'><i className="fas fa-trash-can"></i></button> */}
                        </div>
                    ))
                }
            </div>
            <UserDetail selectedIndex={selectedIndex} />
        </div>
    )
}

export default Detail
