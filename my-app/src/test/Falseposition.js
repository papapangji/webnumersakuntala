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
class Falseposition extends Component{
    getFalseposition(){
        var xr = Number(document.getElementById("inputxr").value);
        var xl = Number(document.getElementById("inputxl").value);
        var epuation =  document.getElementById("eq").value;
        var xr2 = parseFloat(xr);
        var xl2 = parseFloat(xl);
        var scope;
        var xm,fxr,fxl,fxm;

        do{
            scope = {x:xr2};
            fxr = evaluate(epuation,scope);
            scope = {x:xl2};
            fxl = evaluate(epuation,scope);
            xm = (xl2*fxr - xr2*fxl)/(fxr-fxl);
            scope = {x:xm};
            fxm = evaluate(epuation,scope);

            if(fxm * fxr < 0){
                xl2 = xm;
            }
            if(fxm * fxr > 0){
                xr2 = xm;
            }
            
        }
        while(Math.abs(fxm) >= 0.000001);
        document.getElementById("ans").innerHTML=xm;
    }
    render(){
        return(
            <div>
                <div style={mainDiv}>
                    <div style={Div}>
                    <div class="head1"style={{width:"30%",margin:"0 auto"}}>
                        <h1>Falseposition</h1></div>
                        <br/><br/>

                        <div className="box">
                        <Form.Control id="eq" type="text" placeholder="Equation" style={{width:"30%",margin:"0 auto"}}></Form.Control>
                                <br/>
                                <Form.Control id="InputL" type="number" placeholder="XL" style={{width:"30%",margin:"0 auto"}}></Form.Control>
                                <br></br>
                                <Form.Control id="InputR" type="number" placeholder="XR" style={{width:"30%",margin:"0 auto"}}></Form.Control>      
                        </div>
                        <br/>
                        <div className="box">
                        <Button onClick={this.getFalseposition}  style={{width:"15%",margin:"0 auto"}} > done</Button>
                        </div>
                        <br/><br/>
                        <h id="ans"></h>
                    </div>
                </div>
            </div>
        )
    }
}
export default Falseposition;