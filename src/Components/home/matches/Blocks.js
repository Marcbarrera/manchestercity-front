import React, { Component } from 'react'
import { firebaseMatches } from '../../../firebase';
import { firebaseLooper, reverseArray } from '../../Ui/misc'

import Matchesblock from '../../Ui/matches_block'


 class Blocks extends Component {

    state= {
        matches:[]
    }

    componentDidMount(){
        firebaseMatches.limitToLast(6).once('value').then((snapshot)=>{
            const matches = firebaseLooper(snapshot )

            this.setState({
                matches:reverseArray(matches)
            })
        })
    }

    showMatches = (matches) => (
        matches ? 
            matches.map((match)=>(
                <div className="item">
                    <div className="wrapper">
                        <Matchesblock match={match}/>
                    </div>
                </div>

            ))
            :null
    )

    render() {
        console.log(this.state)
        return (
            <div className="home_matches">
                {this.showMatches(this.state.matches)}
                
            </div>
        )
    }
}
export default Blocks