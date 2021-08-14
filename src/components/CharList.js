import React from "react";
import CharListItem from "./CharListItem";

function CharList() {

    const sheetdb = require("sheetdb-node");
    const client = sheetdb({ address: 't38d2ssfp8p6q' });

    var charList = {};
// https://sheetdb.io/api/v1/t38d2ssfp8p6q

{/*
    REMOVER COMENTÁRIO ANTES DE USAR..

    client.read()
    .then(function(info) {
        console.log(info);
    }, 
    function(error){
        console.log(error);
    }
);
*/
}
    

    return(
        <div className="created">
            
           
                
                <CharListItem
                    name="get name"
                    species="???"
                    health="00"
                    magic="00"
                    power="00"
                    defense="00"
                    critical="00"
                />
       
        </div>
    );
}

export default CharList;