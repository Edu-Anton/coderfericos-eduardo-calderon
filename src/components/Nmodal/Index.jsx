import React from 'react'
import './Nmodal.scss';

const Nmodal = ({handleCloseModal, postOrder}) => {
  return (
    <div className="vmodal__overlay">
      <div className="card w-25">
        <div className="card-header text-center py-3">
          Coderféricos
          <span className="border rounded-circle px-2 bg-secondary float-end text-light" onClick={handleCloseModal}>x</span>
          
        </div>
        <div className="card-body p-4">
          <div className="border border-primary p-2 mb-3">
            <i className="bi bi-envelope me-3"></i>
            ed@gmail.com
          </div>
          <div className="border border-bottom-0 border-primary p-2">
            <i className="bi bi-credit-card me-3"></i>
            9897 5675 4675 5677
          </div>
          <div className="d-flex">
            <div className="border border-end-0 border-primary w-50 p-2">
              <i className="bi bi-calendar me-3"></i>
              12/24
            </div>
            <div className="border border-primary w-50 p-2">
              <i className="bi bi-lock me-3"></i>
              123
            </div>
          </div>
          <div className="border border-primary mt-3 p-2">
            <i class="bi bi-check2-square me-2"></i>
            Recordarme
          </div>
          <div>

          </div>
          
          <button className="btn bg-red text-light w-100 py-3 mt-4 d-block" onClick={postOrder}>Realizar Pago</button>
        </div>
      </div>
    </div>
  )
}

export default Nmodal
