import React from "react";
import config from "../config.json";
import styled from "styled-components";
import { CSSReset } from "../src/components/CSSReset";
import Menu from "../src/components/Menu/Componentes/Menu";
import { StyledTimeline } from "../src/components/Timeline";
import { StyledFavs } from "../src/components/Favoritos";

function HomePage() {
  const [valorDoFiltro, setValorDoFiltro] = React.useState("");

  return (
    <>
      <CSSReset />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          flex: 1,
        }}
      >
        <Menu valorDoFiltro={valorDoFiltro} setValorDoFiltro={setValorDoFiltro}/>
        {// <Banner propriedades={config.banner}/>
        }
        <Header />
        <Timeline searchValue={valorDoFiltro} playlists={config.playlists}/>
        <Favorites favs={config.favs}/>
        
        
      </div>
    </>
  );
}

{/** 
function Banner(){
  return(
    <StyledBanner>
      <img src={`${config.banner}`}/>
    </StyledBanner>
  )
}
*/}


export default HomePage;

// function Menu() {
//     return (
//         <div>
//             Menu
//         </div>
//     )
// }

const StyledHeader = styled.div`
  img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }
  .user-info {
    margin-top: 30px;
    display: flex;
    align-items: center;
    width: 100%;
    padding: 16px 32px;
    gap: 16px;
  }
`;
const StyledBanner = styled.div`
  background-color: blue;
  background-image: url(${({banner}) => banner});
  height: 230px;


`
function Header() {
  return (
    <StyledHeader>
      <StyledBanner banner={config.banner}/>
      {/* <img src="banner" /> */}
      <section className="user-info">
        <img src={`https://github.com/${config.github}.png`} />
        <div>
          <h2>{config.name}</h2>
          <p>{config.job}</p>
        </div>
      </section>
    </StyledHeader>
  );
}

function Timeline({searchValue, ...propriedades}) {
  // console.log("Dentro do componente", propriedades.playlists);
  const playlistNames = Object.keys(propriedades.playlists);
  // Statement
  // Retorno por expressão
  return (
    <StyledTimeline>
      {playlistNames.map((playlistName, id) => {
        const videos = propriedades.playlists[playlistName];
        return (
          <section key={id}>
            <h2>{playlistName}</h2>
            <div>
              {videos.filter((video) => {
                  const titleNormalized = video.title.toLowerCase();
                  const searchValueNormalized = searchValue.toLowerCase();
                  return titleNormalized.includes(searchValueNormalized)
              }).map((videos, id2) => {
                return (
                  <a href={videos.url} key={id2} target="_blank">
                    <img src={videos.thumb} />
                    <span>{videos.title}</span>
                  </a>
                );
              })}
            </div>
          </section>
        );
      })}
    </StyledTimeline>
  );
}

function Favorites(props){
  const favoritesNames = Object.keys(props.favs)
  return(
    <StyledFavs>
      {favoritesNames.map((favoritesName, id) => {
        const favoritos = props.favs[favoritesName];
        return (
            <section key={id}>
              <h2>{favoritesNames}</h2>
                <div>
                  {favoritos.map((favoritos, id2) => {
                    return (
                        <a href={"#"} key={id2}>
                          <img src={favoritos.picture}/>
                          <span>{favoritos.name}</span>
                        </a>
                    )
                  })}
                </div>
            </section>
        )
      })}

    </StyledFavs>
  )
}
