import React from 'react'
import LogInForm from './logForm/logInForm'
import SignUpForm from './logForm/signUpForm'
import NavMedia from './socialMedia/navMedia'

export default function TopNavbar() {
    return (
        <div >

            <div>
                <div style={{marginRight:"20px"}}>
                    <div class="d-flex flex-row-reverse">
                        <div class="p-2"><LogInForm/></div>
                        <div class="p-2"> <SignUpForm/></div>
                    </div>

                </div>
                <div>
                    <NavMedia/>
                </div>
            </div>

            
        </div>
    )
}
