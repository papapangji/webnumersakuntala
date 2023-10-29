import {React, Component} from"react";
import {Button, Form} from"react-bootstrap";
import {evaluate} from"mathjs";
import './Bisection.css';

const mainDiv = {
    display:"flex",
    width:"100%",
    margin:"0 auto"
}

const Div = {
    width:"100%",
    margin:"0 auto"
}

class Onepoint extends Component{

    Cal_Onepoint(){
        var equation = document.getElementById("Equation").value;
        var x0 = parseFloat(document.getElementById("input_x0").value);
        var x1, xold, scope;
        var e = 0.00001;
        do{
            xold = x0;
            scope = { x:x0 };
            x1 = evaluate(equation, scope);
            x0 = x1;

        }while((Math.abs((x1-xold) / x1) * 100) >= e);
        
        document.getElementById("ans").innerHTML=x1;
    }

    render(){
        return(
            <div>
                <div style={mainDiv}>
                    <div style={Div}>
                    <div class="head1" style={{width:"30%",margin:"0 auto"}}>
                        <h1>One Point Iteration</h1></div>
                        <br/><br/>

                        <div class="box">
                            <Form.Control id="Equation" type="text" placeholder="input equation" style={{width:"30%", margin:"0 auto"}}></Form.Control>
                            <br/>
                            <Form.Control id="input_x0" type="number" placeholder="input X0" style={{width:"30%", margin:"0 auto"}}></Form.Control>
                        </div>
                        <br/>

                        <div class="box">
                            <Button onClick={this.getValue}  style={{width:"15%",margin:"0 auto"}} >
                                    done
                            </Button></div>
                        <br/><br/>
                        <h id="ans"></h>
                    </div>
                </div>
            </div>
        )
    }
}

export default Onepoint;