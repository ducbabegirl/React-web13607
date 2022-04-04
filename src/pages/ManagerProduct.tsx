import React from 'react'
import { ProductType } from '../types/produc'
import { Link } from 'react-router-dom'
import '../detai.css'

type ManagerProductProps = {
  data: ProductType[]
  onRemove: (id: number) => void
}

const ManagerProduct = (props: ManagerProductProps) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {props.data && props.data.map((item, index) => {
            return <><br /><tr key={index}>
              <td>{index + 1}</td>
              <td>{item.name}</td>
              <td>{item.price}</td>
             
              <td>
                <div className="button">
                  <Link to={`/admin/product/${item.id}/edit`}>Edit</Link>
                </div>
              </td>
              <td>
                <div className="button" onClick={() => props.onRemove(item.id)}>
                  <a href="">Delete</a>
                </div>
              </td>
            </tr></>
          })}

        </tbody>
      </table>
    </div>
  )
}

export default ManagerProduct