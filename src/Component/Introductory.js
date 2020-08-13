import React, {Component} from 'react'
import venom from '../img/venom-1.jpg'
import hulk from '../img/hulk-1.jpg'
import ven from '../img/venom-2.jpg'




class Introductory  extends Component {
    render(){
        return(    
        <div>
           
    <header className="header">
      <div className="container">
        <h1 className="title">Mavel's Fearless</h1>
        <p className="subtitle">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. beatae
          molestias earum eveniet.
        </p>
        <div className="search-bar">
          <input type="search" placeholder="Search" />
        </div>

       
        <div className="sample-wallpaper">
         
          <article className="wallpaper">
            <img src={venom} alt="Wallpaper #1" class="wallpaper" />
          </article>

         
          <article className="wallpaper">
            <img src={hulk} alt="Wallpaper #1" class="wallpaper" />
          </article>

        
          <article className="wallpaper">
            <img src={ven} alt="Wallpaper #1" class="wallpaper" />
          </article>
        </div>
      </div>
    </header>
         </div> 
           
        
        )
    }
    
}
export default Introductory