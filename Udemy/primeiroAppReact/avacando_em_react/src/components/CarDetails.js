import React from "react"

const CarDetails = ({brand, km, color, newCar}) => {
  return (
    <div>
        <h2>Detalhes do carro</h2>
        <ul>
            <li>Marca do carro: {brand}</li>
            <li>Km: {km}</li>
            <li>Cor: {color}</li>
        </ul>
        {newCar && <p>Esete carro é novo</p>}
    </div>
  )
}

export default CarDetails