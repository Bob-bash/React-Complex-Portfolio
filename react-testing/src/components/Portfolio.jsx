import React from 'react'
import {Port} from '../coms'
import './portfolio.css'
function Portfolio() {
  const port=[
    {backcolor:'#277479',
      left:{t:'Self-Employed,Brisbane',des:'Aug 2014 - Sep 2016'},
  right:{t:'Visual Designer',des:'A visual designier design for a variety of platforms.may include internet and internet sites,games,moves,kioasks adn wearbies.In short,they create the concepts.'}
  },
   {backcolor:'#fe8558', left:{t:'Self-Employed,Brisbane',des:'Aug 2014 - Sep 2016'},
  right:{t:'Visual Designer',des:'A visual designier design for a variety of platforms.may include internet and internet sites,games,moves,kioasks adn wearbies.In short,they create the concepts.'}
  },
  {backcolor:'#e9bb46',left:{t:'Self-Employed,Brisbane',des:'Aug 2014 - Sep 2016'},
  right:{t:'Visual Designer',des:'A visual designier design for a variety of platforms.may include internet and internet sites,games,moves,kioasks adn wearbies.In short,they create the concepts.'}
  }
  ]
  return (
    <div className='portfolio' id='portfolio'>
      <h1>My Work Experience</h1>
      <div className="portfolio__b">
        {port.map(item=>(
          <Port l_t={item.left.t} l_des={item.left.des}
          r_t={item.right.t}
          r_des={item.right.des}
          backcolor={item.backcolor}
          key={`${item.left.t}__12212`}
          />
        ))}
      </div>
    </div>
  )
}

export default Portfolio