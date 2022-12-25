import { FC, useEffect, useState } from 'react'
import { useContract, useContractRead } from '@thirdweb-dev/react'
import { BigNumber } from 'ethers'
import { format } from 'date-fns'

import { formatAddress } from '@utils'
import searchIcon from '@assets/search.svg'

import './MainContent.css'

type DataTable = {
  owner: string
  title: string
  story: string
  goal: number
  deadline: string
}

const MainContent: FC = () => {
  const [dataTable, setDataTable] = useState<DataTable[]>([])

  const { contract } = useContract('0x25dDFDFD6bab1C61Dad40AcC947Cf9Ba2A9Df7C1')
  const { data, error, isLoading } = useContractRead(contract, 'getCampaigns')

  useEffect(() => {
    const mappedData = data?.map((item: any) => {
      return {
        owner: formatAddress(item[0]),
        title: item[1],
        story: item[2],
        goal: BigNumber.from(item[3]).toNumber(),
        deadline: format(BigNumber.from(item[4]).toNumber(), 'PPp'),
      }
    })
    setDataTable(mappedData)
  }, [data])

  return (
    <div className="main-content__wrapper">
      <div className="input-container">
        <input type="text" className="input-container__input common-input" placeholder="Search by name" />
        <button className="secondary-btn input-container__btn">
          Search
          <img src={searchIcon} alt="Search" className="mb-1 w-4" />
        </button>
      </div>
      <h2 className="heading-2 heading">List of Campaigns</h2>
      <div className="table-container">
        <table className="table-container__table">
          <thead className="table-header-group">
            <tr>
              <th>Campaign</th>
              <th>Owner</th>
              <th>Story</th>
              <th>Goal</th>
              <th>End date</th>
            </tr>
          </thead>
          <tbody>
            {dataTable?.map((item, index) => (
              <tr key={index}>
                <td>{item.title}</td>
                <td>{item.owner}</td>
                <td>{item.story}</td>
                <td>{item.goal}</td>
                <td>{item.deadline}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default MainContent
