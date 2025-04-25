import { useState } from "react"
import { AddCategory } from "./components/AddCategory";


export const GifExpertApp = () => {

const [categories, setCategories] = useState(['One Punch', 'Samurai X', 'Dragon Ball']);

const onAddCategory = (newCategory) => {

  setCategories([newCategory, ...categories]);
}

  return (
    <>
    
      <h1>GifExpertApp</h1>
      <AddCategory 
       /*  setCategories={setCategories} */
       onNewCategory={value => onAddCategory(value)}
      />

      <ol>
        { categories.map(category => (
            <li key={category}>{category}</li>
          )) 
        }
      </ol>

    </>
  )
}
