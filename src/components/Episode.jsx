import Title from "./Title";
export default function () {
  return (
    <div className="df">
      <img src="#" alt="Podcast episode cover" />
      <div className="df ai-se">
        <div>
          <Title>
            <a className="fc-base td-none fs-base" href="#">Title</a>
          </Title>
          <Title>
            <a className="fc-base td-none fs-s" href="#">Subtitle</a>
          </Title>
        </div>
        <div>
          <p fc-subdued>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam,
            aperiam! Aliquam repudiandae dolorem possimus libero, ipsum omnis
            tempora, veritatis fuga alias sequi explicabo perferendis quis eos
            amet iusto eveniet ex.
          </p>
        </div>
        <div>
            <img src="#" alt="Play button" />
            <div>
                <span className="bc-subdued">E</span>
                <p className="fs-s fw-4 fc-subdued">MM YYYY</p>
                <span>•</span>
                <p className="fs-s fw-4 fc-subdued">{"time"}</p>
            </div>
            <hr />
        </div>
      </div>
    </div>
  );
}
