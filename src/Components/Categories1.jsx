import React from 'react'
const categories = ['example', 'ALL', 'LAF', 'ELE', 'STD', 'OT']
// import { Button } from '@material-tailwind/react'
import Button from '@mui/material/Button'
const Categories1 = ({ filterItems }) => {
  return (
    <div className="btn-container flex justify-between">
      {categories.map((category, index) => {
        if (index !== 0) {
          return (
            <Button
              type="button"
              // className="btn"
              variant="outlined"
              key={category}
              onClick={() => filterItems(category)}
            >
              {category}
            </Button>
          )
        }
      })}
    </div>
  )
}

export default Categories1
