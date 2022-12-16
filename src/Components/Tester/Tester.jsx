
import { useState } from 'react'
import './Tester.css'


const data = [
    {
        question: 'Question1',
        answer: 'Answer for lorem braAnswer for lorem bralsdkandojasnflasmdasldmaösmdasdasdadadAnswer for lorem bralsdkandojasnflasmdasldmaösmdasdasdadadlsdkandojasnflasmdasldmaösmdasdasdadad'
    },
    {
        question: 'Question2',
        answer: 'Answer for lorem braAnswer for lorem bralsdkandojasnflasmdasldmaösmdasdasdadadAnswer for lorem bralsdkandojasnflasmdasldmaösmdasdasdadadlsdkandojasnflasmdasldmaösmdasdasdadad'
    },
    {
        question: 'Question3',
        answer: 'Answer for lorem braAnswer for lorem bralsdkandojasnflasmdasldmaösmdasdasdadadAnswer for lorem bralsdkandojasnflasmdasldmaösmdasdasdadadlsdkandojasnflasmdasldmaösmdasdasdadad'
    },
    {
        question: 'Question4',
        answer: 'Answer for lorem braAnswer for lorem bralsdkandojasnflasmdasldmaösmdasdasdadadAnswer for lorem bralsdkandojasnflasmdasldmaösmdasdasdadadlsdkandojasnflasmdasldmaösmdasdasdadad'
    }

]

const Tester = () => {

    const [select, setSelect] = useState()

    function getToggle(i) {

        if (select === i) {

            setSelect()

        } else {

            setSelect(i)

        }
    }

    return (
        <section>

            {data.map((element, i) => {
                return (
                    <div key={i} className='box'>

                        <div className='item' onClick={() => getToggle(i)}>
                            <h2>{element.question}</h2>
                            <span>{select === i ? '-' : '+'}</span>
                        </div>
                        <div className={select === i ? 'showContent' : 'content'}>
                            {element.answer}
                        </div>

                    </div>
                )
            })}



        </section>
    )
}


export default Tester;