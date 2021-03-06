import React, { useEffect, useState } from 'react'
import './styles.css'
import logoImg from '../../assets/logo.svg'
import { Link, useHistory} from 'react-router-dom'
import { FiPower, FiTrash2 } from 'react-icons/fi'
import api from '../../services/api'

export default function Profile() {
    const ongName = localStorage.getItem('ongName')
    const ongId = localStorage.getItem('ongId')
    const [incidents, setIncidents] = useState([])
    const history = useHistory()
    useEffect(() => {
        api.get('profile', {
            headers: { Authorization: ongId }
        }).then(response => {
            setIncidents(response.data)
        })
    }, [ongId])
    async function handleDeleteIncidente(id) {
        try {
            await api.delete(`incidents/${id}`, {
                headers: {
                    Authorization: ongId
                }
            })
            setIncidents(incidents.filter(incidents => incidents.id !== id))
        } catch (error) {
            alert('Erro ao deletar caso')
        }
    }
    function handleLogout() {
        localStorage.clear()
        history.push('/')
    }
    return (

        <div className="profile-container">
            <header>
                <img src={logoImg} alt='be the hero' />
                <span>Bem vinda, {ongName}</span>
                <Link to='/incidents/new' className='button'>Cadastrar novo caso</Link>
                <button type='button' onClick={handleLogout}>
                    <FiPower size={18} color='#E02041' />
                </button>
            </header>

            <h1>Casos cadastrados</h1>
            <ul>
                {incidents.map(incidents => (
                    <li key={incidents.id}>
                        <strong>CASO:</strong>
                        <p>{incidents.title}</p>
                        <strong>DESCRIÇAO:</strong>
                        <p>{incidents.description}</p>
                        <strong>VALOR:</strong>
                        <p>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(incidents.value)}</p>

                        <button type='button' onClick={() => handleDeleteIncidente(incidents.id)}>
                            <FiTrash2 size={20} color='#a8a8b3' />
                        </button>
                    </li>))}
            </ul>
        </div>
    )
}