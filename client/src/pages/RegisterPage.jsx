import React from 'react'
import "../styles/register.css"

const RegisterPage = () => {
  return (
    <div className='bg'>
      <div className='register'>
     
        <div className='register_content'>
          <p className='formtext'>Register Now</p>
            <form action="">
                <input type="text" placeholder='First Name' name='firstname' required />
                <input type="text" placeholder='Last Name' name='lastname' required />
                <input type="email" placeholder='Email' name='email' required />
                <input type="password" placeholder='Password' name='password' required />
                <input type="password" placeholder='Confirm Password' name='confirmpassword' required />
                <input id='img' type="file" name="profileImage" accept='image/*' style={{display: 'none'}} required/>
                <label htmlFor='img'> 
                    <img src="/assets/addImage.png" alt="add profile pic" />
                    <p>Upload Your Photo</p>
                </label>
                <button type='submit'>REGISTER</button>
            </form>
            <a href="/login">Already have an account? Log In Here</a>
        </div>
    </div>
    </div>
      
    
  )
}

export default RegisterPage