
import { useEffect, useState } from 'react'
import './FaqSite.css'



export default function FaqSite() {


    const [select, setSelect] = useState(true)


    const showResult = () => {

        if (select === true) {
            setSelect(false)

        } else {
            setSelect(true)

        }

    }



    return (
        <section >

            <article className='article1' onClick={showResult} >
                <h2>Why is React great?</h2>
                <button>{select === true ? '+' : '-'}</button>
            </article>

            <article className={select === true ? 'article2' : 'showArticle2 '} ><p>Fast Learning Curve</p></article>

        </section>
    )
}
