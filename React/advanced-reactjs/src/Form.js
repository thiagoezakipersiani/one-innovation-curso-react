import React, { useContext } from "react";
import { ThemeContext } from "./Theme";

function Form() {

    const context = useContext(ThemeContext)

    const renderForm = (
        <form>
            <label>Nome:</label>
            <input></input>
            <label>Sobrenome:</label>
            <input></input>
            <label>Idade:</label>
            <input></input>
            <label>E-mail:</label>
            <input></input>
        </form>
    )

    const renderNotLogged = (
        <h1>
            É necessário realizar o login
        </h1>
    )

    return (
        <div>
            {!context.token ? renderNotLogged : renderForm}
        </div>
    )
}

export default Form;