import React from "react";
import {IoHeart, IoFlask, HiLightningBolt, IoShield, IoSkull} from 'react-icons/all';

function CharList() {
    return(
        <div classList="created">
            <li class="char__info">
                <span class="char__info__name">char1</span>
       
                <span class="char__info__stats to-right">
          
                    <div class="stat-icon stat-health">
                        <IoHeart />
                    <div class="stat-value">100</div>
                    </div>

                    <div class="stat-icon stat-magic">
                        <IoFlask/>
                    <div class="stat-value">100</div>
                    </div>
            
                    <div class="stat-icon stat-power">
                        <HiLightningBolt/>
                    <div class="stat-value">100</div>
                    </div>
            
                    <div class="stat-icon stat-defence">
                        <IoShield/>
                    <div class="stat-value">100</div></div>
            
                    <div class="stat-icon stat-danger">
                        <IoSkull />
                    <div class="stat-value">15%</div></div>
                </span>
            </li>
        </div>
    );
}

export default CharList;