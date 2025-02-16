import { useEffect, useState } from "react"

const FetchingData = () => {
    const[users, setUsers] = useState([])
    
    useEffect(() => {
        const getProducts = fetch("https://www.jsonplaceholder.org/")
        getProducts
            .then((res) => res.json())
            .then((res) => console.log(res))
            .catch((error) => console.log(error))
    }, [ ])

    // const createUser => {}



    return (
        <div>
            {users.map((user) =>{
                return (
                    <div key= {user.id}>
                        <h2>{user.firstname}</h2>
                        <h2>{user.lastname}</h2>
                    </div>
                )
            })}
        </div>
    )

}

export default FetchingData