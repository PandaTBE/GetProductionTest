import React from 'react'
import gql from "graphql-tag";
import { useQuery } from '@apollo/react-hooks';
import { compose } from 'recompose';
import { graphql } from 'react-apollo';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Header from '../header/header';

const Link = styled(NavLink)`
--stripe: #cfd8dc;
  --bg: #e1e1e1;

  background: linear-gradient(135deg, var(--bg) 25%, transparent 25%) -50px 0,
    linear-gradient(225deg, var(--bg) 25%, transparent 25%) -50px 0,
    linear-gradient(315deg, var(--bg) 25%, transparent 25%),
    linear-gradient(45deg, var(--bg) 25%, transparent 25%);
  background-size: 100px 100px;
  background-color: var(--stripe);
text-decoration: none;
display: flex;
margin-top: 15px;
padding: 10px;
border: 1px solid grey;
border-radius: 10px;
width: 90%;
img {
    width: 300px;
}
@media (max-width: 767px) {
    flex-direction: column;
    align-items: center;
}
@media (max-width: 575px) {
    width: 85%;
    img {
        width: 250px;
    }
}
`
const Wrapper = styled.div`
max-width: 1140px;
margin: 0 auto;

`
const InfoTextWrapper = styled.div`
margin-left: 15px;
`
const Name = styled.div`
font-size: 40px;
    color: black;
    @media (max-width: 767px) {
    margin-top: 10px;
}

`
const Genre = styled.div`
margin-top: 16px;
    font-size: 20px;
    color: grey;

`
const Descr = styled.div`
margin-top: 15px;
    font-size: 25px;
    color: black;
`
const ArrayWrapper = styled.div`
padding: 100px 0 0 0;
display: flex;
align-items: center;
flex-direction: column;
`
export const moviesQuery = gql`
  query moviesQuery {
    movies {
      id
      name
      genre
      img
      descr
    }
  }
`;
const List = ({ loginText }) => {
    const { data, loading, error } = useQuery(moviesQuery);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error</p>;
    let newDataArr = data.movies.map(item => (
        <Link key={item.id} to='/info'>
            <div>
                <img src={item.img} alt="" />
            </div>
            <InfoTextWrapper>
                <Name>
                    {item.name}
                </Name>
                <Genre>
                    Genre: {item.genre}
                </Genre>
                <Descr>
                    {item.descr}
                </Descr>
            </InfoTextWrapper>

        </Link>
    ))
    return (
        <>
            <Header loginText={loginText} />
            <Wrapper>
                <ArrayWrapper>
                    {newDataArr}
                </ArrayWrapper>
            </Wrapper>
        </>

    );
}

export default compose(graphql(moviesQuery))(List)