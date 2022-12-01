import React, {useState} from 'react'

export default function Search() {
    const [search, setSearch] = useState('')
    const [posts, setPosts] = useState([]); 
  return (
    <form
          onSubmit={(event) => {
            event.preventDefault()
            console.log(search)

            fetch(import.meta.env.VITE_PST_API + "?search=" + search.trim(), {
              mode: "cors",
              credentials: "include",
            })
                .then((res) => res.json())
                .then((messages) => {
                  setPosts(messages.data);
                })
                .catch((err) => console.log(err));

          }}
      >

        <input
            type="text"
            placeholder="search"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            maxLength={100}
        />
        <button type="submit">SEARCH</button>
    </form>
  )
}
