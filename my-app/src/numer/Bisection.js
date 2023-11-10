import {React,Component} from "react";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
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

class Bisection extends Component{
    constructor(){
        super();
    }
    getValue(){
        var eq = document.getElementById("eq").value;
        var l = document.getElementById("InputL").value;
        var r = document.getElementById("InputR").value;
        
        var eqN=eq;
        var L=l;
        var R=r;
        var x;
        var m = (Number(L)+Number(R))/2;
        var mOld = m;

       x=m;
       var fXm = eval(eq);
       x=R;
       var fXr = eval(eq);

       if(Number(fXm)*Number(fXr)>0){
        R=m;
      }
      else{
        L=m; 
      }

      do {
        m = (Number(L)+Number(R))/2;

        x=m;
        var fXm = eval(eq);
        x=R;
        var fXr = eval(eq);
        
        if(Number(fXm)*Number(fXr)>0){
          R=m; 
        }
        if(Number(fXm)*Number(fXr)<0){
          L=m;
        }
        mOld = m;

        x=m;
        }while(Math.abs(eval(eq)) > 0.000001);
 
        document.getElementById("Show1").innerHTML=m;
        document.getElementById("Show2").innerHTML=m;

        x=m;
        var Cheak = eval(eq);
        if(Cheak<0.000001){
            Cheak=0;
        }
        document.getElementById("Show3").innerHTML=eqN;
        document.getElementById("Show4").innerHTML=Cheak;
       
       
    }
    render(){
        return(
            <div>
               <div style={mainDiv}>
                   <div  style={Div} >
                    <div class="head1" style={{width:"30%",margin:"0 auto"}}>
                        <h1> Bisection Method </h1></div>
                        <br></br>
                       
                            
                            <div class="box">
                                <Form.Control id="eq" type="text" placeholder="Equation" style={{width:"30%",margin:"0 auto"}}></Form.Control>
                                <br></br>
                                <Form.Control id="XL" type="number" placeholder="XL" style={{width:"30%",margin:"0 auto"}}></Form.Control>
                                <br></br>
                                <Form.Control id="XR" type="number" placeholder="XR" style={{width:"30%",margin:"0 auto"}}></Form.Control>
                            </div>
                            <br></br>
                            <div class="button">
                            <Button onClick={this.getValue}  style={{width:"15%",margin:"0 auto"}} >
                                    done
                            </Button></div>
                    
                            <br></br><br></br><br></br>
                            <div style={{width:"30%",height:"7%",margin:"0 auto",background:'#F0FFF0'}}>
                            <h>answer = </h>
                            <h style={{color:'back'}} id="Show1">  </h>
                        </div>
                        <br></br><br></br><br></br>
                        <div class="box" style={{width:"30%",margin:"0 auto",background:'#FFFFE0',textAlign:"left"}}>
                            <h4>answer </h4>
                            <div class="box" style={{width:"30%",margin:"0 auto",textAlign:"left"}}>
                                <h>f(x) = </h>
                                <h id="Show3"></h><br></br>
                                <h>if x = </h>
                                <h id="Show2"></h><br></br>
                                <h>answer = </h>
                                <h id="Show4"></h>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            
        );
    }
}
export default Bisection;