import React from "react";

function Card({ele}){
    return (
        // <!-- Earnings (Monthly) Card Example -->
        <div class="col-xl-3 col-md-6 mb-4">
        <div class={`card border-left-${ele.theme} shadow h-100 py-2`}>
            <div class="card-body">
                <div class="row no-gutters align-items-center">
                    <div class="col mr-2">
                        <div class={`text-xs font-weight-bold text-${ele.theme} text-uppercase mb-1`}>
                           {ele.title}</div>
                        <div class="h5 mb-0 font-weight-bold text-gray-800">{ele.price}</div>
                    </div>
                    <div class="col-auto">
                        <i class="fas fa-calendar fa-2x text-gray-300"></i>
                    </div>
                </div>
            </div>
        </div>
    </div>

 
    )
}
export default Card;