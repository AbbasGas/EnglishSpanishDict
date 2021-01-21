import { useState } from 'react'

const AddWord = ({ onAdd }) => {
    const [english, setEnglish] = useState('')
    const [spanish, setSpanish] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()

        if(!english || !spanish) {
            alert('Please add word')
            return
        }

        onAdd({ english, spanish })

        setEnglish('')
        setSpanish('')
    }

    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>Englis Word</label>
                <input type="text" placeholder='Add Word' value={english} onChange={(e) => setEnglish(e.target.value)}/>
            </div>
            <div className='form-control'>
                <label>Spanish Word</label>
                <input type="text" placeholder='Add Word' value={spanish} onChange={(e) => setSpanish(e.target.value)}/>
            </div>

            <input type="submit" value='Save Word' className='btn btn-block'/>
        </form>
    )
}

export default AddWord
