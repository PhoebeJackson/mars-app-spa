import React, {useState} from 'react';
import Select from 'react-select';

const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
]

function SelectForm(){
    let value: string = ''
    let label: string = 'Unknown'
    const [selection, setSelection] = useState({value: value, label: label});
    const handleSelectionChange = (event: {value: string, label: string} | null) => {
        const myEvent = event || { value: 'borken', label: 'Broken' }
        setSelection({value: myEvent.value, label: myEvent.label})
    }
    return (
        <section>
            <Select id={"mySelectForm"} options={options} onChange={(event) => {handleSelectionChange(event)}}/>
            <p>You picked {selection.label}</p>
        </section>
    )
}

export default SelectForm

