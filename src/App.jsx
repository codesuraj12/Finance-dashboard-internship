
import './App.css'


import { Route, Routes } from 'react-router-dom';
import Overview from './components/Overview';
import DashboardPage from './components/layout/DashboardPage';
import Transactions from './components/Transactions';
import Insights from './components/Insights';
import { AppProvider } from './context/Appcontext';


function App() {




  return (
    <>
<AppProvider>

      <Routes>
        <Route path="/" element={<DashboardPage />}>
          <Route index element={<Overview />} />
          <Route path="transactions" element={<Transactions />} />
          <Route path="insights" element={<Insights />} />
        </Route>

      </Routes>
</AppProvider>
    

    </>
  )
}

export default App
