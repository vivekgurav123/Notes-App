// Style your elements here
import styled from 'styled-components'

export const Container = styled.div`
  max-width: 1140px;
  margin: auto;
`

export const Heading = styled.h1`
  font-family: 'Bree Serif';
  text-align: center;
  color: #4c63b6;
`
export const Form = styled.form`
  box-shadow: 0px 0px 26px -3px rgba(120, 108, 108, 0.62);
  border-radius: 10px;
  padding: 30px 50px;
`
export const Title = styled.input`
  width: 100%;
  border: none;
  margin-bottom: 10px;
`
export const Desc = styled.textarea`
  width: 100%;
  border: none;
  margin-bottom: 10px;
`
export const Button = styled.button`
  background-color: #4c63b6;
  border: none;
  padding: 7px 15px;
  color: white;
  border-radius: 3px;
  cursor: pointer;
`
export const BtnContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`
export const UlList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  gap: 2rem;
`
export const EmptyCont = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 30px;
`
export const Content = styled.div`
  text-align: center;
`
