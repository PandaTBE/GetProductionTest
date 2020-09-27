import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { logout } from '../redux/authReducer';

const HeaderWrapper = styled.div`
box-sizing: border-box;
position: fixed;
background-color: #615555;
display: flex;
justify-content: space-between;
align-items: center;
width: 100%;
height: 70px;
padding: 0 30px;
`
const Films = styled.div`
color: #fff;
    font-size: 30px;
`
const UserWrapper = styled.div`
display: flex;
align-items: center;
`
const Name = styled.div`
color: #fff;
font-size: 20px;
margin-right: 10px;
@media (max-width: 575px) {
    display: none;
}
`
const Button = styled.button`
border: 1px solid grey;
border-radius: 10px;
min-height: 30px;
`

const Header = ({ loginText }) => {
    const dispatch = useDispatch()
    const onButtonLogOut = () => () => {
        dispatch(logout());
    }
    return (
        <HeaderWrapper>
            <Films>
                Films
            </Films>
            <UserWrapper>
                <Name>{loginText}</Name>
                <Button onClick={onButtonLogOut()}>Logout</Button>
            </UserWrapper>
        </HeaderWrapper>
    )
}

export default Header