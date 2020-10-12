import React from 'react'

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './style.scss'

function TeacherItem(){
    return (
        <article className='teacher-item'>
            <header>
            <img src='https://avatars2.githubusercontent.com/u/35570019?s=460&u=23c3a618517b9b11d410cdb66a797eb9bc3873b7&v=4'/>
            <div>
                <strong>Murilo Silvani</strong>
            </div>
            </header>
            <p>
                blabla
                <br/><br/>
                blablablabla blablablabla blablablabla blablablabla blablablabla 
            </p>
            <footer>
                <p>
                    Preço por Hora
                    <strong>R$ 1000,00</strong>
                </p>
                <button>
                    <img src={whatsappIcon}/>
                    Entrar em contato
                </button>
            </footer>
        </article>
    )
}

export default TeacherItem