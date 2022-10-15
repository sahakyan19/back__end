import React, {useState} from 'react'
import { FaTimes } from 'react-icons/fa'
import SendModal from './SendModal'
import './Modal.css'
import './ModalResponsive.css'

export default function Modal({showModal, setShowModal, modalActive, setModalActive, theme}) {

  const [modalInputName, setModalInputName] = useState('');
  const [modalInputMail, setModalInputMail] = useState('');
  const [modalInputMessage, setModalInputMessage] = useState('');
  const [sendModal, setSendModal] = useState(false);

  const closeModal = () => {
    setShowModal(!showModal)
    setModalActive(!modalActive)
  }

  const sendMessageModal = () => {
    setSendModal(!sendModal)
    setTimeout(() => {
      setSendModal(sendModal)
    }, 1500);
    setModalInputName('')
    setModalInputMail('')
    setModalInputMessage('')
  }

  return (
    <div className='modal-container'>
      {
        sendModal ? <SendModal theme={theme}/> : null
      }
      <form style={theme ? {color: '#fff', background: '#393f4a'} : {color: '#000'}} className='modal-form' onSubmit={(e) => e.preventDefault()}>
        <button className='modal-close' onClick={closeModal}><FaTimes/></button>
        <h3 className='modal-signup'>Message us</h3>
        <div className="modal-input-box">
          <input type="text" value={modalInputName} onChange={(e) => setModalInputName(e.target.value)} className="modal-input-name input" placeholder='Username' autoFocus required/>
          <input type="email" style={!modalInputMail.includes('@') ? {border: '1px solid red'} : {border: '1px solid green'}} value={modalInputMail} onChange={(e) => setModalInputMail(e.target.value)} className="modal-input-mail input" placeholder='E-mail' required/>
          <textarea value={modalInputMessage} onChange={(e) => setModalInputMessage(e.target.value)} className='modal-input-message input' placeholder='Message' required/>
          <button
          className="modal-button"
          style={modalInputName.length === 0 ? {background: 'gray'} : modalInputMail.length === 0 ? {background: 'gray'} : !modalInputMail.includes('@') ? {background: 'gray'} : modalInputMessage.length === 0 ? {background: 'gray'} : null}
          onClick={sendMessageModal}
          disabled={
            modalInputName.length === 0 ? true : modalInputMail.length === 0 ? true : !modalInputMail.includes('@') ? true : modalInputMessage.length === 0 ? true : false
          }
          >Send Message</button>
        </div>
      </form>
    </div>
  )
}
