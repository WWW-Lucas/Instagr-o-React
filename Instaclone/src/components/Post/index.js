import './style.css'
import { FiMoreHorizontal, FiSend } from 'react-icons/fi'
import {IoMdHeartEmpty} from 'react-icons/io'
import {BsChat, BsEmojiSmile, BsBookmark} from 'react-icons/bs'
import { IconContext } from 'react-icons'

export function Post() {
    return (
        <>
            <header className='header-post'>

                <div className="infos-post" >
                    <img className='img-header-post' src="https://th.bing.com/th/id/OIP.O4Lrw3QH_SZeKwid1-Ha7QHaK3?pid=ImgDet&rs=1" />

                    <p>elon_musk</p>

                </div>
                <FiMoreHorizontal/>
            </header>

            <div className='img-post'>

                <img src='https://th.bing.com/th/id/OIP.rlG9YPnjKdZW_nO-4OpAkgHaE8?pid=ImgDet&rs=1' />
            </div>

            <div className='footer-post' >
                <IconContext.Provider value={{size:"30px"}}>
                    
                    <section className='engagement-post'>
                        <div className='icons-1'>
                            <div className='icons'><IoMdHeartEmpty/></div>
                            <div className='icons'><BsChat/> </div>
                            <div className='icons'><FiSend/> </div>
                        </div>
                            <div className='icons'><BsBookmark/></div>
                    </section>
                </IconContext.Provider>

                <section className='like'>
                    <span>60.0000.00 curtidas</span>
                </section>

                <div className='legend'>
                    <p>
                        <strong>elon_musk </strong> About 'Carrot Cake'.
                    </p>
                </div>

                <div className='time-post'>
                    <time>HÁ 1 HORA</time>
                </div>

                <div className="comment">

                    <div className='fake-comment'>

                        <IconContext.Provider value={{size:'25px'}}>
                        <div className='icon'>
                            <BsEmojiSmile/>
                        </div>
                        </IconContext.Provider>
                        
                        <input placeholder='Adicone um comentário...'/>

                        

                    </div>

                   <button>Publicar</button>

                </div>

                

            </div>

        </>

    )
}