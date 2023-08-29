import React from "react"
import { Outlet,Link } from "react-router-dom"

const Layout =({categories})=>{
    const renderCategories = () =>{
        const category=[];
        categories.data.map((result,i)=>{
          category.push(<li key={result.id}><Link to={`categories/${result.id}`}>{result.title}</Link></li>)
        });
        return category;
      }
    
    return(
    <section>
        <header>
         My store
        </header>
        <section className='main-section'>
            <nav className='navigation'>
            <ul >
            {categories && renderCategories()}
            </ul>
            </nav>
            <article className='main'>
                <Outlet/>
            </article>
        </section>
        <footer>
            <Link to={'/'}>Home</Link>
            &nbsp;|&nbsp;
            <Link to={'/about'}>About Us</Link>
            &nbsp;|&nbsp;
            <Link to={'/contact'}>Contact Us</Link>
            &nbsp;|&nbsp;
            <Link to={'/basket'}>Basket</Link>
        </footer>
    </section>  )
}
export default Layout 