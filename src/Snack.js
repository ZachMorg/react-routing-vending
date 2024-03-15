import {useParams, useNavigate} from 'react-router-dom';

const Snack = function(){
    const params = useParams();
    const navigate = useNavigate();

    const goBack = function(){
        navigate('/');
    }

    return(
        <div>
            <h1>{params.name}</h1>
            <button onClick={goBack}>Go Back</button>
        </div>
    );
}

export default Snack;