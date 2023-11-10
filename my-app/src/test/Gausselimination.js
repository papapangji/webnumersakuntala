import {React,Component} from "react";
import {Button} from "react-bootstrap";
import {Form} from "react-bootstrap";
import './Bisection.css';

const mainDiv = {
    display: "flex",
    width:"100%",
    margin:"0 auto"
}

const Div = {
    width:"100%",
    margin:"0 auto"
}

class Gauss_elimination extends Component{

    create_matrix_input(){
        var size = document.getElementById("sizematrix").value;
        var m_input = "";

        for(var i = 0; i<size; i++){
            for(var j = 0; j<size; j++){
                m_input += "<input id='input"+i+j+"' type='number' placeholder='x"+(i+1)+(j+1)+" ' style='width:50px;margin:5px;' >"
            }
            m_input += "<input id='inputans"+i+"0' type='number' placeholder='b"+(i+1)+"' style='width:50px;margin-left:20px;' ><br/>";
        }
        document.getElementById("matrix_table").innerHTML=m_input;
    }

    Cal_Gauss = () =>{
        var size = document.getElementById("sizematrix").value;
        var a = [];
        var b = [];
        var solution = [];

        for(let i = 0; i<size; i++){
            a.push([]);
            for(let j = 0; j<size; j++){
                a[i].push(document.getElementById("input"+i+j).value);
            }     
            b.push([]);   
            b[i].push(document.getElementById("inputans"+i+0).value);    
        }



        var echelonform = () =>{
            for(var k = 0; k<size; k++){
                for(var i = k+1; i<size; i++){
                    var factor = a[i][k] / a[k][k];
                    b[i] -= (factor * b[k]).toFixed(2);
                    for(var j = k; j<size; j++){
                        a[i][j] -= (factor * a[k][j]).toFixed(2);
                    }
                    printform();
                }
            }

            for(var i = size-1; i>=0; i--){
                var sum = 0;
                for(var j = i+1; j<size; j++){
                    sum += a[i][j] * solution[j];
                }
                solution[i] = ((b[i] - sum) / a[i][i]).toFixed(2);
            }
        }

        var printform = () =>{
            var size = document.getElementById("sizematrix").value;
            var table = "<h> Result: <br/><br/> </h><table style='width:20%; margin-left:auto; margin-right: auto'>";
            
            for(var i = 0; i<size; i++){
                table += "<tr>";
                for(var j = 0; j<size; j++){
                    
                    table += "<td id='a"+i+j+"' style='border: 2px solid #dddddd;'></td>"
                }
                table += "<td id='b"+i+"0' style='border: 2px solid #dddddd;margin-left: 20px'></td></tr>"
            }
            table += "</table>";
            document.getElementById("matrix_solution").innerHTML=table;

            for(var i = 0; i<size; i++){
                for(var j = 0; j<size; j++){
                    document.getElementById("a"+i+j).innerHTML=a[i][j];
                }
                document.getElementById("b"+i+0).innerHTML=b[i];
            }

        }
        var area_for_b = "";
        echelonform();
        for(var i = 0; i<size; i++){
            area_for_b += "<div style='margin-bottom: 10px;'><br/>"+"x"+(i+1)+" = <h id='ans_b"+i+0+"'> </h></div>";
        }
        document.getElementById("area_b").innerHTML=area_for_b;

        for(var i = 0; i<size; i++){
            document.getElementById("ans_b"+i+0).innerHTML=solution[i];
        }

    }


    render(){
        return(
            <div>
                <div style={mainDiv}>
                    <div style={Div}>
                    <div class="head1"style={{width:"30%",margin:"0 auto"}}>
                        <h1>Gauss elimination</h1></div>
                        <br/>
                        <div className="box">
                            <Form.Control id="sizematrix" placeholder="matrix size" type="number" step="1" style={{width:"30%", margin:"0 auto"}}></Form.Control>
                        </div>
                        <br/><br/>
                        <div className="box">
                        <Button onClick={this.create_matrix_input}>
                            done
                        </Button>
                        </div>

                        <br/><br/><br/>

                        <div className="box"
                        id="matrix_table">

                        </div>
                        <br/>
                        <div className="box">
                        <Button onClick={this.Cal_Gauss}>
                            done
                        </Button></div>
                    
                        <br/><br/>

                        <div id="matrix_solution">

                        </div>
                        <br/><br/>

                        <div id="area_b" style={{marginBottom: "15%"}}>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Gauss_elimination;