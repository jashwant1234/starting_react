import React, { Component } from 'react';
import {connect} from 'react-redux';
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {
    state = {
        counter: 0
    }

    counterChangedHandler = ( action, value ) => {
        switch ( action ) {
            case 'inc':
                this.setState( ( prevState ) => { return { counter: prevState.counter + 1 } } )
                break;
            case 'dec':
                this.setState( ( prevState ) => { return { counter: prevState.counter - 1 } } )
                break;
            case 'add':
                this.setState( ( prevState ) => { return { counter: prevState.counter + value } } )
                break;
            case 'sub':
                this.setState( ( prevState ) => { return { counter: prevState.counter - value } } )
                break;
        }
    }

    render () {
        return (
            <div>
                <CounterOutput value={this.props.counter} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter} />
                <CounterControl label="Add 5" clicked={this.props.onAddCounter} />
                <CounterControl label="Subtract 5" clicked={this.props.onSubtractCounter}/>
                <hr></hr>
                <button onClick={this.props.onResultButtonClick}>store result</button>   
                <ul>
                    {this.props.results.map((result)=>(
                      <li key={result.id} onClick={() => {this.props.onDeleteResultButtonClick(result.id)}}>{result.value}</li>
                    ))}
                </ul>
            </div>
           
        );
    }
}

const mapStateToProps = (state) =>{
    return {
        counter: state.counter,
        results: state.results
    } 
}

const mapDispatchToProps = (dispatch) =>{ 
    return { 
        onIncrementCounter : () => dispatch({type:'INCREMENT'}),
        onDecrementCounter : () => dispatch({type:'DECREMENT'}),
        onAddCounter : () => dispatch({type:'ADD',value:5}),
        onSubtractCounter : () => dispatch({type:'SUBTRACT',value:5}),
        onResultButtonClick: () => dispatch({type:'RESULT'}),
        onDeleteResultButtonClick: (id) => dispatch({type:'DELETE_RESULT', resultId: id})
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(Counter);