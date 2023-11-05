import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Author from "./_Child/Author";
import company from "../../assets/images/company.png";
import { CiBookmark } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";

const Blogs = () => {
  return (
    <div className="container items-center lg:ml-60 ml-8 mt-40 p-3 lg:mx-auto md:px-20">
      <div className="data items-start lg:justify-start justify-center flex-col p-4 space-y-2 md:mt-0  ">
        <div className="heading">
          <a
            className="text-2xl md:text-5xl font-bold text-gray-700 hover:text-gray-800"
            href="/link"
          >
            Druva Interview Experience
          </a>
        </div>
        <Author />
        <div className="flex pb-4 lg:gap-10 items-center">
          <p className="text-gray-500">{`3 mins read • 21/12/2022`}</p>
          <div className="flex gap-3 ml-auto">
            <a href="#">
              <CiHeart color="#888888" />
            </a>
            <a href="#">
              <CiBookmark color="#888888" />
            </a>
          </div>
        </div>
        <div className="lorem-container text-black py-3 justify-center">
          <div className="h-[400px] pb-4" >
            <img src={company} className="w-screen h-full" alt="" />
          </div>
          <p className="text-[20px] text-justify leading-8">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur
            officiis, quasi consectetur natus at, odit culpa excepturi non
            consequuntur eos vitae quibusdam voluptatem, eveniet iste qui
            praesentium. Nesciunt facilis expedita repudiandae illo sunt iste
            veniam, earum consectetur dolorum deleniti beatae reiciendis sint
            aliquid? Illum quaerat aliquam mollitia facilis excepturi eaque?
            Impedit odio officia qui tenetur ducimus possimus error molestias
            necessitatibus minus, quod veritatis laudantium eum quisquam
            repudiandae saepe ea fugit voluptatem quia distinctio commodi
            adipisci! Quos placeat natus reprehenderit rem! Iste at nam quae
            laboriosam exercitationem eius repellat quis impedit et dicta vitae
            quo consequuntur, voluptatem illum commodi amet reprehenderit. Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Dicta ipsum
            laboriosam velit vero ipsam sequi sint alias quibusdam animi quos,
            minima aliquid, sed id natus accusamus temporibus.
            <br />
            <br />
            Tempore a, explicabo corporis labore voluptatum odit vel repellat
            consequuntur dolorem iure molestias reiciendis commodi ea, expedita
            animi est accusantium sunt? Atque repellat eveniet magnam excepturi
            eos dignissimos enim cum illum harum facere, velit doloremque ut
            consequatur fugiat beatae veritatis pariatur aperiam corrupti
            perferendis dolores quibusdam at quasi rem? Est quibusdam repellat
            nam aspernatur enim qui, consequatur ipsum officiis tempore aut
            labore alias tenetur vero eius distinctio veniam sunt ipsa
            voluptatibus nesciunt. Explicabo nesciunt labore quas fugiat, sed
            velit nihil facere odio eum voluptatem, nulla debitis? Molestias
            dolores possimus veniam dicta eaque modi ea illum quaerat quibusdam
            cupiditate iure temporibus ex omnis aliquam assumenda architecto ut
            deleniti tenetur repellat numquam, quidem harum, maiores magni.
            Minima accusamus, tenetur unde neque harum porro, a, delectus id
            cumque reiciendis soluta. Deleniti mollitia, fugiat corporis
            incidunt officia facere, odio aliquid similique, tenetur cumque
            vitae. Expedita blanditiis natus officia, placeat esse itaque
            excepturi fugit dolor possimus inventore ipsum omnis eius debitis
            aperiam iste dignissimos alias ipsa ad obcaecati voluptate nemo?
            Reprehenderit eum repellendus magnam, ut asperiores reiciendis
            officiis similique error explicabo harum! Quas et veniam, magnam,
            provident voluptatem soluta qui, corrupti dolore aperiam es
            <br /> <br />
            se cumque fuga autem! Eum minus quam incidunt nemo explicabo sequi
            ipsa laborum unde id excepturi. Aperiam sequi blanditiis nostrum.
            Iure magni porro obcaecati sunt inventore ducimus illo dolores,
            molestiae eveniet debitis facilis quaerat explicabo aliquid,
            expedita quisquam temporibus veritatis vitae veniam officiis beatae
            autem laborum asperiores voluptas nulla. Debitis impedit iure quos
            suscipit sequi, labore ex pariatur odio, ab, beatae quidem? Dolorem,
            suscipit eos corporis ut ex esse magni blanditiis id reprehenderit
            cupiditate tempore aliquid numquam excepturi officiis, adipisci,
            nulla impedit illo ea fuga.
            <span>
              <a href="/link" className="text-gray-400 hover:text-gray-500">
                ..Read More
              </a>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
