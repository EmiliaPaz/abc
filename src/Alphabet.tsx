import ListGroup from 'react-bootstrap/ListGroup'
import Row from 'react-bootstrap/Row'

const Alphabet = ({word} : { word : string[]}) => {
  let alphabet = new Map<string, string>([
    ["a", "apple"],
    ["b", "baby"],
    ["c", "car"],
    ["d", "dad"],
    ["e", "eye"],
    ["f", "fire"],
    ["g", "girl"],
    ["h", "home"],
    ["i", "item"],
    ["j", "job"],
    ["k", "key"],
    ["l", "long"],
    ["m", "map"],
    ["n", "name"],
    ["o", "one"],
    ["p", "page"],
    ["q", "question"],
    ["r", "red"],
    ["s", "space"],
    ["t", "table"],
    ["u", "unit"],
    ["v", "view"],
    ["w", "water"],
    ["x", "xylophone"],
    ["y", "yellow"],
    ["z", "zebra"]
  ]);

  return (
    <Row>
      <ListGroup variant="flush">
        {word.map((item: string) => (
          <ListGroup.Item>
            <b>{item.toUpperCase()}</b>{alphabet.get(item.toLowerCase())?.substring(1)}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Row>
  )

}
export default Alphabet;