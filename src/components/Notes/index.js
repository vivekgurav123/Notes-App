// Write your code here
import {useState} from 'react'
import {v4 as v4uuid} from 'uuid'
import NoteItem from '../NoteItem'

import {
  Container,
  Heading,
  Form,
  Title,
  Desc,
  Button,
  BtnContainer,
  UlList,
  EmptyCont,
  Content,
} from './styledComponents'

const Notes = () => {
  const [title, setTitle] = useState('')
  const [desc, setDesc] = useState('')
  const [notesList, setNotesList] = useState([])

  const onNoteAdd = e => {
    e.preventDefault()

    const newNote = {
      id: v4uuid(),
      title,
      desc,
    }
    setNotesList(prevState => [...prevState, newNote])
    setTitle('')
    setDesc('')
  }

  const onTitleChange = e => {
    setTitle(e.target.value)
  }

  const onDescChange = e => {
    setDesc(e.target.value)
  }

  const emptyView = () => (
    <EmptyCont>
      <Content>
        <img
          src="https://assets.ccbp.in/frontend/hooks/empty-notes-img.png"
          alt="notes empty"
        />
        <h1>No Notes Yet</h1>
        <p>Notes you add will appear here</p>
      </Content>
    </EmptyCont>
  )

  return (
    <Container>
      <Heading>Notes</Heading>
      <Form onSubmit={onNoteAdd}>
        <div>
          <Title
            type="text"
            placeholder="Title"
            value={title}
            onChange={onTitleChange}
          />
        </div>
        <div>
          <Desc
            rows="4"
            cols="50"
            placeholder="Take a Note..."
            value={desc}
            onChange={onDescChange}
          />
        </div>
        <BtnContainer>
          <Button type="submit">Add</Button>
        </BtnContainer>
      </Form>
      <div>
        {notesList.length === 0 ? (
          emptyView()
        ) : (
          <UlList>
            {notesList.map(eachNote => (
              <NoteItem key={eachNote.id} noteDescription={eachNote} />
            ))}
          </UlList>
        )}
      </div>
    </Container>
  )
}

export default Notes
