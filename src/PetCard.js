import React from 'react'

function PetCard(props) {
  // console.log(props.snack)

  // Loop through array using map. Returns new array.
  const snackArr = props.snack.map((strSnack) => {
    return <li>{strSnack}</li>
  })

  console.log("snackArr", snackArr)

  return (
    <div className="card">
      <h2>{props.name}</h2>
      <img src={props.image} alt={props.name} />
      <h3>Snacks</h3>
      <ul>
        {snackArr}
      </ul>
    </div>
  )
}

export default PetCard