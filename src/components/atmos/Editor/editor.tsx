import * as React from 'react';
import 'jodit/build/jodit.min.css';

const JoditReact = React.lazy(() => {
    return import('jodit-react-ts');
});

 const Editor = () => {
    const isSSR = typeof window === 'undefined';
    const [value, setValue] = React.useState<string>();

    return (
        <div>
            {!isSSR && (
                <React.Suspense fallback={<div>Loading</div>}>
                    <JoditReact onChange={(content) => setValue(content)} defaultValue="Hi" />
                </React.Suspense>
            )}
        </div>
    );
};

export default Editor;