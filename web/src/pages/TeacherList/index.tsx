import React from 'react'

import PageHeader from '../../components/PageHeader'
import Input from '../../components/Input'
import Select from '../../components/Select'

import './style.scss'
import TeacherItem from '../../components/TeacherItem'

function TeacherList(){
    return (
        <div id="page-teacher-list" className='container'>
            <PageHeader title='Estes são os proffys disponiveis.' >
                <form id='search-teachers'>

                {/* 1:42 */}

                    <Select
                        name='subject'
                        label='Matéria'
                        options={[
                            { value: 'artes', label: 'Artes' },
                            { value: 'artes', label: 'Artes' },
                            { value: 'artes', label: 'Artes' },
                            { value: 'artes', label: 'Artes' },
                            { value: 'artes', label: 'Artes' }
                        ]}
                    />
                    <Select
                        name='week_day'
                        label='Dia da seman'
                        options={[
                            { value: '0', label: 'Domingo' },
                            { value: '1', label: 'Segunda' },
                            { value: '2', label: 'Terça' },
                            { value: '3', label: 'Quarta' },
                            { value: '4', label: 'Quinta' },
                            { value: '5', label: 'Sexta' },
                            { value: '6', label: 'Sabado' }
                        ]}
                    />
                    <Input type='time' name='time' label='Hora' />

                </form>
            </PageHeader>

            <main>
                <TeacherItem />
            </main>
        </div>
    )
}

export default TeacherList