import {useState} from 'react'

const ListRender = () => {

    	const [list] = useState(["Gabriel", "Denner", "Lucca", "Junior"])

      const[user, setUsers] = useState([
        {id: 1, name:"Gabriel", age: 20},
        {id: 2, name: "Denner", age: 25},
        {id: 3, name: "Lucca", age: 22},
      ]);

      const deleteRandom = () => {
        const randomNumber = Math.floor(Math.random() * 4);

        setUsers((prevUser) => {
          console.log(prevUser);
          return(
            prevUser.filter((user) => randomNumber !== user.id)
          )
        })
      }

  return (
    <div>
        <ul>
            {list.map((item, i) => (
                <li key={i}>{item}</li>
            ))}
        </ul>
        <ul>
          {user.map((user) => (
            <li key={user.id}>
              {user.name} - {user.age}
            </li>
          ))}
        </ul>
        <button onClick={deleteRandom}>Delete Random User</button>
    </div>
  )
}

export default ListRender