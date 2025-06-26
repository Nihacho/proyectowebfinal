import React, { useState, useEffect } from 'react'
import { db } from '../firebase/config'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'
import '../styles/reservas.css'

const Reservas = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [minDate, setMinDate] = useState('')
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')

  const [formData, setFormData] = useState({
    nombre: '',
    correo: '',
    combo: '',
    fecha: '',
    hora: '',
    personas: '',
    telefono: '',
    comentarios: ''
  })

  useEffect(() => {
    setIsVisible(true)
    const today = new Date()
    const yyyy = today.getFullYear()
    const mm = String(today.getMonth() + 1).padStart(2, '0')
    const dd = String(today.getDate()).padStart(2, '0')
    setMinDate(`${yyyy}-${mm}-${dd}`)
  }, [])

  const handleChange = (e) => {
    const { id, value } = e.target
    setFormData(prev => ({
      ...prev,
      [id]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setSuccess(false)
    setLoading(true)

    const { nombre, correo, combo, fecha, hora, personas, telefono } = formData

    if (!nombre || !correo || !combo || !fecha || !hora || !personas || !telefono) {
      setError('Por favor, completa todos los campos obligatorios.')
      setLoading(false)
      return
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(correo)) {
      setError('Por favor, ingresa un correo electrónico válido.')
      setLoading(false)
      return
    }

    try {
      await addDoc(collection(db, 'reservas'), {
        ...formData,
        timestamp: serverTimestamp()
      })

      setSuccess(true)
      setFormData({
        nombre: '',
        correo: '',
        combo: '',
        fecha: '',
        hora: '',
        personas: '',
        telefono: '',
        comentarios: ''
      })
    } catch (err) {
      console.error('Error al enviar reserva:', err)
      setError('Ocurrió un error al enviar la reserva. Intenta nuevamente.')
    }

    setLoading(false)
  }

  return (
    <div className={`reservas-container ${isVisible ? 'fade-in' : ''}`}>
      <div className="reservas-header">
        <h1 className="reservas-title">Reservas</h1>
        <p className="reservas-subtitle">📅 Aceptamos reservas con 24 horas de anticipación</p>
        <p className="reservas-info">⏰ Horario de atención: 18:00 - 02:00</p>
        <p className="reservas-info">📞 Para grupos de más de 8 personas, contactar por teléfono</p>
        <p className="reservas-info">💳 Se requiere tarjeta para garantizar la reserva</p>
      </div>

      <form className="formulario-reserva" onSubmit={handleSubmit} noValidate>
        <div className="form-group">
          <label htmlFor="nombre">Nombre completo:</label>
          <input
            type="text"
            id="nombre"
            value={formData.nombre}
            onChange={handleChange}
            placeholder="Ej. Mariana López"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="correo">Correo electrónico:</label>
          <input
            type="email"
            id="correo"
            value={formData.correo}
            onChange={handleChange}
            placeholder="Ej. mariana@example.com"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="combo">Combo preferido:</label>
          <select id="combo" value={formData.combo} onChange={handleChange} required>
            <option value="">Selecciona un combo</option>
            <option value="Combo Basic">🍹 Combo Basic</option>
            <option value="Combo Killay">🥂 Combo Killay</option>
            <option value="Combo Killay XIX Gold">🏆 Combo Killay XIX Gold</option>
            <option value="Combo Romántico Luna">💕 Combo Romántico Luna</option>
            <option value="Combo Fiesta Grupal">🎉 Combo Fiesta Grupal</option>
            <option value="Combo Degustación Bartender">🎓 Combo Degustación Bartender</option>
            <option value="Ninguno">🚫 Ninguno</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="fecha">Fecha:</label>
          <input
            type="date"
            id="fecha"
            min={minDate}
            value={formData.fecha}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="hora">Hora:</label>
          <select id="hora" value={formData.hora} onChange={handleChange} required>
            <option value="">Selecciona una hora</option>
            <option>18:00</option>
            <option>19:00</option>
            <option>20:00</option>
            <option>21:00</option>
            <option>22:00</option>
            <option>23:00</option>
            <option>00:00</option>
            <option>01:00</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="personas">Número de personas:</label>
          <select id="personas" value={formData.personas} onChange={handleChange} required>
            <option value="">Selecciona número de personas</option>
            <option>2 personas</option>
            <option>3 personas</option>
            <option>4 personas</option>
            <option>5 personas</option>
            <option>6 personas</option>
            <option>7 personas</option>
            <option>8 personas</option>
            <option>Más de 8 (contactar)</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="telefono">Teléfono:</label>
          <input
            type="tel"
            id="telefono"
            value={formData.telefono}
            onChange={handleChange}
            placeholder="+591 777-12345"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="comentarios">Comentarios especiales:</label>
          <textarea
            id="comentarios"
            rows="4"
            value={formData.comentarios}
            onChange={handleChange}
            placeholder="Ej. Cumpleaños sorpresa, sin gluten, etc."
          />
        </div>

        {error && <p className="error-message">{error}</p>}
        {loading && <div className="spinner"></div>}
        {success && (
          <div className="checkmark">
            <svg viewBox="0 0 24 24">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>
        )}

        <button type="submit" className="reserva-btn" disabled={loading}>
          {loading ? 'Procesando...' : 'Confirmar Reserva'}
        </button>
      </form>
    </div>
  )
}

export default Reservas
