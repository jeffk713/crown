import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';

import ItemSkis from './ItemSkis/ItemSkis.component';
import ItemSkiBoots from './ItemSkiBoots/ItemSkiBoots.component';
import ItemBoardBoots from './ItemBoardBoots/ItemBoardBoots.component';
import ItemBoards from './ItemBoards/ItemBoards.component';
import ItemTops from './ItemTops/ItemTops.component'
import ItemBottoms from './ItemBottoms/ItemBottoms.component'

import './ItemList.styles.scss';

class ItemList extends React.Component {
  constructor(props) {
    super(props);
    this.state= {}
  }

  render () {
    return (
      <div className='ItemList'>
        <Switch>
          <Route exact path='/'/>
          <Route path='/boards' component={ItemBoards}/>
          <Route path='/board boots' component={ItemBoardBoots}/>
          <Route path='/skis' component={ItemSkis}/>
          <Route path='/ski boots' component={ItemSkiBoots}/>
          <Route path='/tops' component={ItemTops}/>
          <Route path='/bottoms' component={ItemBottoms}/>
        </Switch>
      </div>
    )
  }
}

export default withRouter(ItemList);