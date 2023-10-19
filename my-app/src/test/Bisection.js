import {React,Component} from "react";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";



const mainDiv = {
    display:"flex",
    width:"100%",
    margin:"0 auto"
}

const Div = {
    width:"100%",
    margin:"0 auto"
}

class Bisection extends Component{
    constructor(){
        super();
    }
    getValue(){
        var equation = document.getElementById("equation").value;
        var l = document.getElementById("InputL").value;
        var r = document.getElementById("InputR").value;
        
        var Equation=equation;
        var L=l;
        var R=r;
        var x;
        var m = (Number(L)+Number(R))/2;
        var mOld = m;

       x=m;
       var fXm = eval(equation);
       x=R;
       var fXr = eval(equation);

       if(Number(fXm)*Number(fXr)>0){
        R=m;
      }
      else{
        L=m; 
      }
      do {
        m = (Number(L)+Number(R))/2;

        x=m;
        var fXm = eval(equation);
        x=R;
        var fXr = eval(equation);
        
        if(Number(fXm)*Number(fXr)>0){
          R=m; 
        }
        if(Number(fXm)*Number(fXr)<0){
          L=m;
        }
        mOld = m;

        x=m;
        }while(Math.abs(eval(equation)) > 0.000001);
 
        document.getElementById("Showm").innerHTML=m;
        document.getElementById("ShowM").innerHTML=m;

        x=m;
        var Cheak = eval(equation);
        if(Cheak<0.000001){
            Cheak=0;
        }
        document.getElementById("ShowE").innerHTML=Equation;
        document.getElementById("ShowC").innerHTML=Cheak;
       
       
    }
    render(){
        return(
            <div>
               <div style={mainDiv}>
                   <div  style={Div} >
                        <h1> Bisection Method </h1>
                        <br></br>
                       
                            
                            <div>
                                <Form.Control id="equation" type="text" placeholder="input equation" style={{width:"20%",margin:"0 auto"}}></Form.Control>
                                <br></br>
                                <Form.Control id="InputL" type="number" placeholder="input L" style={{width:"20%",margin:"0 auto"}}></Form.Control>
                                <br></br>
                                <Form.Control id="InputR" type="number" placeholder="input R" style={{width:"20%",margin:"0 auto"}}></Form.Control>
                            </div>
                            <br></br>
                            <Button onClick={this.getValue}  style={{width:"10%",margin:"0 auto"}} >
                                    done
                            </Button>
                    
                            <br></br><br></br><br></br>
                            <div style={{width:"40%",height:"5%",margin:"0 auto",background:'#F0FFF0'}}>
                            <h>ans = </h>
                            <h style={{color:'pink'}} id="Showm">  </h>
                        </div>
                        <br></br><br></br><br></br>
                        <div style={{width:"40%",margin:"0 auto",background:'#FFFFE0',textAlign:"left"}}>
                            <h4>check answer </h4>
                            <div style={{width:"40%",margin:"0 auto",textAlign:"left"}}>
                                <h>f(x) = </h>
                                <h id="ShowE"></h><br></br>
                                <h>if x = </h>
                                <h id="ShowM"></h><br></br>
                                <h>ans = </h>
                                <h id="ShowC"></h>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            
        );
    }
}
export default Bisection;