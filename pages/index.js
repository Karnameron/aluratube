import config from "../config.json"
import styled from "styled-components";
import { CSSReset } from "../src/components/CSSReset";
import { StyledTimeline } from "../src/components/Timeline";
import Menu from "../src/components/Menu";
import Banner from "../src/components/Banner";
import Favoritos from "../src/components/Favoritos";



const StyleDoApp = {
    //backgroundColor: 'red'
};

const StyledHeader = styled.div`

img {
    width: 60px;
    height: 60px;
    border-radius: 50%;

}

.user-info{
    margin-top:75px;
    display:flex;
    align-items:center;
    width:100%
    padding: 16px 32px;
    gap: 16px ;
}
`;


function HomePage() {

    return (
        <>
        <CSSReset/>
            <div>
                <Menu></Menu>
                <Header></Header>
                <Banner></Banner>
                <TimeLine playlists={config.playlists}></TimeLine>
                <Favoritos favo={config.favo}> </Favoritos>
            </div>
        </>
    )
}


export default HomePage


function Header() {
    return (
        <div>
            {/*<img src="banner"></img>*/}
            <StyledHeader>
                <section className="user-info">
                    <img src={`https://github.com/${config.github}.png`}></img>
                    <div>
                        <h2>{config.name}</h2>
                        <p>{config.description}</p>
                    </div>
                </section>
            </StyledHeader>
        </div>
    )
}
function TimeLine(propriedade) {
    const PlaylistNames = Object.keys(propriedade.playlists);
    return (
        <StyledTimeline>
            {PlaylistNames.map((playlistName) => {
                const videos = propriedade.playlists[playlistName];
                return (
                    <section>
                        <h2>{playlistName}</h2>
                        <div>
                            {videos.map((video) => {
                                return (
                                    <a href={video.url}>
                                        <img src={video.thumb} />
                                        <span>
                                            {video.title}
                                        </span>
                                    </a>
                                )
                            })}
                        </div>
                    </section>
                )
            })}
        </StyledTimeline>
    )
}


