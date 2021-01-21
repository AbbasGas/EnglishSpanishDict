import Word from './Word'

const Words = ({ words, onDelete, onToggle }) => {
    return (
        <>
            {words.map((word) => (
                <Word key={word.id} word={word} onDelete={onDelete} onToggle={onToggle}/>
            ))}
        </>
    )
}

export default Words
