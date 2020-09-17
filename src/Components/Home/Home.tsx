import React, { useEffect, useState } from 'react'
import Section, { HomeSectionProps } from './Section'
import ReactMarkdown from 'react-markdown'

import './Home.css'

const Home = () => {
    let [markdown, setMarkdown] = useState('')

    useEffect(() => {
        fetch(require('../../README.md'))
            .then(response => {
                return response.text()
            })
            .then(text => {
                setMarkdown(text);
            })
    }, [])

    return (
        <div className='home-main'>
            {data.map((section : HomeSectionProps, index) => {
                return Section(section)
            })}
        </div>
    )
}

const data : Array<HomeSectionProps> = [
    {
        sectionHeader: 'О чем сайтик',
        img: {
            src: require('../../img/logo.png'),
            style: {
                width: '60%',
                marginLeft: '20%',
                borderRadius: '50%'
            }
        },
        text: [
            {type: 'p', data: 'Сайтик о моих интересах, проектах.'},
            {type: 'p', data: 'Всё что здесь будет публиковаться, это полет моей фантазии, что-то мне надо делать по работе, что-то по учебе, а что-то для себя.'},
            {type: 'p', data: 'Скорее всего здесь будет еще что-то типа блога.'}
        ]
    },
    {
        sectionHeader: 'Немного об авторе',
        img: {
            src: require('../../img/myphoto.jpeg'),
            style: {
                width: '50%',
                marginLeft: '25%',
                borderRadius: '50%'
            }
        },
        text: [
            {type: 'p', data: 'Зовут меня Миша Ершов.'},
            {type: 'p', data: 'Мне нравится создавать полноценные приложения (веб, мобильные). Когда пишу проекты, весь код - это полёт фантазии. Получаются довольно необычные, на первый взляд странные, непонятные решения, но они работают.'},
            {type: 'p', data: 'Cейчас я учусь в ИТМО, пока что не работаю.'}
        ]
    },
    {
        sectionHeader: 'Немного о моих интересах и о том, чем я занимаюсь',
        img: {
            src: require('../../img/webDev.png'),
            style: {
                width: '90%',
                paddingLeft: '5%'
            }
        },
        text: [
            {type: 'h2', data: 'Веб приложения'},
            {type: 'p', data: 'Программирую я с детства, но веб приложения начал писать относительно недавно. Началось всё с изучения Ruby, было довольно легко т.к. этот язык очень похож на python, но как-то не зашло. Потом я узнал о ReactJS, собственно сейчас я использую его, довольно хороший инструмент.'},
            {type: 'p', data: 'Бэкенд пишу в основном на NodeJS. Многие говорят, что этот язык не предназначен для этого, но, как по мне, у JS довольно большое будущее + мне нравится, что и клинтская часть и серверная чать пишутся на одном языке.'},
            {type: 'p', data: 'И тут опять же JS. Разрабатываю мобильные кроссплатформенные приложения на React Native. По мере создания приложений буду писать о них а разделе "Проектики"'},
            {type: 'h2', data: 'Мобильные приложения'},
            {type: 'p', data: 'И тут опять же JS. Разрабатываю мобильные кроссплатформенные приложения на React Native. По мере создания приложений буду писать о них а разделе "Проектики"'},
            {type: 'h2', data: '3D модельки и печать'},
            {type: 'p', data: 'Еще одно моё увлечение - это 3D моделирование и печать, довольно увлекательно что-то придумывать, а потом получать материальную копию твоих мыслей. Сейчас, конечно, больше времени уделяю разработке веб приложений (и фротенд и бэкенд), но надеюсь, что скоро и для моделирования найдется время.'},
        ]
    },
    {
        sectionHeader: 'Что умею',
        img: {
            src: require('../../img/logos.png'),
            style: {
                width: '90%',
                paddingLeft: '5%'
            }
        },
        text: [
            {type: 'ul', listData: [
                'React JS',
                'React Native',
                'Node JS',
                'MongoDB',
                'Python',
                'C++',
                'C',
                'C#',
                'MySQL',
                'MsSQL',
                'Django',
            ]}
        ]
    }
]

export default Home