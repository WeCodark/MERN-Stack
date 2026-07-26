// Concept 1: Navigation Tools(<Link>)
import { Link } from "react-router-dom"
<Link to='/about'>About</Link>


// Concept 2: Defining Routes (Routes & Route)
<Routes>
    <Route path='/' element={<Home />} />
    <Route path='/about' element={<About />} />
</Routes>


// Concept 3: Dynamic Parameters (useParams)

import { useParams } from 'react'

function ProjectDetail() {
    const { id } = useParams();
    return <h1>Viewing Project ID: {id}</h1>
}

// Concept 4: Context API 
