import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import "./UsersPage.css"
import { server } from "../Components/Config/Config"


const UsersPage = () => {
  const [users, setUsers] = useState([])


  const usersSplit = users.map((user, index)=>{
    const {id, name, posts} = user
    console.log(user)
    return(
      <li key={index}><Link className="users-list-content" to={`/users/${id}`}>{id}. {name}. (Writed: {posts.length} posts.)</Link></li>
    )
  })


  useEffect(()=>{
    const usersFetch = async ()=>{
      const res = await fetch(`${server}/users?_embed=posts`)
      const usersArray = await res.json()
      setUsers(usersArray)
    }
    usersFetch()
  },[])


  return (
    <div className="users-list-wrapper">
      <ul className="users-list">
        {usersSplit}
      </ul>
    </div>
  )
}

export default UsersPage

// API nuoroda: https://jsonplaceholder.typicode.com

// 1. Sukurti vartotojų puslapį (users), kuriame būtų atvaizduotas vartotojų sąrašas.
//   1.1. Prie vartotojo turėtu būti jo vardas.
//   1.2. Paspaudus ant vartotojo - nukreipiama į jo user puslapį.
//   1.3. Prie vartotojo vardo turėtų būti parašytų post'ų skaičius.

// 2. Sukurti puslapį, kuriame bus atvaizduojami įrašai (posts). Kiekvienas įrašas turi:
//   2.1. Pavadinimą. Tai turi būti nuoroda. Ji turi vesti į post.html puslapį.
//   2.2. Autorių. Tai turi būti nuoroda. Ji turi vesti į user.html puslapį.
//   2.3. Prie pavadinimo pridėti įrašo komentarų skaičių.

// 3. Tokiu pačiu principu, kaip ir vartotojų bei įrašų puslapiams, sukurti puslapį albumams (albums). Prie kiekvieno albumo turi būti:
//   3.1. Parašytas jo pavadinimas.
//   3.2. Parašytas vartotojo, sukūrusio šį albumą, vardas.
//   3.3. Albume esančių nuotraukų skaičius.
//   3.4. Viena nuotrauka.
//   3.5. Šis elementas turi būti nuoroda.