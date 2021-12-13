import React,{useState} from 'react'
import SignUpToggle from './signUpToggle'
import Alert from './alert'

function SignUpForm() {
      const [alert, setAlert] = useState(null)


  const showAlert = (message , type) =>{

    setAlert({
      msg : message,
      type : type
    })

    setTimeout(() => {

      setAlert(null)
      
    }, 1500);
  }
    return (
        <div>

            {/* <!-- Button trigger modal --> */}
            <button type="button" className="topNav-btn px-3" data-bs-toggle="modal" data-bs-target="#staticBackdropSignUp">
                SignUp
            </button>

                {/* <!-- Modal --> */}
            <div className="modal fade" id="staticBackdropSignUp" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="staticBackdropLabel">Sign Up</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <Alert alert = {alert}/>
                        <SignUpToggle showAlert = {showAlert}/>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                    </div>
                </div>
                </div>
            
        </div>
    )
}

export default SignUpForm
