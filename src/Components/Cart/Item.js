import React from 'react'

function Item(props) {
    return (
        <div class="d-flex justify-content-between align-items-center mt-3 p-2 items rounded">
            <div class="d-flex flex-row"><img class="rounded" src="https://i.imgur.com/QRwjbm5.jpg" width="40" />
                <div class="ml-2"><span class="font-weight-bold d-block">{
                    props.children && props.children[0]
                }</span><span class="spec">256GB, Navy Blue</span></div>
            </div>
            <div class="d-flex flex-row align-items-center"><span class="d-block">{props.children && props.children[1]}</span><span class="d-block ml-5 font-weight-bold">$900</span><i class="fa fa-trash-o ml-3 text-black-50"></i></div>
        </div>
    )
}

export default Item