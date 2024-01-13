// import { useState, useEffect } from "react"
import { useLoaderData } from "react-router-dom"


function Github() {

    // const [data, setData] = useState([])

    // useEffect(() => {
    //     fetch('https://api.github.com/users/ranjan3nov')
    //         .then(res => res.json())
    //         .then(
    //             data => {
    //                 console.log(data);
    //                 setData(data);
    //             }
    //         )
    // }, [])

    const data = useLoaderData();
    return (
        <div className='text-center text-white bg-gray-600 text-3xl'>
            Github Follower {data.followers}
            <img className="" src={data.avatar_url} width={300} />
        </div>
    )
}

export default Github

