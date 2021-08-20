import React, { useEffect, useState } from "react";
import sheetdb from 'sheetdb-node';
import CharListItem from "./CharListItem";

function CharList() {

    const client = sheetdb({ address: 't38d2ssfp8p6q' });
    var [ charList, setCharList ] = useState([]);

    

//  https://sheetdb.io/api/v1/t38d2ssfp8p6q
//*REMOVER COMENTÁRIO ANTES DE USAR..*/

    useEffect(() => {
        client
            .read()
            .then(info =>  {
                setCharList(c => JSON.parse(info));
            }).catch(console.log);
    }, [ client ]);  

    return(
        <div className="created">
            {
                charList.slice(0, 1).map((item, index) => ( 
                    <CharListItem
                        key={index}
                        name={item.name}
                        species={item.species}
                        health={item.health}
                        magic={item.magic}
                        power={item.power}
                        defense={item.defense}
                        critical={item.critical}
                    />
                ))
            }
        </div>
    );
}

export default CharList;