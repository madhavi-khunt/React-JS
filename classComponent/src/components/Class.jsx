import { Component } from "react"


    
    class Count extends Component{

        constructor(props){
            super(props)
            this.state={count:0}
        }

        handleClick=()=>{
            this.setState({count:this.state.count+1})
        } 

        decrease=()=>{
            
            // if (this.state > 0) {
      
                this.setState({count:this.state.count-1});
            // this.setState({count:this.state.count-1})
        // }
    }

        render()
        {
           
            return(
                <div id="box">
                    <div id="inner">
                        <h1 id="h">Counter Using Class</h1>
                        <h1>{this.state.count}</h1><br />
                        <button onClick={this.handleClick} >CountUp</button>
                        <button disabled={this.state.count === 0?true:false}  onClick={this.decrease}>CountDown</button>
                    </div>
                        {/* <div id="outer">
                            <p>1.    What us difference between Class component and functional component : </p>
                            <p>-  &nbsp;Use ES6 class syntax. Methods are defined as class methods.</p>
                            <p>- &nbsp;Use function syntax. Hooks are used for state and side effects.</p>
                        </div> */}
                </div>
            )
            
            
        }
    }




export default Count    