// Write your code here
import {List, NoteHead, NoteDesc} from './styledComponents'

const NoteItem = props => {
  const {noteDescription} = props
  const {title, desc} = noteDescription
  return (
    <List>
      <NoteHead>{title}</NoteHead>
      <NoteDesc>{desc}</NoteDesc>
    </List>
  )
}

export default NoteItem
