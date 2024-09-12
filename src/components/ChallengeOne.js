import { useState } from 'react';

const Challengeone = () => {
    const [isShown, setIsShown] = useState(false);

    return ( 
        <div className="container">
            <button onClick={ () => { setIsShown(!isShown)} }>Show/Hide</button>
            {isShown && <p> Welcome to react Challenge.</p>}
        </div>
     );
}
 
export default Challengeone;