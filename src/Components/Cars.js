import React from 'react'

const Car = (props) => {
    //pour l'élement color
    const colorInfo=props.color ? (`${props.color}`):('Null');
    
    //pour tester l'élement  marque
    if (props.name) {
        return(
            <tr>
                <td><p>{props.name}</p></td>
                <td><p>{props.year}</p></td>
                <td>{colorInfo}</td>
            </tr>
            
                
               
          
        )
    } else {
        return(
            null
            // <div className="mt-5 bg-primary">
            //     <div className="d-inline p-2 ">Pas de données</div>
                
               
            // </div>
        )
    }

    
}

export default Car;