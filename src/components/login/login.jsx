import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../redux/authReducer'
import { useSelector } from 'react-redux'
import List from '../list/list'
import styled from 'styled-components';
const Wrapper = styled.div`
max-width: 1140px;
margin: 0 auto;
display: flex;
justify-content: center;
align-items: center;
padding: 100px 0 0 0;
`
const Form = styled.form`
display: flex;
flex-direction: column;
align-items: center;
width: 100%;
`
const Input = styled.input`
box-sizing: border-box;
border: 1px solid grey;
width: 90%;
height: 50px;
margin-top: 15px;
padding: 10px;
font-size: 15px;
border-radius: 10px;
`
const Button = styled.button`
border: 1px solid grey;
border-radius: 10px;
box-sizing: border-box;
width: 90%;
height: 50px;
margin-top: 15px;
padding: 10px;
font-size: 15px;
`
const FormWrapper = styled.div`
min-height: 300px;
border: 1px solid grey;
border-radius: 10px;
padding-bottom: 15px;
width: 350px;
display: flex;
justify-content: center;
align-items: center;
--stripe: #cfd8dc;
  --bg: #e1e1e1;

  background: linear-gradient(135deg, var(--bg) 25%, transparent 25%) -50px 0,
    linear-gradient(225deg, var(--bg) 25%, transparent 25%) -50px 0,
    linear-gradient(315deg, var(--bg) 25%, transparent 25%),
    linear-gradient(45deg, var(--bg) 25%, transparent 25%);
  background-size: 100px 100px;
  background-color: var(--stripe);
  @media (max-width: 575px) {
      width: 270px;
  }
`

const Login = () => {
    const [loginText, setLoginText] = useState('')
    const [passwordText, setPasswordText] = useState('')
    const dispatch = useDispatch()

    const onLoginChange = () => (e) => {
        setLoginText(e.target.value)
    }
    const onPasswordChange = () => (e) => {
        setPasswordText(e.target.value)
    }
    const onLoginFormSubmit = () => (e) => {
        dispatch(login())
    }
    const auth = useSelector(state => state.auth.isAuth)
    if (auth) return <List loginText={loginText} />
    return (
        <Wrapper>
            <FormWrapper>
                <Form onSubmit={onLoginFormSubmit()}>
                    <Input placeholder='Login' required value={loginText} onChange={onLoginChange()} />
                    <Input placeholder='Password' type="password" required value={passwordText} onChange={onPasswordChange()} />
                    <Button>Login</Button>
                </Form>
            </FormWrapper>

        </Wrapper>
    )
}
export default Login