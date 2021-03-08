import styled from 'styled-components'

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    margin: 0;
  }
`

const Container = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  justify-content: center;
  flex-direction: column;
  padding: 5rem 6rem 3rem;
  margin: 0 auto;
  max-width: 900px;
  background-color: ${(props) => props.color.background};
  border-radius: 10px;
  box-shadow: -2px 7px 17px 0px rgba(0, 0, 0, 0.2);
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;

  @media screen and (max-width: 920px) {
    padding: 5rem 1.5rem 3rem;
    overflow: hidden;
  }

  @media screen and (max-width: 420px) {
    padding: 1rem 2rem 3rem;
    overflow: hidden;
  }
`

const Circle = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80px;
  height: 80px;
  border-radius: 50%;
  color: ${(props) =>
    props.popular ? props.color.font : props.color.fontInverted};
  border: 4px solid
    ${(props) => (props.popular ? props.color.font : props.color.main)};
  background-color: ${(props) =>
    props.popular ? props.color.popular : props.color.background};
  font-size: 24pt;
  z-index: 1;
`

const Card = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  max-width: 300px;
  margin-top: 30px;
  background-color: ${(props) => props.color.background};
  border-radius: 20px;
  box-shadow: -2px 7px 17px 0px rgba(0, 0, 0, 0.2);
  top: ${(props) => (props.popular ? '-20px' : '0')};
  z-index: ${(props) => (props.popular ? 1 : 0)};

  @media screen and (max-width: 420px) {
    top: 0;
    margin-top: 80px;
  }
`

const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;
  clip-path: circle(60% at 50% 15%);
  width: 100%;
  height: 200px;
  color: ${(props) =>
    props.popular ? `${props.color.font}` : `${props.color.fontInverted}`};
  background-color: ${(props) =>
    props.popular ? `${props.color.popular}` : `${props.color.main}`};
  border-radius: 20px;
`

const Title = styled.div`
  display: flex;
  align-items: center;
  font-size: 20pt;
`

const Subtitle = styled.div``

const Price = styled.div`
  text-decoration: ${(props) => (props.discount ? 'line-through' : 'none')};
`

const Discount = styled.div``

const Features = styled.div`
  display: flex;
  flex-direction: column;
  ul {
    list-style: none;
    width: 100%;
    padding: 0 30px;
    li {
      padding: 10px 0;
      font-size: 12pt;
      color: ${(props) => props.color.features};
      svg {
        position: relative;
        top: 5px;
        width: 20px;
        height: 20px;
        color: ${(props) => props.color.checkMark};
      }
      span {
        display: inline;
        margin: 0;
        padding: 0 15px 15px;
      }
    }
  }
`

const Button = styled.button`
  display: flex;
  place-content: center;
  font-size: 14pt;
  max-width: 300px;
  padding: 1rem 2rem;
  margin: 2rem 2rem 0;
  background-color: transparent;
  color: ${(props) => props.color.popular};
  border: 2px solid ${(props) => props.color.popular};
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.color.main};
  }
`

export {
  Section,
  Container,
  Card,
  Circle,
  Header,
  Title,
  Subtitle,
  Price,
  Discount,
  Features,
  Button
}
