import {React,Component} from "react";
import { Button,Form } from "react-bootstrap";
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
class Secant extends Component{
    cal_Secant(){
        var x0 = Number(document.getElementById("input_x0").value);
        var equation = document.getElementById("Equation").value;
        var x1 = 0;
        var checkx;
        var scope;
        var x2;
        var e = 0.000001;
        do{
            checkx = x1;
            scope = {x:x0};
            var fx0 = evaluate(equation,scope);
            scope = {x:x1};
            var fx1 = evaluate(equation,scope);
            x2 = x0-(fx0*(x0-x1))/(fx0-fx1);
            x0 = x1;
            x1 = x2;
        }while(Math.abs((x2-checkx)/x2)*100 >= e);

        document.getElementById("answer").innerHTML=x2;
    }
    render(){
        return(
            <div>
                <div style={mainDiv}>
                    <div style={Div}>
                    <div class="head1" style={{width:"30%",margin:"0 auto"}}>
                        <h1>Secant</h1></div>
                        <br/><br/>

                        <div class="box">
                        <Form.Control id="Equation" type="text" placeholder="equation" style={{width:"30%",margin:"0 auto"}}></Form.Control>
                            <br/>
                            <Form.Control id="input_x0" type="number" placeholder="x0" style={{width:"30%",margin:"0 auto"}}></Form.Control>    
                        </div>
                        <br/>
                        <div class="box">
                        <Button onClick={this.cal_Secant} style={{width:"15%",margin:"0 auto"}}>done</Button>
                        </div>
                        <br/><br/>
                        <h id="answer"></h>
                    </div>
                </div>
            </div>
                
        )
    }
}

export default Secant;