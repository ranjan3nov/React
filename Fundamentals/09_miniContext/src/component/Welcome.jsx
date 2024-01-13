import { useContext } from 'react'
import UserContext from '../context/UserContext'

function Welcome() {

    const { user } = useContext(UserContext)

    if (!user) return <div>Please Login</div>

    return <div>Welcome {user.uername}</div>
}

export default Welcome
