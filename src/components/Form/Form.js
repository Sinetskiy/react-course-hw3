import React from "react";
import "./Form.css";

class Form extends React.Component {

    state = {
        firstName: '',
        lastName: '',
        password: '',
        firstNameErr: '',
        lastNameErr: '',
        passwordErr: '',
        isLogged: false
    };

    handleSubmit = event => {
        event.preventDefault();

        const {firstName, lastName, password} = this.state;
        let firstNameErr = '', lastNameErr = '', passwordErr = '';

        if (firstName.trim() !== 'james')
            firstNameErr = 'Имя указано не верно';

        if (firstName.trim() === '')
            firstNameErr = 'Нужно указать имя';

        if (lastName.trim() !== 'bond')
            lastNameErr = 'Фамилия указана не верно';

        if (lastName.trim() === '')
            lastNameErr = 'Нужно указать фамилию';

        if (password.trim() !== '007')
            passwordErr = 'Пароль указан не верно';

        if (password.trim() === '')
            passwordErr = 'Нужно указать пароль';

        this.setState({firstName, lastName, password, firstNameErr, lastNameErr, passwordErr});

        if (firstNameErr === '' && lastNameErr === '' && passwordErr === '') {
            this.setState({isLogged: true});
        }

    };

    handleFirstNameChange = event => {
        this.setState({firstNameErr: '', lastNameErr: '', passwordErr: '', firstName: event.target.value});
    };

    handleLastNameChange = event => {
        this.setState({firstNameErr: '', lastNameErr: '', passwordErr: '', lastName: event.target.value});
    };

    handlePasswordChange = event => {
        this.setState({firstNameErr: '', lastNameErr: '', passwordErr: '', password: event.target.value});
    };


    render() {

        const {firstName, lastName, password, isLogged, firstNameErr, lastNameErr, passwordErr} = this.state;

        return isLogged ?
            <div className="app-container">
                <img src="/bond_approve.jpg" alt="bond approve" className="t-bond-image"/>
            </div>
            :
            <div className="app-container">
                <form className="form" onSubmit={this.handleSubmit}>
                    <h1>Введите свои даннные, агент</h1>
                    <p className="field">
                        <label className="field__label" htmlFor="firstName"><span
                            className="field-label">Имя</span></label>
                        <input className="field__input field-input t-input-firstname" type="text" name="firstName"
                               value={firstName} onChange={this.handleFirstNameChange}/>
                        <span className="field__error field-error t-error-firstname">{firstNameErr}</span>
                    </p>
                    <p className="field">
                        <label className="field__label" htmlFor="lastName"><span
                            className="field-label">Фамилия</span></label>
                        <input className="field__input field-input t-input-lastname" type="text" name="lastName"
                               value={lastName} onChange={this.handleLastNameChange}/>
                        <span className="field__error field-error t-error-lastname">{lastNameErr}</span>
                    </p>
                    <p className="field">
                        <label className="field__label" htmlFor="password"><span
                            className="field-label">Пароль</span></label>
                        <input className="field__input field-input t-input-password" type="password" name="password"
                               value={password} onChange={this.handlePasswordChange}/>
                        <span className="field__error field-error t-error-password">{passwordErr}</span>
                    </p>
                    <div className="form__buttons"><input type="submit" className="button t-submit" value="Проверить"/>
                    </div>
                </form>
            </div>;
    }
}

export default Form;