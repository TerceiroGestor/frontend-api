const Form = () => {

    return (
        <div className="container">
            <div className="d-flex justify-content-center mt-5">
                <div className="row">
                    <h2 className="">Formulário Padrão</h2>
                </div>
            </div>
            <div className="m-5">
                <form>
                    <div className="row">
                        <div className="form-group col-md-6">
                            <label htmlFor="inputEmail4">Email</label>
                            <input type="email" className="form-control" id="inputEmail4" placeholder="Email" />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="inputPassword4">Senha</label>
                            <input type="password" className="form-control" id="inputPassword4" placeholder="Senha" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-group">
                            <label htmlFor="inputAddress">Endereço</label>
                            <input type="text" className="form-control" id="inputAddress" placeholder="Rua dos Bobos, nº 0" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-group">
                            <label htmlFor="inputAddress2">Endereço 2</label>
                            <input type="text" className="form-control" id="inputAddress2" placeholder="Apartamento, hotel, casa, etc." />
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-group col-md-6">
                            <label htmlFor="inputCity">Cidade</label>
                            <input type="text" className="form-control" id="inputCity" />
                        </div>
                        <div className="form-group col-md-4">
                            <label htmlFor="inputEstado">Estado</label>
                            <select id="inputEstado" className="form-control">
                                <option selected>Escolher...</option>
                                <option>...</option>
                            </select>
                        </div>
                        <div className="form-group col-md-2">
                            <label htmlFor="inputCEP">CEP</label>
                            <input type="text" className="form-control" id="inputCEP" />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="gridCheck" />
                            <label className="form-check-label" htmlFor="gridCheck">
                                Clique em mim
                            </label>
                        </div>
                    </div>
                    <div className="d-flex justify-content-end">
                        <button type="submit" className="btn btn-primary">Entrar</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Form;
