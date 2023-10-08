const Home = () => {
    const server = import.meta.env.VITE_SERVER || 'not data';
    return (
        <div className="container d-flex justify-content-center">
            <div className="row">
                <h1>HOME</h1>
                <p>{server}</p>
            </div>
        </div>
    );
}

export default Home;
