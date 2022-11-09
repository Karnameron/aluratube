import styled from "styled-components"

let SyledBanner = styled.div`

width: 100%;
height:30vh;
margin-bottom:70px;
margin-top:20px;
img{
    width:100%;
    height: 35vh;
}

a{
    display:flex;
    flex-direction: column;
}


`;
export default function Banner(){
    return(
        <SyledBanner>
        <div>
            <img src="https://images.unsplash.com/photo-1597733336794-12d05021d510?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"></img>
        </div> 
        </SyledBanner>
    )
        
}