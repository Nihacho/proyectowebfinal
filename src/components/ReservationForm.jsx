import React, { useState } from 'react'
import { collection, addDoc } from 'firebase/firestore'
import { db } from '../firebase/config'

const ReservationForm = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    plan: '',
    fecha: '',
    hora: '',
    telefono: '',
    email: '',
    comentarios: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')

  const planes = [
    'Plan Básico - $50',
    'Plan Premium - $80',
    'Plan VIP - $120',
    'Plan Grupal - $200'
  ]

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      // Guardar en Firebase
      await addDoc(collection(db, 'reservas'), {
        ...formData,
        fechaCreacion: new Date(),
        estado: 'pendiente'
      })
      
      setSubmitMessage('¡Reserva enviada exitosamente!')
      setFormData({
        nombre: '',
        plan: '',
        fecha: '',
        hora: '',
        telefono: '',
        email: '',
        comentarios: ''
      })
    } catch (error) {
      console.error('Error al enviar reserva:', error)
      setSubmitMessage('Error al enviar la reserva. Por favor intenta nuevamente.')
    }
    
    setIsSubmitting(false)
    setTimeout(() => setSubmitMessage(''), 5000)
  }

  return (
    <div className="reservation-form-container">
      <h2>Realizar Reserva</h2>
      <form onSubmit={handleSubmit} className="reservation-form">
        <div className="form-group">
          <label htmlFor="nombre">Nombre completo:</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={formData.nombre}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="plan">Seleccionar plan:</label>
          <select
            id="plan"
            name="plan"
            value={formData.plan}
            onChange={handleInputChange}
            required
          >
            <option value="">Selecciona un plan</option>
            {planes.map((plan, index) => (
              <option key={index} value={plan}>{plan}</option>
            ))}
          </select>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="fecha">Fecha:</label>
            <input
              type="date"
              id="fecha"
              name="fecha"
              value={formData.fecha}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="hora">Hora:</label>
            <input
              type="time"
              id="hora"
              name="hora"
              value={formData.hora}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="telefono">Teléfono:</label>
          <input
            type="tel"
            id="telefono"
            name="telefono"
            value={formData.telefono}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="comentarios">Comentarios adicionales:</label>
          <textarea
            id="comentarios"
            name="comentarios"
            value={formData.comentarios}
            onChange={handleInputChange}
            rows="4"
          />
        </div>

        <button type="submit" disabled={isSubmitting} className="submit-btn">
          {isSubmitting ? 'Enviando...' : 'Enviar Reserva'}
        </button>

        {submitMessage && (
          <div className={`submit-message ${submitMessage.includes('Error') ? 'error' : 'success'}`}>
            {submitMessage}
          </div>
        )}
      </form>
    </div>
  )
}

export default ReservationForm