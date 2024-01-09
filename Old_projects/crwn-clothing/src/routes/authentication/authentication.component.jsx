import './authentication.style.scss'

import SignUpForm from '../../component/sign-up/sign-up-form.component';
import SignInForm from '../../component/sign-in/sign-in-form.component';

const Authentication = () => {

    return (
        <div className='authentication-container'>
            <SignInForm />
            <SignUpForm />
        </div>
    )
}
export default Authentication;