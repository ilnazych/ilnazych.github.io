import { Table } from 'antd'
import './App.css'
import { columns } from './assets'
import { ModalWindow } from './components/modal/ModalWindow'
import { useSelector } from 'react-redux'
import { InitialState } from './assets/types'
import { SearchEngine } from './components/search/Search'

function App() {

  const filtredData = useSelector((state: InitialState) => state.toolkit.filtredData)
  const data = useSelector((state: InitialState) => state.toolkit.data)
  return (
    <>
      <SearchEngine />
      <ModalWindow />
      <Table columns={columns} dataSource={filtredData.length > 0 ? filtredData : data} />
    </>
  )
}

export default App
