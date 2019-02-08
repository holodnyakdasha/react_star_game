import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faStar, faUser } from '@fortawesome/free-solid-svg-icons';
import _ from 'lodash';
import './App.css';

library.add(faStar, faUser);

class Game extends React.Component{
    state = {
        selectedNumbers : []
    };

    selectedNumbers =(clickedNumber)=>{
        this.setState(prevState =>({
            selectedNumbers: prevState.selectedNumbers.concat(clickedNumber)
        }));
    }
    render() {
        return(
            <div className={'container'}>
                <h3>Play Game</h3>
                <hr/>
                <div className={'row'}>
                    <Stars />
                    <Button />
                    <Answer selectedNumbers  = {this.state.selectedNumbers}/>
                </div>
                <br />
                <Numbers selectedNumbers = {this.state.selectedNumbers} />
            </div>

        );
    }
}

const Stars = (props) =>{
    const numberOfStars = 1+Math.floor( Math.random()*9);
    // let stars = [];
    //
    // for(let i =0; i<numberOfStars; i++){
    //     stars.push(<FontAwesomeIcon key ={i} icon={'star'}/>)
    // }

    return(
        <div className={'col-5'}>

            {_.range(numberOfStars).map(i => <FontAwesomeIcon key = {i} icon={'star'}/>)}
        </div>
    );
}


const Button = (props)=>{
    return(
        <div>
            <button className={'col-2'}> = </button>
        </div>
    );
}


const Answer = (props) =>{
    return(
        <div className={'col-5'}>
            {props.selectedNumbers.map((number, i)=>
                <span key = {i}>{number}</span>
            ) }
        </div>
    );
}

const Numbers = (props) =>{

    const numberClassName = (number) =>{
        if(props.selectedNumbers.indexOf(number)>=0){
            return 'selected';
        }
    }

        return(
            <div className={'card text-center'}>
            <div>
                {Numbers.list.map((number,i)=>
                <span key={i} className={numberClassName(number)}
                onClick={()=>props.selectNumber(number)}>
                    {number}
                </span>)}

            </div></div >


        );
}

Numbers.list = _.range(1,10);
export default Game;