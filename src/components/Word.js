import { FaTimes } from 'react-icons/fa'

const Word = ({ word, onDelete, onToggle }) => {
    return (
        <div className={`word ${word.learned ? 'learned' : ''}`} onDoubleClick={() => onToggle(word.id)}>
            <h3>{word.english} <FaTimes style={{ color: 'green', cursor: 'pointer' }} onClick={() => {onDelete(word.id)}}/></h3>
            <p>{word.spanish}</p>
        </div>
    )
}

export default Word
