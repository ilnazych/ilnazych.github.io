import { Table } from 'antd'
import './App.css'
import { columns } from './assets'
import { ModalWindow } from './components/modal/ModalWindow'
import { useSelector } from 'react-redux'
import { initialState } from './assets/types'

function App() {

  const data = useSelector((state: initialState) => state.toolkit.data)

  return (
    <>
      <ModalWindow />
      <Table columns={columns} dataSource={data} />;
    </>
  )
}

export default App
