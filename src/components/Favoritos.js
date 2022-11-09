import styled from "styled-components"

const StyledFav = styled.div`

display: flex;
width: 100%;
padding-left:30px;
.fav-container{
    display:flex;
}

.fav{
    display:flex;
    margin-right:20px;
    text-align:center;
}
 
 h2 {
    font-size: 16px;
    margin-bottom: 16px;
    text-transform: capitalize;
  }

 img{
    width: 60px;
    height: 60px;
    border-radius: 50%;
 }
a{
    margin-right:3px;
}

section{
    margin-bottom:10px
}
`;
export default function Favoritos(propriedade) {
    const FavoritoNames = Object.keys(propriedade.favo);



    return (
        <StyledFav>
            <div>
                {FavoritoNames.map((favoritoName) => {
                    const favoritos = propriedade.favo[favoritoName];
                    return (
                        <section>
                            <h2>AluraTube Favoritos</h2>
                            <div className="fav-container">
                                {favoritos.map((favorito) => {
                                    return (
                                        <div className="fav">
                                            <a href={favorito.url}>
                                                <img src={favorito.gitimg}></img>
                                                <div>{favorito.title}</div>
                                            </a>
                                        </div>



                                    )
                                })}
                            </div>
                        </section>
                    )
                })}

            </div>
        </StyledFav>
    )
}

