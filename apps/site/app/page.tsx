'use client';

import * as React from 'react';
import { ThemeSwitcher } from 'design-system/components';

const Home = () => {
    const [state, setState] = React.useState(true);

    return (
        <main
            style={{
                height: '100vh',
                display: 'flex',
                flexDirection: 'column',
                padding: '5rem',
            }}
        >
            <div>
                <ThemeSwitcher sprite="/theme.svg" />
                <h1>
                    This is the Home page to the personal site of{' '}
                    {`${state ? 'mine' : 'Yours'}`}
                </h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Quae delectus culpa, ab optio nam laudantium ipsa accusamus.
                </p>
                <button
                    style={{
                        width: ' max-content',
                        padding: 'calc(var(--s-1) * 1rem)',
                        backgroundColor: 'var(--accent1-500)',
                        border: 0,
                    }}
                    onClick={() => setState(!state)}
                >
                    click me!
                </button>
            </div>
        </main>
    );
};

export default Home;
