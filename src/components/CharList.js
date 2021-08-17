import React from "react";
import CharListItem from "./CharListItem";

var charList = [];

function CharList() {

    const sheetdb = require("sheetdb-node");
    const client = sheetdb({ address: 't38d2ssfp8p6q' });

    

//  https://sheetdb.io/api/v1/t38d2ssfp8p6q


    {/*REMOVER COMENTÁRIO ANTES DE USAR..*/}

    client.read().then(async function(info) {
        charList = await info;
        console.log(charList);
    },      function(error){
            console.log(error);
    });

    return(
        <div className="created">
            <CharListItem
                name={charList[1].name}
                species={charList[1].species}
                health={charList[1].health}
                magic={charList[1].magic}
                power={charList[1].power}
                defense={charList[1].defense}
                critical={charList[1].critical}
            />
        </div>
    );
}

export default CharList;