import React from "react";
import styled from 'styled-components';

const calculadoraPage = () => {

    const calc = (e) => {
        var operacao = e.value;
 
        var n1=parseFloat(document.getElementById("n1").value);
        var n2=parseFloat(document.getElementById("n2").value);
    
        var calculo = eval(n1+operacao+n2);
    
        if(!isNaN(calculo)){
        alert(calculo);
        }
    }

    const ola = (x) => {
        var f=document.getElementById("frm");
        var txt = f.txtnome;
        txt.value = "Ola "+txt.value;
    }

    const limpar = () => {
        var f=document.getElementById("frm");
        var n1 = f.n1;
        var n2 = f.n2;
        n1.value = "";
        n2.value = "";
    }

    return (
        <form id="frm">
            <div id="container">
                <div id="header">
                    <h1>Aula de Web</h1>
                </div>
                <div id="menu">
                </div>
                <div id="left">
                    <div class="bloco">
                        <span>Nome:</span>
                        <input type="text" name="txtnome" placeholder="Introduza o seu nome"/>
                        <input id="enviar" type="button" value="Enviar" onClick="ola('Ola')"/>
                    </div>
                </div>
                <div class="bloco1">
                    <span>Introduza os numeros:</span>
                    <input type="text" size="2" id="n1" placeholder="n1"/><br/>
                    <input type="text" size="2"  id="n2" placeholder="n2"/><br/><br/>
                    <input type="button" value="+" onClick="calc(this)"/>
                    <input type="button" value="-" onClick="calc(this)"/>
                    <input type="button" value="*" onClick="calc(this)"/>
                    <input type="button" value="/" onClick="calc(this)"/>
                    <br/><br/>
                    <input type="button" value="Limpar" onClick="limpar()"/>
                    <input type="button" value="Enviar" onClick="ola('Ola')"/>
                </div>
            </div>

        </form>
    )
}

export default calculadoraPage;