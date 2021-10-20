import React from "react";
import PropTypes  from 'prop-types';

function PetShop (props) {
    const {dogs,cats,customers,customerName , onClick} = props
    
    return(
        <div>
            <h1>Dogs: {dogs}</h1>
            <h2>Cats: {cats}</h2>
            <div>
                Quantidade cliente: {customers}
            </div>
            <div>
                Nome Cliente: {customerName}
            </div>
            <button onClick={onClick}>Iniciar banho</button>
        </div>
    )
}

//define propriedades como padrão 
PetShop.defaultProps={
    cats:0,
    customers: []
}

//faz a verificação dos campos , se o tipo está correto e se o campo é obrigatório
PetShop.propTypes={
    dogs:PropTypes.number.isRequired,
    cats:PropTypes.number,
    customers:PropTypes.array,
    customerName:PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    status: PropTypes.oneOf(["Completed" , "Incomplete"]),
    clienteNovo: PropTypes.bool.isRequired
}

export default PetShop;