
import Form from "react-bootstrap/Form";
import Row from 'react-bootstrap/Row'

const WordInput = ({handleInput}: {handleInput: (word: string) => void}) => {

  return (
    <Form.Group>
      <Row style={{
        marginTop: 10,
        marginBottom: 10
      }}>
        <Form.Control
          type="text"
          placeholder="Enter word"
          onChange={(e) => handleInput(e.currentTarget.value)}/>
      </Row>
    </Form.Group>
  )
}

export default WordInput;