import Modal from 'react-modal';
import ModalProducto from "@/components/ModalProducto";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
Modal?.setAppElement('*');
import { useQuiosco } from '@/context/QuioscoProvider'

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};


const NotificacionModal = () => {
    const {modal} = useQuiosco()
  return (
    <section>

              <ToastContainer
                autoClose={1000}
              />

              {modal && (
                <Modal
                  isOpen={modal}
                  style={customStyles}
                >
                  <ModalProducto/>
                </Modal>
              )}

    </section>
  )
}

export default NotificacionModal
