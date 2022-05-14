import {AiOutlineSearch, AiFillHome } from 'react-icons/ai'
import { RiMessengerLine } from 'react-icons/ri'
import { BsPlusSquare } from 'react-icons/bs'
import {MdOutlineExplore} from 'react-icons/md'
import {FiHeart} from 'react-icons/fi'

import { IconContext } from 'react-icons'

import './style.css'

export function Header() {
    
    return (
        <header className="header" >

            <div className="container" >

                <img className='logo' src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"/>

                <div className="input-fake">
                    <IconContext.Provider value={{ color: '#8e8e8e' }}>
                        <AiOutlineSearch />
                    </IconContext.Provider>
                    <input placeholder='pesquisar' />
                </div>

                <div className='menu-icons'>
                    <IconContext.Provider value={{ size: '26px' }}>
                        <div>
                            <AiFillHome />
                        </div>
                        
                        <div>
                            <RiMessengerLine />
                        </div>

                        <div>
                            <BsPlusSquare />
                        </div>

                        <div>
                            <MdOutlineExplore />
                        </div>

                        <div>
                            <FiHeart />
                        </div>

                    </IconContext.Provider>
                    <img className="img-user" src='https://pps.whatsapp.net/v/t61.24694-24/254827303_682036319640052_7265659683342772687_n.jpg?ccb=11-4&oh=59c87e40f45efe68a3811c99ce94ff7c&oe=627F7C72' />
                </div>

            </div>

        </header>
    )
}