import React from 'react';
import {IoHeart, IoFlask, HiLightningBolt, IoShield, IoSkull} from 'react-icons/all';

export default function CharListItem(props){
    return(
        <li class="char__info">
        <span class="char__info__name">{props.name} <span className="char__info__species">{props.species}</span></span>
       
        <span class="char__info__stats to-right">
          
            <div class="stat-icon stat-health">
                <IoHeart title="Health"/>
            <div class="stat-value">{props.health}</div>
            </div>

            <div class="stat-icon stat-magic">
                <IoFlask title="Magic Power"/>
            <div class="stat-value">{props.magic}</div>
            </div>
            
            <div class="stat-icon stat-power">
                <HiLightningBolt title="Strength"/>
            <div class="stat-value">{props.power}</div>
            </div>
            
            <div class="stat-icon stat-defense">
                <IoShield title="Defense"/>
            <div class="stat-value">{props.defense}</div></div>
            
            <div class="stat-icon stat-critical">
                <IoSkull title="Critical hit chance" />
            <div class="stat-value">{props.critical}%</div></div>
        </span>
    </li>
    );
}
