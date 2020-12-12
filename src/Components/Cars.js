import React from 'react'

const Car = (props) => {
    //pour l'élement color
    const colorInfo=props.color ? (<div className="d-inline p-2  ml-3">Couleur: {props.color}</div>):(<div className="d-inline p-2  ml-3">Couleur: Null</div>);
    
    //pour tester l'élement  marque
    if (props.children) {
        return(
            <div className="mt-5 bg-primary">
                <div className="d-inline p-2 ">Marque: {props.children}</div>
                {colorInfo}
               
            </div>
        )
    } else {
        return(
            <div className="mt-5 bg-primary">
                <div className="d-inline p-2 ">Pas de données</div>
                
               
            </div>
        )
    }

    
}

export default Car;