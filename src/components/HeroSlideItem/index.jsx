import { useNavigate } from "react-router-dom";
import { CATEGORY, NORMAL_IMG_URL, W500_IMG_URL } from "../../common";
import { getVideos } from "../../services/movies";
import Button from "../Button";

const HeroSlideItem = (props) => {
  const navigate = useNavigate();
  const item = props.item;

  const background = NORMAL_IMG_URL.concat(
    item.backdrop_path ? item.backdrop_path : item.poster_path
  );

  const setModalActive = async () => {
    const modal = document.querySelector(`#modal__${item.id}`);
    const videos = await getVideos(CATEGORY.movie, item.id);

    if (videos.results.length > 0) {
      const videSrc = "https://www.youtube.com/embed/" + videos.results[0].key;
      modal
        .querySelector(".modal__content > iframe")
        .setAttribute("src", videSrc);
    } else {
      modal.querySelector(".modal__content").innerHTML = "No trailer";
    }

    modal.classList.toggle("active");
  };

  return (
    <div
      className={`hero-slide__item ${props.className}`}
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="hero-slide__item__content container">
        <div className="hero-slide__item__content__info">
          <h2 className="title">{item.title}</h2>
          <div className="overview">{item.overview}</div>
          <div className="btns">
            <Button
              className="btn--primary"
              onClick={() => navigate("/movie/" + item.id)}
            >
              Watch now
            </Button>
            <Button className="btn--outline" onClick={setModalActive}>
              Watch trailer
            </Button>
          </div>
        </div>
        <div className="hero-slide__item__content__poster">
          <img src={W500_IMG_URL.concat(item.poster_path)} alt="poster" />
        </div>
      </div>
    </div>
  );
};
export default HeroSlideItem;
