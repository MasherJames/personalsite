import * as React from 'react';

const Home = () => {
    return (
        <main
            style={{
                height: '100vh',
                display: 'flex',
                flexDirection: 'column',
                padding: '5rem',
            }}
        >
            <h1>This is the Home page to the personal site of mine!</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae
                delectus culpa, ab optio nam laudantium ipsa accusamus.
            </p>
            <button>click me!</button>
        </main>
    );
};

export default Home;
