import React from 'react'
import { Dashboard, DashboardMenu, DashboardButtom } from '../../components'

const HomePage = () => (
  <Dashboard>
    <DashboardMenu title="Jogo da Mémoria">
      <DashboardButtom to="/game">INICIAR JOGO</DashboardButtom>
    </DashboardMenu>
  </Dashboard>
)

export default HomePage;