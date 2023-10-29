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
class Graphical extends Component{
    cal_Graphical(){
        var x = Number(document.getElementById("inputstart").value);
        var n = Number(document.getElementById("inputend").value);
        var equation = document.getElementById("equation").value;

        var scope = {x:x};
        var fx1 = evaluate(equation,scope);

        for(x +=1;x<=n;x++){
            scope = {x:x};
            var fx2 = evaluate(equation,scope);
            if(fx1*fx2 > 0){
                fx1 = fx2;
            }
            else{
                break;
            }

        }
        var a = x-1;
        var b = x;
        scope = {x:a};
        var fx = evaluate(equation,scope);
        while(fx!==0 && a<=b){
            a += 0.000001;
            scope = {x:a};
            fx = evaluate(equation,scope);
            if(fx >= 0.0){
                break;
            }
         }
         document.getElementById("ans").innerHTML=a;
    }
    render(){
        return(
            <div>
                <div style={mainDiv}>
                    <div style={Div}>
                    <div class="head1"style={{width:"30%",margin:"0 auto"}}>
                        <h1>Graphical</h1></div>
                        <br/><br/>

                        <div class="box">
                            <Form.Control id="Equation" type="text" placeholder="input equation" style={{width:"30%",margin:"0 auto"}}></Form.Control>
                            <br/>
                            <Form.Control id="inputstart" type="number" placeholder="input start" style={{width:"30%",margin:"0 auto"}}></Form.Control>
                            <br/>
                            <Form.Control id="inputend" type="number" placeholder="input end" style={{width:"30%",margin:"0 auto"}}></Form.Control>
                        </div>
                        <br/>

                        <div class="box">
                            <Button onClick={this.getValue}  style={{width:"15%",margin:"0 auto"}} >
                                    done
                            </Button></div>
                        <h id="ans"></h>
                    </div>
                </div>
            </div>
        )
    }
}

export default Graphical;