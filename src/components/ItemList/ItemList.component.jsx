import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import './ItemList.styles.scss';
import ItemSkis from './ItemSkis/ItemSkis.component';
import ItemSkiBoots from './ItemSkiBoots/ItemSkiBoots.component';
import ItemBoardBoots from './ItemBoardBoots/ItemBoardBoots.component';
import ItemBoards from './ItemBoards/ItemBoards.component';

class ItemList extends React.Component {
  constructor(props) {
    super(props);
    this.state= {}
  }

  render () {
    return (
      <div className='ItemList'>
        <Switch>
          <Route exact path='/' component={ItemBoardBoots}/>
          <Route path='/boards' component={ItemBoards}/>
          <Route path='/board boots' component={ItemBoardBoots}/>
          <Route path='/skis' component={ItemSkis}/>
          <Route path='/ski boots' component={ItemSkiBoots}/>
        </Switch>
      </div>
    )
  }
}

export default withRouter(ItemList);