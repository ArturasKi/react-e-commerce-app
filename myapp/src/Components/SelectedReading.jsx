import React from "react";

function SelectedReading() {
  return (
    <div className="reading-container">
      <div className="reading-col">
        <h5>{JSON.parse(localStorage.date)}</h5>
        <h1>{localStorage.title}</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ab optio
          consequuntur harum, non laudantium facilis? Soluta, laboriosam. Qui,
          ipsa ipsum tempore repudiandae dignissimos officia optio molestias
          nostrum numquam, tempora explicabo ullam hic est velit nulla sequi eum
          sunt repellat maxime nihil, mollitia similique aliquam. Dolor,
          veritatis voluptatibus error quo nostrum itaque natus, maiores magni
          consectetur facere minima, libero nisi exercitationem ipsa culpa
          tempore perspiciatis illum facilis explicabo modi eum ex iste quia
          eius! Ad nesciunt itaque modi assumenda consequatur repellendus
          pariatur deleniti deserunt. Sapiente quae voluptas iusto ipsam quis
          necessitatibus maiores aliquam impedit. Recusandae enim eum
          consequatur? Consectetur, expedita! Dignissimos eius enim iste velit
          accusantium vitae obcaecati expedita libero a numquam, cupiditate
          tenetur optio quasi commodi illo dolores sequi, accusamus perspiciatis
          minima maxime. Harum ut culpa, vel, voluptate ipsam eos deserunt ullam
          rem, officia vitae vero. Veritatis, nisi nesciunt? Sit facere fuga
          consectetur, aliquid blanditiis asperiores delectus amet saepe magni
          laudantium dicta ipsam culpa? Eligendi repudiandae modi voluptate
          natus id dignissimos distinctio reprehenderit reiciendis impedit aut,
          ipsa minus dolorum mollitia adipisci dolorem pariatur, quia at veniam
          error assumenda. Eum praesentium perferendis voluptas officia!
          Doloribus sint explicabo qui corrupti incidunt possimus impedit, unde
          nulla soluta est aut magnam expedita et sapiente sequi nam labore
          mollitia a necessitatibus modi quos numquam rem. Error cum quisquam
          ratione, sequi fugiat, nesciunt exercitationem nisi rerum quia aliquid
          dicta facilis necessitatibus fugit? Laborum autem at, inventore iusto
          vel voluptatum illo magni. Aliquam nisi earum, cum, voluptatibus
          praesentium explicabo quaerat quia libero culpa quisquam tempora
          itaque vero nobis, quod obcaecati excepturi dicta minus.
        </p>
      </div>
      <div className="img-col">
        <img src={JSON.parse(localStorage.img)} alt="" />
      </div>
      <div className="reading-col">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ab optio
          consequuntur harum, non laudantium facilis? Soluta, laboriosam. Qui,
          ipsa ipsum tempore repudiandae dignissimos officia optio molestias
          nostrum numquam, tempora explicabo ullam hic est velit nulla sequi eum
          sunt repellat maxime nihil, mollitia similique aliquam. Dolor,
          veritatis voluptatibus error quo nostrum itaque natus, maiores magni
          consectetur facere minima, libero nisi exercitationem ipsa culpa
          tempore perspiciatis illum facilis explicabo modi eum ex iste quia
          eius! Ad nesciunt itaque modi assumenda consequatur repellendus
          pariatur deleniti deserunt. Sapiente quae voluptas iusto ipsam quis
          necessitatibus maiores aliquam impedit. Recusandae enim eum
          consequatur? Consectetur, expedita! Dignissimos eius enim iste velit
          accusantium vitae obcaecati expedita libero a numquam, cupiditate
          tenetur optio quasi commodi illo dolores sequi, accusamus perspiciatis
          minima maxime.
        </p>
      </div>
    </div>
  );
}

export default SelectedReading;
